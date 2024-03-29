<script lang="ts" context="module">
    import { base64 } from 'rfc4648'
</script>

<script lang="ts">
    import { onMount } from 'svelte'

    export let pl = import.meta.env.VITE_PAYLOAD
    export let pwd = import.meta.env.VITE_PASSWORD

    if (!pl || !pwd) throw 'EncryptedEmail.svelte: Missing data'

    let label = 'Show Email'
    let href = '#'
    let text = ''

    async function deriveKey(salt: Uint8Array, password: string) {
        const encoder = new TextEncoder()
        const baseKey = await crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            'PBKDF2',
            false,
            ['deriveKey']
        )
        return await crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt, iterations: 2e5, hash: 'SHA-256' },
            baseKey,
            { name: 'AES-GCM', length: 256 },
            true,
            ['decrypt']
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
                ciphertext
            )
        )
        if (!data) throw 'Malformed data'

        return decoder.decode(data)
    }

    onMount(async () => {
        text = await decrypt(pl, pwd)
    })

    async function showEmail() {
        href = 'mailto:' + text
        label = text
    }
</script>

<a
    {href}
    on:click|once|preventDefault|trusted={showEmail}
    class="bg-mantis py-3 px-8 inline-flex rounded-md shadow-lg hover:shadow-xl transform-gpu hover:scale-105 duration-150 justify-self-center text-black font-black justify-center"
>
    <span class="whitespace-nowrap">
        {label}
    </span>
</a>
