import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-static'
import talks from './src/lib/talks.js'

const mdsvexConfig = {
    extensions: ['.svelte.md', '.md'],
    remarkPlugins: [],
    rehypePlugins: [],
    layout: {
        blog: './src/routes/blog/_post.svelte',
    },
}

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],
    kit: {
        adapter: adapter({ fallback: '404.html' }),
        prerender: {
            // Manually specify all talks to prerender
            entries: ['*', ...talks.map((t) => `/talks/${t}/`)],
            crawl: true,
        },
    },
}
