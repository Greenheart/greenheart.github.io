<script lang="ts">
    import { deepMerge, MetaTags } from 'svelte-meta-tags'

    import { page } from '$app/state'
    import Link from '$components/Link.svelte'
    import Footer from '$components/Footer.svelte'

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
    class="mx-auto flex max-w-6xl flex-1 flex-wrap justify-between gap-x-2 gap-y-4 p-4"
>
    <Link href="/">Samuel Plumppu</Link>
    <nav class="xs:space-x-4 flex space-x-2">
        <Link href="/subscribe" class="flex" title="Subscribe (Atom / JSON)">
            <span
                class="size-5 self-center bg-[url(/images/feed.svg)] bg-cover bg-no-repeat"
            ></span>
        </Link>
        {#each links as link}
            <Link href={link.href}>{link.text}</Link>
        {/each}
    </nav>
</header>

<div class="container mx-auto max-w-6xl p-4 pb-0">
    {@render children()}
</div>

<Footer />

<style>
    @media screen and (max-width: 354px) {
        header {
            justify-content: center !important;
            flex-direction: column;
            align-items: center;
        }
    }
</style>
