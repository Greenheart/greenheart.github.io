<script module>
    // Override default components used to render posts: https://mdsvex.com/docs#custom-components
    import { default as a } from '$components/Link.svelte'
    export { a }
</script>

<script>
    import BlogLayout from './_post.svelte'
    let props = $props()
</script>

<BlogLayout {...props} />
