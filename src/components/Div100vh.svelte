<script context="module" lang="ts">
    import { writable } from 'svelte/store'
    import { onMount } from 'svelte'
    import throttle from 'lodash-es/throttle'

    import { browser } from '$app/env'

    function measureHeight() {
        if (!browser) return null
        return document.documentElement?.clientHeight || window.innerHeight
    }
</script>

<script lang="ts">
    export let style = ''

    const height = writable<number | null>(measureHeight())

    const setMeasuredHeight = throttle(() => {
        $height = measureHeight()
    }, 16)

    onMount(() => {
        window.addEventListener('resize', setMeasuredHeight)
        return () => window.removeEventListener('resize', setMeasuredHeight)
    })

    function replaceWithRealHeight(style: string) {
        const realHeight = `height: ${$height ? `${$height}px` : '100vh'}`
        return style.replace(/(height:[^;]+;?)/, realHeight)
    }
</script>

<div style={replaceWithRealHeight(style)} {...$$props}>
    <slot />
</div>
