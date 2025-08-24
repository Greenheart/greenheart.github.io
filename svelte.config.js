import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'
import { markdocPreprocess, Markdoc } from 'markdoc-svelte'
import { resolve } from 'path'

// const theme = 'night-owl'
// const highlighter = await createHighlighter({
//     themes: [theme],
//     langs: ['js', 'ts', 'sh', 'json', 'svelte'],
// })

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', '.md', '.mdoc'],
    preprocess: [
        vitePreprocess(),
        markdocPreprocess({
            components: '$components',
            nodes: {
                link: {
                    ...Markdoc.nodes.link,
                    render: 'Link',
                },
            },
        }),
    ],
    kit: {
        adapter: adapter(),
        alias: {
            $components: resolve('./src/components'),
            $data: resolve('./src/data'),
            $posts: 'src/content/posts',
        },
    },
}
