<script lang="ts">
    import Tags from './Tags.svelte'
    import { formatDate } from '$lib/utils'
    import type { BlogPost } from '$lib/types'
    import { getPostMetadata } from '$lib/post-details.remote'

    type Props = {
        post: Omit<BlogPost, 'Content'>
    }
    let { post }: Props = $props()
    let { title, publishedAt, tags } = $derived(post)
    const { minutes } = $derived(await getPostMetadata(post.slug))
</script>

<a href={'/blog/' + post.slug} aria-label="Read blog post" class="group">
    <article
        class="dark:bg-carbon-black rounded-md bg-white p-4 shadow-lg hover:shadow-xl"
    >
        <h2
            class="xs:text-2xl xs:mb-4 decoration-moss mb-2 text-xl leading-[1.1] font-black tracking-tight group-focus-within:underline group-hover:underline"
        >
            {title}
        </h2>
        <div class="flex flex-wrap justify-between gap-2">
            <span class="flex flex-nowrap gap-1 whitespace-nowrap">
                <time datetime={publishedAt.toISOString()}
                    >{formatDate(publishedAt)}</time
                >
                <span class="items-center">&middot;</span>
                <time datetime={`${minutes}m`}>{minutes} min</time>
            </span>
            <Tags {tags} variant="subtle" />
        </div>
    </article>
</a>
