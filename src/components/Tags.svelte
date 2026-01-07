<script lang="ts">
    type Props = {
        tags?: string[]
        class?: string
    }
    let { tags, class: className }: Props = $props()
</script>

{#if tags}
    <div
        class={[
            'xs:text-sm flex flex-wrap items-center gap-2 text-xs leading-3 sm:text-base',
            className,
        ]}
    >
        {#each tags as tag}
            <span class="bg-mantis rounded-xs p-1 sm:p-2">
                {tag}
            </span>
        {/each}
    </div>
{/if}
