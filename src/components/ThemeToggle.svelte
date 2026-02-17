<script lang="ts">
    import { browser } from '$app/environment'
    import { withoutTransition } from '$lib/without-transition'

    const themes = ['dark', 'light'] as const

    // let prefersDarkTheme = new MediaQuery('(prefers-color-scheme: dark)')
    let prefersDarkTheme =
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-color-scheme: dark)')
            : { matches: false }

    // @ts-expect-error The optional chaining is enough to abort if running this on the server side (e.g. during prerendering).
    prefersDarkTheme.addEventListener?.('change', (event) => {
        withoutTransition(() => setTheme(event.matches ? 'dark' : 'light'))
    })

    function getTheme() {
        if (!browser) return 'dark'

        if (localStorage.theme) {
            return localStorage.theme
        }

        if (prefersDarkTheme.matches) {
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
    class="cursor-pointer"
>
    <span class="i-[fluent--dark-theme-20-regular] size-5"></span>
</button>
