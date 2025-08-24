<script lang="ts">
    import BlogFooter from '$components/BlogFooter.svelte'
    import Tags from '$components/Tags.svelte'
    import { formatDate } from '$lib/utils'

    import type { PageData } from './$types'

    export let data: PageData

    let { title, date, tags } = data.meta
</script>

<!-- TODO: Add dynamic meta tags based on post content. -->
<!-- TODO: Add default OG image for all pages on the site -->
<!-- TODO: Add option to override OG image for posts -->

<article
    class="prose prose-hr:border-ming lg:prose-lg xl:prose-xl prose-blockquote:text-black prose-strong:text-black prose-blockquote:bg-white prose-blockquote:py-1 prose-blockquote:rounded-md prose-headings:text-black mx-auto mt-4 max-w-[75ch] text-base text-black marker:text-black"
>
    <h1>{title}</h1>
    <time datetime={date}>{formatDate(date)}</time>
    <Tags {tags} class="my-4" />
    <data.content />
</article>

<BlogFooter />
