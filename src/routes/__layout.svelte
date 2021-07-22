<script context="module" lang="ts">
    import Link from '$components/Link.svelte'
    import EncryptedEmail from '$components/EncryptedEmail.svelte'

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
    <Link href="/" sveltekit:prefetch>Samuel Plumppu</Link>
    <nav class="flex space-x-4">
        {#each links as link}
            <Link href={link.href} sveltekit:prefetch>{link.text}</Link>
        {/each}
    </nav>
</header>

<div class="container mx-auto max-w-6xl p-4 mt-8">
    <slot />
</div>

<footer class="container px-4 pb-4 text-center max-w-6xl mx-auto font-light">
    <hr class="my-16 max-w-sm mx-auto border-ming" id="contact" />
    <h2
        class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none mb-6"
    >
        Let's co-create a sustainable future!
    </h2>

    <EncryptedEmail />

    <p class="mt-8">Samuel Plumppu © 2015 - {new Date().getFullYear()}</p>

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
