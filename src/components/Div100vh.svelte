<script context="module" lang="ts">
    import { writable } from 'svelte/store'
    import { onMount } from 'svelte'
    import { browser } from '$app/env'

    function measureHeight() {
        if (!browser) return null
        return document.documentElement?.clientHeight || window.innerHeight
    }
</script>

<script lang="ts">
    export let style = ''

    const height = writable<number | null>(measureHeight())

    function setMeasuredHeight() {
        $height = measureHeight()
    }

    onMount(() => {
        // TODO: Maybe add performance improvement by debouncing / throttling
        window.addEventListener('resize', setMeasuredHeight)
        return () => window.removeEventListener('resize', setMeasuredHeight)
    })

    /**
     * Replace with real browser height.
     * Also add slight height offset to prevent screen glitches during rapid updates.
     */
    function replaceWithRealHeight(style: string) {
        const realHeight = `height: ${$height ? `${$height + 150}px` : '100vh'}`
        return style.replace(/(height:[^;]+;?)/, realHeight)
    }
</script>

<!-- TODO: Investigate wheter or not to pass all props depending on performance improvement. -->
<div style={replaceWithRealHeight(style)} {...$$props}>
    <slot />
</div>
