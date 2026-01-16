<script lang="ts">
    import { deepMerge, MetaTags } from 'svelte-meta-tags'

    import { page } from '$app/state'
    import Link from '$components/Link.svelte'
    import Footer from '$components/Footer.svelte'
    import ThemeToggle from '$components/ThemeToggle.svelte'

    import '../global.css'
    import { MASTODON_USERNAME } from '$lib/constants.js'

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

<MetaTags {...metaTags} />
<svelte:head>
    <meta name="fediverse:creator" content={MASTODON_USERNAME} />
</svelte:head>

<header
    class="xs:text-base 2xs:justify-between mx-auto flex max-w-6xl flex-1 flex-wrap justify-center gap-x-2 gap-y-4 p-4 text-sm"
>
    <Link href="/">Samuel Plumppu</Link>
    <nav class="xs:space-x-4 flex space-x-2">
        <Link
            href="/subscribe"
            class="flex"
            title="Subscribe (Atom / JSON)"
            aria-label="Subscribe (Atom / JSON)"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                class="size-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
                ><g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    ><path
                        d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"
                    /><circle cx="5" cy="19" r="1" /></g
                ></svg
            >
        </Link>
        {#each links as link}
            <Link href={link.href}>{link.text}</Link>
        {/each}
        <ThemeToggle />
    </nav>
</header>

<div class="container mx-auto max-w-6xl p-4 pb-0">
    {@render children()}
</div>

<Footer />

<style>
    @media screen and (max-width: 400px) {
        header {
            justify-content: center !important;
            flex-direction: column;
            align-items: center;
        }
    }
</style>
