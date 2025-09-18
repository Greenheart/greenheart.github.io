import type { BundledLanguage } from 'shiki'
import { codeToHtml } from 'shiki'

export async function getHighlightedCode(code: string, lang: BundledLanguage) {
    return codeToHtml(code, { lang, theme: 'one-dark-pro' })
}
