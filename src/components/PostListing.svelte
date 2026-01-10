<script lang="ts">
    import Tags from './Tags.svelte'
    import { formatDate } from '$lib/utils'
    import type { BlogPost } from '$lib/types'

    type Props = {
        post: Omit<BlogPost, 'Content'>
    }
    let { post }: Props = $props()
    let { title, publishedAt, tags } = $derived(post)
</script>

<a href={'/blog/' + post.slug} aria-label="Read blog post">
    <article
        class="dark:bg-carbon-black group rounded-md bg-white p-4 shadow-lg hover:shadow-xl"
    >
        <h2
            class="xs:text-2xl xs:mb-4 decoration-moss mb-2 text-xl leading-[1.1] font-black tracking-tight group-hover:underline"
        >
            {title}
        </h2>
        <div class="xs:flex xs:justify-between xs:gap-0 grid gap-1">
            <time datetime={publishedAt.toISOString()} class="xs:m-0 mb-2"
                >{formatDate(publishedAt)}</time
            >
            <Tags {tags} variant="subtle" />
        </div>
    </article>
</a>
