<script lang="ts" context="module">
    import { onMount } from 'svelte'

    import isExternalURL from '$lib/isExternalURL'
</script>

<script lang="ts">
    export let href = ''
    let additionalProps: object
    const classes = [$$props.class ?? '', 'link'].join(' ').trim()

    onMount(() => {
        if (isExternalURL(href)) {
            additionalProps = { rel: 'noopener noreferrer', target: '_blank' }
        } else {
            additionalProps = { 'sveltekit:prefetch': true }
        }
    })
</script>

<a {href} class={classes} {...$$props} {...additionalProps}>
    <slot />
</a>
