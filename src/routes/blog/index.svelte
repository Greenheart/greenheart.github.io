<script lang="ts" context="module">
    import type { LoadInput } from '@sveltejs/kit'

    import type { BlogPost } from '$lib/interfaces'
    import Tags from '$components/Tags.svelte'
    import { formatDate } from '$lib/formatDate'

    export async function load({ fetch }: LoadInput) {
        try {
            const posts = await fetch('/blog.json').then((res) => res.json())
            return { props: { posts } }
        } catch (error) {
            console.error(error)
        }
    }
</script>

<script lang="ts">
    export let posts: BlogPost[] = []
</script>

<!-- TODO: Add /tags/index.svelte - List all tags and how many posts that exist with each, sort by most posts at the top -->
<!-- TODO: Add /tags/[tag].svelte - List all blog posts with a specific tag, latest first -->

<section class="grid text-center justify-center">
    <h1
        class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8"
    >
        Latest posts.
    </h1>
</section>

<section class="grid grid-cols-1 max-w-prose mx-auto gap-6">
    {#each posts as post}
        <article class="p-4 bg-white shadow-lg rounded-md hover:shadow-xl">
            <h2
                class="text-xl xs:text-2xl md:text-3xl leading-none font-black tracking tight mb-4"
            >
                <a href={'/blog/' + post.slug} sveltekit:prefetch
                    >{post.title}</a
                >
            </h2>
            <div class="flex justify-between">
                <time datetime={post.date}>{formatDate(post.date)}</time>
                {#if post.tags}
                    <Tags tags={post.tags} />
                {/if}
            </div>
        </article>
    {/each}
</section>
