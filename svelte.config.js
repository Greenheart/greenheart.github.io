import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'
import { resolve } from 'path'

const theme = 'night-owl'
const highlighter = await createHighlighter({
    themes: [theme],
    langs: ['js', 'ts', 'sh', 'json', 'svelte'],
})

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: ['.svelte.md', '.md'],
    remarkPlugins: [],
    rehypePlugins: [],
    layout: {
        blog: resolve('./src/routes/blog/BlogLayoutWrapper.svelte'),
    },
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const html = escapeSvelte(
                highlighter.codeToHtml(code, { lang, theme }),
            )
            return `{@html \`${html}\` }`
        },
    },
}

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],
    kit: {
        adapter: adapter(),
        alias: {
            $components: resolve('./src/components'),
            $data: resolve('./src/data'),
        },
    },
}
