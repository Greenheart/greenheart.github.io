import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'
import { resolve } from 'path'

const mdsvexConfig = {
    extensions: ['.svelte.md', '.md'],
    remarkPlugins: [],
    rehypePlugins: [],
    layout: {
        blog: './src/routes/blog/BlogLayoutWrapper.svelte',
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
