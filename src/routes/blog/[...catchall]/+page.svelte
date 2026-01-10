<script lang="ts">
    import BlogFooter from '$components/BlogFooter.svelte'
    import Tags from '$components/Tags.svelte'
    import { getPostUpdatedAtFromGit } from '$lib/post-details.remote.js'
    import { formatDate } from '$lib/utils'

    let { data } = $props()

    let { post, older, newer, otherPostsCount } = $derived(data)
    let { title, publishedAt, tags, Content, slug } = $derived(post)
    const updatedAt = $derived(await getPostUpdatedAtFromGit(slug))
</script>

<!-- TODO: Add dynamic meta tags based on post content. -->
<!-- TODO: Add default OG image for all pages on the site -->
<!-- TODO: Add option to override OG image for posts -->

<article
    class="prose prose-hr:border-yellow/60 sm:prose-lg lg:prose-xl prose-blockquote:text-current prose-strong:text-current prose-blockquote:bg-white dark:prose-blockquote:bg-carbon-black prose-blockquote:py-1 prose-blockquote:rounded-md prose-headings:text-current mx-auto mt-4 max-w-[75ch] text-base text-current marker:text-current"
>
    <h1>{title}</h1>
    <div class="flex flex-wrap gap-1 text-sm whitespace-nowrap sm:text-base">
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
    <Tags {tags} class="my-4" />

    <Content />
</article>

<BlogFooter {older} {newer} {otherPostsCount} />
