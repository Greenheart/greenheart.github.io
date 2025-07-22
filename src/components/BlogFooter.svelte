<script lang="ts" module>
    import Link from './Link.svelte'
</script>

<section
    class="mx-auto mt-12 max-w-md rounded-md bg-white p-4 text-center shadow-lg"
>
    <h2
        class="xs:text-2xl mb-4 text-xl leading-none font-black tracking-tight md:text-3xl"
    >
        Thank you for reading! 🌱
    </h2>
    <p class="lg:text-lg">
        <Link href="/blog" compact>Read more posts</Link>
        or <Link href="/" compact>learn more</Link> about me.
    </p>
</section>
