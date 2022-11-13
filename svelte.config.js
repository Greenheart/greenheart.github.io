import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
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
    preprocess: [mdsvex(mdsvexConfig), preprocess({ postcss: true })],
    kit: {
        adapter: adapter(),
        trailingSlash: 'ignore',
    },
}
