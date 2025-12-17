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
    class="prose prose-hr:border-ming sm:prose-lg lg:prose-xl prose-blockquote:text-black prose-strong:text-black prose-blockquote:bg-white prose-blockquote:py-1 prose-blockquote:rounded-md prose-headings:text-black mx-auto mt-4 max-w-[75ch] text-base text-black marker:text-black"
>
    <h1>{title}</h1>
    <div class="flex gap-1">
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
