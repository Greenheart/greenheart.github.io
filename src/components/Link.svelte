<script lang="ts" context="module">
    import { onMount } from 'svelte'

    import isExternalURL from '$lib/isExternalURL'
    import { cx } from '$lib/utils'
</script>

<script lang="ts">
    export let href = ''
    let additionalProps: object
    let className = ''
    export { className as class }

    onMount(() => {
        if (isExternalURL(href)) {
            additionalProps = { rel: 'noopener noreferrer', target: '_blank' }
        } else {
            additionalProps = { 'sveltekit:prefetch': true }
        }
    })
</script>

<a {href} {...$$props} class={cx('link', className)} {...additionalProps}>
    <slot />
</a>
