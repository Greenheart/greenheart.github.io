<script context="module" lang="ts">
    import '../global.css'
    import 'prism-themes/themes/prism-night-owl.css'
</script>

<script>
    const links = [{ text: 'Blog', href: '/blog' }, { text: 'About', href: '/about' }]
</script>

<header class="flex flex-1 justify-between p-4">
    <a href="/" sveltekit:prefetch class="font-semibold">Samuel Plumppu</a>
    <nav class="flex space-x-4">
        {#each links as link}
            <a href={link.href} sveltekit:prefetch>{link.text}</a>
        {/each}
    </nav>
</header>

<div class="container mx-auto">
    <slot />
</div>

<footer class="p-4 text-center mt-8">
    Samuel Plumppu © 2015 - {new Date().getFullYear()}
</footer>
