<script lang="ts">
    import Link from '$components/Link.svelte'
    import { SITE_URL } from '$lib/constants'
</script>

<div class="flex text-center flex-col items-center">
    <h2 class="font-bold">Scan to connect with me</h2>
    <Link href={SITE_URL}>{SITE_URL}</Link>
    <img
        src="/images/qr-sp.svg"
        class="w-64 h-64 pt-4"
        alt={`QR code to easily share the website ${SITE_URL} on for example conferences and in presentations`}
    />
</div>
