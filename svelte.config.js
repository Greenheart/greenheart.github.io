import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { resolve } from 'path'

// Fix Tailwind CSS live reloading
// Deatils: https://github.com/svelte-add/svelte-add/issues/67
process.env.TAILWIND_MODE = process.env.NODE_ENV === "development" ? "watch" : "build"

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        mdsvex(mdsvexConfig),
        preprocess({
            postcss: true,
        }),
    ],
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: adapter(),
        vite: {
            resolve: {
                alias: {
                    $components: resolve('./src/components'),
                }
            }
        }
    }
}
