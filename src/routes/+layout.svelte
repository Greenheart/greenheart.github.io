<script lang="ts">
    import { deepMerge, MetaTags } from 'svelte-meta-tags'

    import { page } from '$app/state'
    import { browser } from '$app/environment'
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

    const themes = ['dark', 'light', 'system'] as const

    function getTheme() {
        debugger
        if (!browser) return 'system'

        if (localStorage.theme) {
            return localStorage.theme
        }

        if (window.matchMedia('(prefers-color-scheme: dark)')) {
            return 'dark'
        }

        return 'light'
    }

    function setTheme(theme: (typeof themes)[number]) {
        if (theme === 'system') {
            delete localStorage.theme
        } else {
            localStorage.theme = theme
        }
        document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches),
        )
        currentTheme = theme
    }

    let currentTheme = $state<(typeof themes)[number]>(getTheme())
    let nextTheme = $derived(
        themes[(themes.indexOf(currentTheme) + 1) % themes.length],
    )
    $inspect({
        localStorage:
            typeof localStorage !== 'undefined'
                ? localStorage.theme
                : undefined,
        currentTheme,
        nextTheme,
    })
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
        <Link href="/subscribe" class="flex" title="Subscribe (Atom / JSON)">
            <img
                src="/images/feed.svg"
                alt="RSS/Atom feed icon"
                class="size-4"
                fetchpriority="high"
            />
        </Link>
        {#each links as link}
            <Link href={link.href}>{link.text}</Link>
        {/each}
        <button
            title={`Toggle theme from ${currentTheme} to ${nextTheme}`}
            onclick={() => setTheme(nextTheme)}
            class="cursor-pointer"
        >
            <img
                src="/images/theme.svg"
                alt="Theme toggle icon"
                class="size-5 dark:invert"
                fetchpriority="high"
            />
        </button>
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
