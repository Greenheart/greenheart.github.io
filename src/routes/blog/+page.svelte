<script lang="ts" context="module">
    import PostListing from '$components/PostListing.svelte'
    import type { PageData } from './$types'
</script>

<script lang="ts">
    export let data: PageData
    $: ({ posts } = data)
</script>

<!-- TODO: Add /tags/index.svelte - List all tags and how many posts that exist with each, sort by most posts at the top -->
<!-- TODO: Add /tags/[tag].svelte - List all blog posts with a specific tag, latest first -->

<!-- IDEA: Show tags on this blog index page. Show the number of posts with each tag. -->

<section class="grid text-center justify-center">
    <h1
        class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8"
    >
        Latest Posts
    </h1>
</section>

<section class="grid grid-cols-1 max-w-screen-md mx-auto gap-6">
    {#each posts as post}
        <PostListing {post} />
    {/each}
</section>
