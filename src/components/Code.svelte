<script lang="ts">
    import { codeToHtml } from '$lib/shiki'

    type Props = {
        'data-language': string
        code: string
    }
    let { 'data-language': lang, code }: Props = $props()

    let highlightedCode = $derived(
        codeToHtml(code, { lang, theme: 'one-dark-pro' }),
    )
</script>

<!-- NOTE: See if we can SSR the code with precompiled languages -->
{#await highlightedCode then resultHTML}{@html resultHTML}{/await}
