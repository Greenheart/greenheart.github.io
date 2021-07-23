<script lang="ts" context="module">
    import { onMount } from 'svelte'

    import isExternalURL from '$lib/isExternalURL'
</script>

<script lang="ts">
    export let style = ''
    export let href = ''

    const classes = [$$props.class ?? '', 'link'].join(' ').trim()

    let isExternal = {}

    onMount(() => {
        if (isExternalURL(href)) {
            isExternal = { rel: 'noopener noreferrer', target: '_blank' }
        }
    })
</script>

<a {href} {style} class={classes} {...$$props} {...isExternal}>
    <slot />
</a>
