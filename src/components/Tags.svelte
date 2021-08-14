<script context="module" lang="ts">
    import type { BlogPost } from '$lib/interfaces'
</script>

<script lang="ts">
    export let tags: Required<BlogPost>['tags']

    const classes = `flex space-x-2 items-center ${$$props.class ?? ''}`
</script>

<div class={classes}>
    {#each tags as tag}
        <span class="p-1 bg-mantis text-xs md:text-sm rounded-sm leading-3">
            {tag}
        </span>
    {/each}
</div>
