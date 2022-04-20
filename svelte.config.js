import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { resolve } from 'path'

import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [
        mdsvex(mdsvexConfig),
        preprocess({
            postcss: true,
        }),
    ],
    kit: {
        adapter: adapter(),
        vite: {
            resolve: {
                alias: {
                    $components: resolve('./src/components'),
                    $data: resolve('./src/data'),
                },
            },
        },
    },
}
