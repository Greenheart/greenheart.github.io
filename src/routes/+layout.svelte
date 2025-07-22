<script module lang="ts">
    import Link from '$components/Link.svelte'
    import Meta from '$components/Meta.svelte'

    import '../global.css'
</script>

<script lang="ts">
    import { page } from '$app/state'
    import Footer from '$components/Footer.svelte'

    const links = [
        { text: 'Blog', href: '/blog' },
        { text: 'About', href: '/about' },
        { text: 'Talks', href: '/talks' },
    ]
</script>

<!-- We need a blank layout for talks since they are rendering a Vue SPA -->
{#if page.route.id === '/talks/[slug]' && !page.error}
    <slot />
{:else}
    <Meta />

    <header
        class="mx-auto flex max-w-6xl flex-1 flex-wrap justify-between gap-x-2 gap-y-4 p-4"
    >
        <Link href="/">Samuel Plumppu</Link>
        <nav class="xs:space-x-4 flex space-x-2">
            {#each links as link}
                <Link href={link.href}>{link.text}</Link>
            {/each}
        </nav>
    </header>

    <div class="container mx-auto max-w-6xl p-4 pb-0">
        <slot />
    </div>

    <Footer />

    <style>
        @media (max-width: 360px) {
            header {
                justify-content: center !important;
            }
        }
    </style>
{/if}
