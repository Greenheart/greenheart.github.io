<script lang="ts" module>
    import { onMount, type Snippet } from 'svelte'
    import type { HTMLAttributes } from 'svelte/elements'

    import isExternalURL from '$lib/isExternalURL'
    import { SITE_URL } from '$lib/constants'

    const isTalk = (href: string) => href.includes(SITE_URL + '/talks/')
</script>

<script lang="ts">
    interface Props extends HTMLAttributes<HTMLAnchorElement> {
        compact?: boolean
        href: string
        children: Snippet
    }
    let {
        compact = false,
        href = '',
        class: className,
        children,
        ...rest
    }: Props = $props()

    let additionalProps = $state({})

    onMount(() => {
        // Treat talks as external links to fully reload the page.
        if (isExternalURL(href) || isTalk(href)) {
            additionalProps = {
                rel: 'external noopener noreferrer',
                target: '_blank',
                'data-sveltekit-reload': true,
            }
        }
    })
</script>

<a
    {href}
    {...rest}
    class={['link', className, compact ? 'compact' : undefined]}
    {...additionalProps}
>
    {@render children()}
</a>
