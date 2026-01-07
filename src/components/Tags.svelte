<script lang="ts">
    const variants = {
        default: 'bg-mantis',
        subtle: 'bg-honeydew',
    } as const

    type Props = {
        tags?: string[]
        class?: string
        variant?: keyof typeof variants
    }
    let { tags, class: className, variant = 'default' }: Props = $props()
</script>

{#if tags}
    <div
        class={[
            'xs:text-sm flex flex-wrap items-center gap-2 text-xs leading-3 sm:text-base',
            className,
        ]}
    >
        {#each tags as tag}
            <span class="{variants[variant]} rounded-xs p-1 sm:p-2">
                {tag}
            </span>
        {/each}
    </div>
{/if}
