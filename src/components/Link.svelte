<script lang="ts" context="module">
    import { onMount } from 'svelte'

    import isExternalURL from '$lib/isExternalURL'
</script>

<script lang="ts">
    export let style = ''
    export let href = ''

    const classes = [$$props.class ?? '', 'link'].join(' ').trim()

    let additionalProps: object

    onMount(() => {
        if (isExternalURL(href)) {
            additionalProps = { rel: 'noopener noreferrer', target: '_blank' }
        } else {
            additionalProps = { 'sveltekit:prefetch': true }
        }
    })
</script>

<a {href} {style} class={classes} {...$$props} {...additionalProps}>
    <slot />
</a>
