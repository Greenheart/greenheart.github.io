<script module lang="ts">
    import type { BlogPost } from '$lib/interfaces'
</script>

<script lang="ts">
    type Props = {
        tags: Required<BlogPost>['tags']
        class?: string
    }
    let { tags, class: className }: Props = $props()
</script>

<div class={['flex flex-wrap items-center gap-2', className]}>
    {#each tags as tag}
        <span class="p-1 bg-mantis text-xs md:text-sm rounded-xs leading-3">
            {tag}
        </span>
    {/each}
</div>
