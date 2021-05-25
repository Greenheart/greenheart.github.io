<script context="module" lang="ts">
    import '../global.css'
    import 'prism-themes/themes/prism-night-owl.css'

    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
    import FaLinkedIn from 'svelte-icons/fa/FaLinkedIn.svelte'
</script>

<!-- <script>
    const links = [
        { text: 'Blog', href: '/blog' },
        { text: 'About', href: '/about' },
    ]
</script> -->

<svelte:head>
    <title>
        Samuel Plumppu | Sustainability Entrepreneur & Fullstack Developer
    </title>
</svelte:head>

<!-- <header class="flex flex-1 justify-between p-4 max-w-6xl mx-auto">
    <a href="/" sveltekit:prefetch class="font-semibold">Samuel Plumppu</a>
    <nav class="flex space-x-4">
        {#each links as link}
            <a href={link.href} sveltekit:prefetch>{link.text}</a>
        {/each}
    </nav>
</header> -->

<div class="container mx-auto max-w-6xl p-4 mt-8">
    <slot />
</div>

<footer class="p-4 text-center mt-8 max-w-6xl mx-auto font-extralight">
    Samuel Plumppu © 2015 - {new Date().getFullYear()}

    <div class="flex justify-center space-x-4 items-center my-8">
        <a href="https://github.com/Greenheart" target="_blank" rel="noopener noreferrer" class="w-10 h-10">
            <DiGithubBadge />
        </a>
        <a href="https://linkedin.com/in/samuelplumppu" target="_blank" rel="noopener noreferrer" class="w-8 h-8">
            <FaLinkedIn />
        </a>
    </div>
</footer>
