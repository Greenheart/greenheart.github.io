<script lang="ts">
    import { browser } from '$app/environment'

    const themes = ['dark', 'light', 'system'] as const

    function getTheme() {
        debugger
        if (!browser) return 'system'

        if (localStorage.theme) {
            return localStorage.theme
        }

        if (window.matchMedia('(prefers-color-scheme: dark)')) {
            return 'dark'
        }

        return 'light'
    }

    function setTheme(theme: (typeof themes)[number]) {
        if (theme === 'system') {
            delete localStorage.theme
        } else {
            localStorage.theme = theme
        }
        document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches),
        )
        currentTheme = theme
    }

    let currentTheme = $state<(typeof themes)[number]>(getTheme())
    let nextTheme = $derived(
        themes[(themes.indexOf(currentTheme) + 1) % themes.length],
    )
</script>

<button
    title={`Toggle theme from ${currentTheme} to ${nextTheme}`}
    onclick={() => setTheme(nextTheme)}
    class="cursor-pointer"
>
    <img
        src="/images/theme.svg"
        alt="Theme toggle icon"
        class="size-5 dark:invert"
        fetchpriority="high"
    />
</button>
