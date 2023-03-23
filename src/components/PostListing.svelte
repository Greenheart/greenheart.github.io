<script lang="ts">
    import Tags from './Tags.svelte'
    import { formatDate } from '$lib/utils'
    import type { BlogPost } from '$lib/interfaces'

    export let post: BlogPost
</script>

<a href={'/blog/' + post.slug}>
    <article class="p-4 bg-white shadow-lg rounded-md hover:shadow-xl">
        <h2
            class="text-xl xs:text-2xl leading-[1.1] font-black tracking-tight mb-2 xs:mb-4"
        >
            {post.title}
        </h2>
        <div class="xs:flex xs:justify-between grid gap-1 xs:gap-0">
            <time datetime={post.date}>{formatDate(post.date)}</time>
            {#if post.tags}
                <Tags tags={post.tags} />
            {/if}
        </div>
    </article>
</a>
