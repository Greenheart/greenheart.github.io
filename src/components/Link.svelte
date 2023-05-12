<script lang="ts" context="module">
    import { onMount } from 'svelte'

    import isExternalURL from '$lib/isExternalURL'
    import { cx } from '$lib/utils'
    import { SITE_URL } from '$lib/constants'

    const isTalk = (href: string) => href.includes(SITE_URL + '/talks/')
</script>

<script lang="ts">
    export let compact = false

    export let href = ''
    let additionalProps: object
    let className = ''
    export { className as class }

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
    {...$$props}
    class={cx('link', className, compact ? 'compact' : undefined)}
    {...additionalProps}
>
    <slot />
</a>
