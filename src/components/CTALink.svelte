<script lang="ts">
    import { type Snippet } from 'svelte'

    interface Props {
        href: string
        onclick?: (event: MouseEvent) => void
        children: Snippet
    }

    const handleClick = (event: MouseEvent) => {
        event.preventDefault()
        onclick?.(event)
    }

    let { href, onclick, children }: Props = $props()
</script>

<a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    onclick={handleClick}
    class="mt-6 bg-mantis py-3 px-8 inline-flex rounded-md shadow-lg hover:shadow-xl transform-gpu hover:scale-105 duration-150 justify-self-center text-black font-black justify-center"
>
    <span class="whitespace-nowrap">
        {@render children()}
    </span>
</a>
