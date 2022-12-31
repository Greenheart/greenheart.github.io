<script lang="ts">
    type ImageSource = Pick<HTMLSourceElement, 'srcset'> & {
        type: 'image/webp' | 'image/jpeg' | 'image/png'
    }
    let className = ''
    export let src: string
    export let sources: ImageSource[] = []
    export let alt: string
    export let title: string | undefined = undefined
    export let width: number | undefined
    export let height: number | undefined
    export { className as class }
</script>

<picture>
    {#each sources as { srcset, type }}
        <source {srcset} {type} {width} {height} />
    {/each}
    <img {src} {width} {height} {title} {alt} class={className} />
</picture>
