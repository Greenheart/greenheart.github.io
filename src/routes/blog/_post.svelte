<script module>
    import Tags from '$components/Tags.svelte'
    import BlogFooter from '$components/BlogFooter.svelte'
    import { formatDate } from '$lib/utils'
    import { BASE_TITLE } from '$lib/constants'

    // Override default components used to render posts: https://mdsvex.com/docs#custom-components
    import { default as a } from '$components/Link.svelte'
    export { a }

    import 'prism-themes/themes/prism-night-owl.css'
</script>

<script lang="ts">
    import type { Snippet } from 'svelte'

    // TODO: Update this layout to use TypeScript when mdsvex supports it.
    // See https://github.com/pngwn/MDsveX/issues/116

    // As a temporary fix, we use the BlogLayoutWrapper.svelte to pass down the actual props

    type Props = {
        title: string
        date: string
        tags: string[]
        children: Snippet
    }
    let { title, date, tags, children }: Props = $props()
</script>

<svelte:head>
    <title>{`${title} | ${BASE_TITLE}`}</title>
</svelte:head>

<!-- TODO: Add dynamic meta tags based on post content. -->
<!-- TODO: Add default OG image for all pages on the site -->
<!-- TODO: Add option to override OG image for posts -->

<article
    class="prose prose-hr:border-ming lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-blockquote:text-black prose-strong:text-black prose-blockquote:bg-white prose-blockquote:py-1 prose-blockquote:rounded-md prose-headings:text-black mx-auto mt-4 max-w-[75ch] text-base text-black marker:text-black"
>
    <h1>{title}</h1>
    <time datetime={date}>{formatDate(date)}</time>
    <Tags {tags} class="my-2" />
    {@render children()}
</article>

<BlogFooter />

<style>
    :global(.prose h2 code) {
        color: white;
    }
</style>
