<script lang="ts">
    import Tags from './Tags.svelte'
    import { formatDate } from '$lib/utils'
    import type { BlogPost } from '$lib/types'

    type Props = {
        post: BlogPost
    }
    let { post }: Props = $props()
</script>

<a href={'/blog/' + post.slug} aria-label="Read blog post">
    <article class="rounded-md bg-white p-4 shadow-lg hover:shadow-xl">
        <h2
            class="xs:text-2xl xs:mb-4 mb-2 text-xl leading-[1.1] font-black tracking-tight"
        >
            {post.title}
        </h2>
        <div class="xs:flex xs:justify-between xs:gap-0 grid gap-1">
            <time datetime={post.date} class="xs:m-0 mb-2"
                >{formatDate(post.date)}</time
            >
            <Tags tags={post.tags} />
        </div>
    </article>
</a>
