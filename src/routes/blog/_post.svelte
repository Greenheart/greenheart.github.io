<script context="module">
    import Tags from '$components/Tags.svelte'
    import { formatDate } from '$lib/formatDate'
    import { baseTitle } from '$lib/constants'

    // Override default components used to render posts: https://mdsvex.com/docs#custom-components
    import Link from '$components/Link.svelte'
    export { Link as a }

    import 'prism-themes/themes/prism-night-owl.css'
</script>

<script>
    // TODO: Update this layout to use TypeScript when mdsvex supports it.
    // See https://github.com/pngwn/MDsveX/issues/116
    // As a temporary fix, default values are used to describe the expected types
    export let title = ''
    export let date = ''
    export let tags = ['']
</script>

<svelte:head>
    <title>{`${title} | ${baseTitle}`}</title>
</svelte:head>

<!-- TODO: Add dynamic meta tags based on post content. -->
<!-- TODO: Add default OG image for all pages on the site -->
<!-- TODO: Add option to override OG image for posts -->

<h1 class="font-black text-4xl lg:text-5xl mx-auto text-center">{title}</h1>

<article
    class="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto text-base mt-4"
>
    <time datetime={date}>{formatDate(date)}</time>
    <Tags {tags} class="my-2" />
    <slot />
</article>

<section
    class="p-4 bg-white shadow-lg rounded-md mx-auto mt-12 max-w-md text-center"
>
    <h2
        class="text-xl xs:text-2xl md:text-3xl leading-none font-black tracking-tight mb-4"
    >
        Thank you for reading! 🌱
    </h2>
    <p class="lg:text-lg">
        <Link href="/blog" class="p-[0.1rem]">Read more posts</Link>
        or <Link href="/" class="p-[0.1rem]">learn more</Link> about me.
    </p>
</section>

<!-- IDEA: Add links to more posts at the bottom of every post -->
<!-- IDEA: Add short info about me at the bottom of every post, linking to home/about for more details -->
