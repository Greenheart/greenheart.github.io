<script lang="ts">
    export let style = ''
    export let href = ''

    const classes = [$$props.class ?? '', 'link'].join(' ').trim()
</script>

<a {href} {style} class={classes} {...$$props}>
    <slot />
</a>
