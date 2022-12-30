import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-static'

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
        adapter: adapter(),
    },
}
