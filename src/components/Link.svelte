<script lang="ts">
    export let style = ''
    export let href = ''

    const classes = [$$props.class ?? '', 'link'].join(' ')
</script>

<a {href} {style} class={classes} {...$$props}>
    <slot />
</a>
