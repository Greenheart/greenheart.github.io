<script lang="ts" module>
    import { createHighlighter, type BundledTheme } from 'shiki'

    const theme: BundledTheme = 'one-dark-pro'

    const highlighter = createHighlighter({
        langs: ['js', 'ts', 'sh', 'svelte', 'sql', 'json'],
        themes: [theme],
    })
</script>

<script lang="ts">
    type Props = {
        'data-language': string
        code: string
    }
    let { 'data-language': lang, code }: Props = $props()
</script>

<!-- NOTE: See if we can SSR the code -->
{#await highlighter then highlighter}
    {@const rendered = highlighter.codeToHtml(code, {
        lang,
        theme,
    })}{@html rendered}{/await}
