<script lang="ts" module>
    import PostListing from '$components/PostListing.svelte'
</script>

<script lang="ts">
    import SubscribeLinks from '$components/SubscribeLinks.svelte'

    let { data } = $props()
    const { posts } = $derived(data)
</script>

<!-- TODO: Add /tags/index.svelte - List all tags and how many posts that exist with each, sort by most posts at the top -->
<!-- TODO: Add /tags/[tag].svelte - List all blog posts with a specific tag, latest first -->

<!-- IDEA: Show tags on this blog index page. Show the number of posts with each tag. -->

<section class="mb-8 grid justify-center text-center">
    <h1
        class="xs:text-5xl mb-8 text-4xl leading-none font-black tracking-tight sm:text-6xl lg:text-7xl"
    >
        Blog archive
    </h1>
    <SubscribeLinks />
</section>

<section class="mx-auto grid max-w-(--breakpoint-md) grid-cols-1 gap-6">
    {#each posts as post}
        <PostListing {post} />
    {/each}
</section>
