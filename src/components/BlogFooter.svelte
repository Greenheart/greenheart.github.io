<script lang="ts" module>
    import Link from './Link.svelte'
</script>

<section
    class="p-4 bg-white shadow-lg rounded-md mx-auto mt-12 max-w-md text-center"
>
    <h2
        class="text-xl xs:text-2xl md:text-3xl leading-none font-black tracking-tight mb-4"
    >
        Thank you for reading! 🌱
    </h2>
    <p class="lg:text-lg">
        <Link href="/blog" compact>Read more posts</Link>
        or <Link href="/" compact>learn more</Link> about me.
    </p>
</section>
