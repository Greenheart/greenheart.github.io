<script context="module" lang="ts">
    import Link from '../components/Link.svelte'

    import LinkedIn from '../../static/images/linkedin.svg'
    import GitHub from '../../static/images/github.svg'
    import '../global.css'
</script>

<script>
    const links = [
        { text: 'Blog', href: '/blog' },
        // { text: 'About', href: '/about' },
    ]
</script>

<svelte:head>
    <title>
        Samuel Plumppu | Sustainability Entrepreneur & Fullstack Developer
    </title>
</svelte:head>

<header class="flex flex-1 justify-between p-4 max-w-6xl mx-auto">
    <a href="/" sveltekit:prefetch class="font-semibold grid place-items-center">Samuel Plumppu</a>
    <nav class="flex space-x-4">
        {#each links as link}
            <Link href={link.href} sveltekit:prefetch>{link.text}</Link>
        {/each}
    </nav>
</header>

<div class="container mx-auto max-w-6xl p-4 mt-8">
    <slot />
</div>

<footer class="p-4 text-center mt-8 max-w-6xl mx-auto font-light">
    Samuel Plumppu © 2015 - {new Date().getFullYear()}

    <div class="flex justify-center space-x-4 items-center my-8">
        <a
            href="https://github.com/Greenheart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See my profile on GitHub"
        >
            <img src={GitHub} alt="GitHub" class="w-8 h-8" />
        </a>
        <a
            href="https://linkedin.com/in/samuelplumppu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with me on LinkedIn"
        >
            <img src={LinkedIn} alt="LinkedIn" class="w-8 h-8" />
        </a>
    </div>
</footer>
