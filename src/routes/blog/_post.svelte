<script context="module">
    import { formatDate } from '$lib/util'
</script>

<script>
    // TODO: Update this layout to use TypeScript when mdsvex supports it.
    // See https://github.com/pngwn/MDsveX/issues/116
    // As a temporary fix, default values are used to describe the expected types
    export let title = ''
    export let date = ''
    export let tags = ['']
</script>

<h1 class="bg-red-300">{title}</h1>
<time datetime={date}>{formatDate(date)}</time>

<div class="my-8 flex space-x-2 uppercase">
    {#each tags as tag}
        <div class="p-1 bg-green-400 text-xs rounded-sm leading-3">{tag}</div>
    {/each}
</div>

<slot />

<!-- TODO: Add tailwind typography plugin -->
<!-- TODO: create post layout -->

<!-- IDEA: Add links to more posts at the bottom of every post -->
<!-- IDEA: Add short info about me at the bottom of every post, linking to home/about for more details -->