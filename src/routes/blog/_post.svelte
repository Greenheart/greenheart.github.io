<script context="module">
    import { formatDate } from '$lib/formatDate'

    import 'prism-themes/themes/prism-night-owl.css'
</script>

<script>
    // TODO: Update this layout to use TypeScript when mdsvex supports it.
    // See https://github.com/pngwn/MDsveX/issues/116
    // As a temporary fix, default values are used to describe the expected types
    export let title = ''
    export let date = ''
    export let tags = ['']
</script>

<!-- TODO: Add dynamic meta tags based on post content. -->
<!-- TODO: Add default OG image for all pages on the site -->
<!-- TODO: Add option to override OG image for posts -->

<article class="prose lg:prose-lg mx-auto text-base">
    <h1>{title}</h1>
    <time datetime={date}>{formatDate(date)}</time>

    <div class="my-2 flex space-x-2 uppercase">
        {#each tags as tag}
            <span class="p-1 bg-mantis text-xs rounded-sm leading-3">
                {tag}
            </span>
        {/each}
    </div>

    <slot />
</article>

<!-- IDEA: Add links to more posts at the bottom of every post -->
<!-- IDEA: Add short info about me at the bottom of every post, linking to home/about for more details -->
