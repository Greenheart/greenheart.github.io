<script context="module" lang="ts">
    import type { BlogPost } from '$lib/interfaces'
    import { cx } from '$lib/utils'
</script>

<script lang="ts">
    export let tags: Required<BlogPost>['tags']
    let className = ''
    export { className as class }
</script>

<div class={cx('flex flex-wrap items-center gap-2', className)}>
    {#each tags as tag}
        <span class="p-1 bg-mantis text-xs md:text-sm rounded-sm leading-3">
            {tag}
        </span>
    {/each}
</div>
