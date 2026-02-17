<script lang="ts">
    import { browser } from '$app/environment'
    import { withoutTransition } from '$lib/without-transition'

    const DARK = 'dark'
    const LIGHT = 'light'

    const themes = [DARK, LIGHT] as const

    let prefersDarkTheme =
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-color-scheme: dark)')
            : { matches: false }

    // @ts-expect-error The optional chaining is enough to abort if running this on the server side (e.g. during prerendering).
    prefersDarkTheme.addEventListener?.('change', (event) => {
        withoutTransition(() => setTheme(event.matches ? DARK : LIGHT))
    })

    function getTheme() {
        if (!browser) return DARK

        if (localStorage.theme) {
            return localStorage.theme
        }

        if (prefersDarkTheme.matches) {
            return DARK
        }

        return LIGHT
    }

    function setTheme(theme: (typeof themes)[number]) {
        localStorage.theme = theme
        currentTheme = theme

        document.documentElement.classList.toggle(
            DARK,
            localStorage.theme === DARK ||
                (!('theme' in localStorage) && prefersDarkTheme.matches),
        )
    }

    let currentTheme = $derived<(typeof themes)[number]>(getTheme())
    let nextTheme = $derived(
        themes[(themes.indexOf(currentTheme) + 1) % themes.length],
    )
</script>

<button
    title={`Toggle theme from ${currentTheme} to ${nextTheme}`}
    aria-label={`Toggle theme from ${currentTheme} to ${nextTheme}`}
    onclick={() => withoutTransition(() => setTheme(nextTheme))}
    class="justify-square -mb-0.5 -ml-2 flex aspect-square cursor-pointer items-center justify-center"
>
    <span class="i-[fluent--dark-theme-24-regular] size-5"></span>
</button>
