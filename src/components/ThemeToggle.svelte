<script lang="ts">
    import { browser } from '$app/environment'

    const themes = ['dark', 'light'] as const

    function getTheme() {
        if (!browser) return 'dark'

        if (localStorage.theme) {
            return localStorage.theme
        }

        if (window.matchMedia('(prefers-color-scheme: dark)')) {
            return 'dark'
        }

        return 'light'
    }

    function setTheme(theme: (typeof themes)[number]) {
        localStorage.theme = theme
        currentTheme = theme

        document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches),
        )
    }

    let currentTheme = $state<(typeof themes)[number]>(getTheme())
    let nextTheme = $derived(
        themes[(themes.indexOf(currentTheme) + 1) % themes.length],
    )
</script>

<button
    title={`Toggle theme from ${currentTheme} to ${nextTheme}`}
    aria-label={`Toggle theme from ${currentTheme} to ${nextTheme}`}
    onclick={() => setTheme(nextTheme)}
    class="cursor-pointer"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        class="size-5"
        viewBox="0 0 24 24"
        ><path
            fill="currentColor"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-1.5v-17a8.5 8.5 0 0 1 0 17"
        /></svg
    >
</button>
