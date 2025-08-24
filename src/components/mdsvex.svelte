<script lang="ts" module>
    // Override default components used to render posts: https://mdsvex.com/docs#custom-components
    import { default as a } from './Link.svelte'
    export { a }
</script>

<script lang="ts">
    let props = $props()
</script>

{@render props.children?.()}
