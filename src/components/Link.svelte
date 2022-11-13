<script lang="ts" context="module">
    import { onMount } from 'svelte'

    import isExternalURL from '$lib/isExternalURL'
    import { cx } from '$lib/utils'
</script>

<script lang="ts">
    export let compact = false

    export let href = ''
    let additionalProps: object
    let className = ''
    export { className as class }

    onMount(() => {
        if (isExternalURL(href)) {
            additionalProps = {
                rel: 'noopener noreferrer',
                target: '_blank',
                'data-sveltekit-prefetch': 'off',
            }
        }
    })
</script>

<a
    {href}
    {...$$props}
    class={cx('link', className, compact ? 'compact' : undefined)}
    {...additionalProps}
>
    <slot />
</a>
