<script lang="ts">
    type ImageSource = Pick<HTMLSourceElement, 'srcset'> & {
        type: 'image/webp' | 'image/jpeg' | 'image/png'
    }

    type Props = {
        class?: string
        src: string
        sources: ImageSource[]
        alt: string
        title?: string
        width?: number
        height?: number
    }

    let {
        src,
        class: className = '',
        sources = [],
        alt,
        title,
        width,
        height,
    }: Props = $props()
</script>

<picture>
    {#each sources as { srcset, type }}
        <source {srcset} {type} {width} {height} />
    {/each}
    <img {src} {width} {height} {title} {alt} class={className} />
</picture>
