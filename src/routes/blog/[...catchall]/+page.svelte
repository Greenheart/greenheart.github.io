<script lang="ts">
    import BlogFooter from '$components/BlogFooter.svelte'
    import Tags from '$components/Tags.svelte'
    import { getPostMetadata } from '$lib/post-details.remote.js'
    import { formatDate } from '$lib/utils'

    let { data } = $props()

    let { post, older, newer, otherPostsCount } = $derived(data)
    let { title, publishedAt, tags, Content, slug } = $derived(post)
    const { updatedAt, minutes } = $derived(await getPostMetadata(slug))
</script>

<!-- TODO: Add dynamic meta tags based on post content. -->
<!-- TODO: Add default OG image for all pages on the site -->
<!-- TODO: Add option to override OG image for posts -->

<article
    class="prose prose-hr:border-yellow/60 sm:prose-lg lg:prose-xl prose-blockquote:text-current prose-strong:text-current prose-blockquote:bg-white dark:prose-blockquote:bg-carbon-black prose-blockquote:py-1 prose-blockquote:rounded-md prose-headings:text-current mx-auto mt-4 max-w-[75ch] text-base text-current marker:text-current"
>
    <h1>{title}</h1>
    <div
        class="flex flex-wrap items-center gap-x-2 gap-y-4 text-xs whitespace-nowrap sm:text-sm"
    >
        <time datetime={`${minutes}m`} class="2xs:w-min w-full"
            >{minutes} min read</time
        >
        <span class="2xs:block hidden self-center">~</span>
        <div class="flex flex-nowrap gap-1">
            <span>
                Published <time datetime={publishedAt.toISOString()}
                    >{formatDate(publishedAt)}</time
                ></span
            >
            <span>
                {#if updatedAt}
                    &middot; Updated
                    <time datetime={updatedAt.toISOString()}
                        >{formatDate(updatedAt)}</time
                    >
                {/if}
            </span>
        </div>
    </div>
    <Tags {tags} class="my-4" />

    <Content />
</article>

<BlogFooter {older} {newer} {otherPostsCount} />
