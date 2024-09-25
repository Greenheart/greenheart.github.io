<script lang="ts" module>
    import { base64 } from 'rfc4648'

    let decrypted: Promise<string> | undefined = undefined

    const pl = import.meta.env.VITE_PAYLOAD
    const pwd = import.meta.env.VITE_PASSWORD

    if (!pl || !pwd) throw new Error('EncryptedEmail.svelte: Missing data')

    async function deriveKey(salt: Uint8Array, password: string) {
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

        const bytes = base64.parse(pl)
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
    class="bg-mantis py-3 px-8 inline-flex rounded-md shadow-lg hover:shadow-xl transform-gpu hover:scale-105 duration-150 justify-self-center text-black font-black justify-center {className}"
>
    <span class="whitespace-nowrap">
        {label}
    </span>
</a>
