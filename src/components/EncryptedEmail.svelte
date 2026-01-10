<script lang="ts" module>
    import { parse } from '$lib/base64'

    let decrypted: Promise<string> | undefined = undefined

    const pl = import.meta.env.VITE_PAYLOAD
    const pwd = import.meta.env.VITE_PASSWORD

    if (!pl || !pwd) throw new Error('EncryptedEmail.svelte: Missing data')

    async function deriveKey(salt: Uint8Array<ArrayBuffer>, password: string) {
        const encoder = new TextEncoder()
        const baseKey = await crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            'PBKDF2',
            false,
            ['deriveKey'],
        )
        return await crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt, iterations: 2e5, hash: 'SHA-256' },
            baseKey,
            { name: 'AES-GCM', length: 256 },
            true,
            ['decrypt'],
        )
    }

    async function decrypt(pl: string, password: string) {
        const decoder = new TextDecoder()

        const bytes = parse(pl)
        const salt = bytes.slice(0, 32)
        const iv = bytes.slice(32, 32 + 16)
        const ciphertext = bytes.slice(32 + 16)

        const key = await deriveKey(salt, password)

        const data = new Uint8Array(
            await crypto.subtle.decrypt(
                { name: 'AES-GCM', iv },
                key,
                ciphertext,
            ),
        )
        if (!data) throw 'Malformed data'

        return decoder.decode(data)
    }

    export async function getDecryptedEmail(pl: string, password: string) {
        // Only decrypt once and then re-use the result
        return decrypted ? decrypted : decrypt(pl, password)
    }
</script>

<script lang="ts">
    import { onMount } from 'svelte'
    import { once } from '../lib/utils'

    type Props = {
        class?: string
        label?: string
    }
    const { class: className = '', label = 'Email me' }: Props = $props()

    let href = $state('#')
    let email = $state('')

    function showEmail(event: PointerEvent) {
        event.preventDefault()
        event.stopPropagation()
        if (event.isTrusted) {
            href = 'mailto:' + email
        }
    }

    onMount(async () => {
        email = await getDecryptedEmail(pl, pwd)
    })
</script>

<a
    {href}
    onpointerenter={once(showEmail)}
    onfocusin={once(showEmail)}
    class="bg-moss inline-flex transform-gpu justify-center justify-self-center rounded-md px-8 py-3 font-black text-black shadow-lg duration-150 hover:scale-105 hover:shadow-xl {className}"
>
    <span class="whitespace-nowrap">
        {label}
    </span>
</a>
