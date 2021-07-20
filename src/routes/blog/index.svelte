<script lang="ts">
    import type { BlogPost } from '../../lib/interfaces'
    import Tags from '../../components/Tags.svelte'

    const posts: BlogPost[] = [
        {
            date: '2021-05-22',
            title: 'My first post',
            tags: ['Svelte', 'TypeScript'],
        },
        {
            date: '2021-06-17',
            title: 'Another post',
            tags: ['React', 'Redux Toolkit'],
        },
        {
            date: '2021-07-20',
            title: 'This is the title. And this is a really long one which still will look pretty good.',
            tags: ['TypeScript', 'Node.js'],
        },
    ]
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
        <article class="p-4 bg-white shadow-lg rounded-md">
            <h2
                class="text-xl xs:text-2xl md:text-3xl leading-none font-black tracking tight mb-4"
            >
                {post.title}
            </h2>
            <div class="flex justify-between">
                <time datetime={post.date}>{post.date}</time>
                {#if post.tags}
                    <Tags tags={post.tags} />
                {/if}
            </div>
        </article>
    {/each}
</section>

<!-- TODO: Add util that fetches all posts, and parses their frontmatter to make it available for svelte code -->
<!-- TODO: Add /blog/index.svelte - List all blog posts, latest first -->
