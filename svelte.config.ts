import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'
import { markdocPreprocess } from 'markdoc-svelte'
import { resolve } from 'path'

import { markdocConfig } from './src/lib/markdoc'

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', '.md', '.mdoc'],
    preprocess: [vitePreprocess(), markdocPreprocess(markdocConfig)],
    kit: {
        adapter: adapter(),
        alias: {
            $components: resolve('./src/components'),
            $data: resolve('./src/data'),
            $posts: 'src/content/posts',
        },
    },
}
