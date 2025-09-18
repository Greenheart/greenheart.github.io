import {
    createdBundledHighlighter,
    createSingletonShorthands,
} from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

const bundledLanguages = {
    ts: () => import('shiki/langs/typescript.mjs'),
    js: () => import('shiki/langs/javascript.mjs'),
    sh: () => import('shiki/langs/sh.mjs'),
    svelte: () => import('shiki/langs/svelte.mjs'),
    sql: () => import('shiki/langs/sql.mjs'),
    json: () => import('shiki/langs/json.mjs'),
}

const bundledThemes = {
    'one-dark-pro': () => import('shiki/themes/one-dark-pro.mjs'),
}

// This creates your custom 'createHighlighter' function with fine-grained bundles
export const createHighlighter = /* @__PURE__ */ createdBundledHighlighter<
    keyof typeof bundledLanguages,
    keyof typeof bundledThemes
>({
    langs: bundledLanguages,
    themes: bundledThemes,
    engine: () => createJavaScriptRegexEngine({ target: 'ES2024' }),
})

// This creates the shorthands for you
export const {
    codeToHtml,
    codeToHast,
    codeToTokensBase,
    codeToTokens,
    codeToTokensWithThemes,
    getSingletonHighlighter,
    getLastGrammarState,
} = /* @__PURE__ */ createSingletonShorthands(createHighlighter)
