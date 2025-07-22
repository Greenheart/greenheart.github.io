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
        <span class="bg-mantis rounded-xs p-1 text-xs leading-3 md:text-sm">
            {tag}
        </span>
    {/each}
</div>
