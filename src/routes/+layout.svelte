<script context="module" lang="ts">
    import Link from '$components/Link.svelte'
    import Meta from '$components/Meta.svelte'

    import '../global.css'
</script>

<script lang="ts">
    import { page } from '$app/stores'
    import Footer from '$components/Footer.svelte'

    const links = [
        { text: 'Blog', href: '/blog' },
        { text: 'About', href: '/about' },
        { text: 'Talks', href: '/talks' },
    ]
</script>

<!-- We need a blank layout for talks since they are rendering a Vue SPA -->
{#if $page.route.id === '/talks/[slug]' && !$page.error}
    <slot />
{:else}
    <Meta />

    <header
        class="flex flex-1 justify-between p-4 max-w-6xl mx-auto flex-wrap gap-y-4 gap-x-2"
    >
        <Link href="/">Samuel Plumppu</Link>
        <nav class="flex space-x-2 xs:space-x-4">
            {#each links as link}
                <Link href={link.href}>{link.text}</Link>
            {/each}
        </nav>
    </header>

    <div class="container mx-auto max-w-6xl p-4 pb-0">
        <slot />
    </div>

    <Footer />

    <style lang="postcss">
        @media (max-width: 360px) {
            header {
                @apply !justify-center;
            }
        }
    </style>
{/if}
