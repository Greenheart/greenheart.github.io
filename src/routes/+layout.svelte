<script module lang="ts">
    import Link from '$components/Link.svelte'

    import '../global.css'
</script>

<script lang="ts">
    import { page } from '$app/state'
    import Footer from '$components/Footer.svelte'
    import { deepMerge, MetaTags } from 'svelte-meta-tags'

    const links = [
        { text: 'Blog', href: '/blog' },
        { text: 'About', href: '/about' },
        { text: 'Talks', href: '/talks' },
    ]

    let { data, children } = $props()

    let metaTags = $derived(
        deepMerge(data.baseMetaTags, page.data.pageMetaTags ?? {}),
    )
</script>

<!-- We need a blank layout for talks since they are rendering a Vue SPA -->
{#if page.route.id === '/talks/[slug]' && !page.error}
    {@render children()}
{:else}
    <MetaTags {...metaTags} />

    <header
        class="2xs:justify-between mx-auto flex max-w-6xl flex-1 flex-wrap justify-center gap-x-2 gap-y-4 p-4"
    >
        <Link href="/">Samuel Plumppu</Link>
        <nav class="xs:space-x-4 flex space-x-2">
            {#each links as link}
                <Link href={link.href}>{link.text}</Link>
            {/each}
        </nav>
    </header>

    <div class="container mx-auto max-w-6xl p-4 pb-0">
        {@render children()}
    </div>

    <Footer />
{/if}
