import { sveltekit } from '@sveltejs/kit/vite'
import tailwind from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import adapter from '@sveltejs/adapter-static'
import { markdocPreprocess } from 'markdoc-svelte'
import { resolve } from 'node:path'

import { markdocConfig } from './src/lib/markdoc.ts'

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit({
            extensions: ['.svelte', '.md', '.mdoc'],
            preprocess: markdocPreprocess(markdocConfig),
            adapter: adapter(),
            alias: {
                $components: resolve('./src/components'),
                $data: resolve('./src/data'),
                $assets: resolve('./src/assets'),
            },
            experimental: {
                remoteFunctions: true,
            },
            compilerOptions: {
                experimental: {
                    async: true,
                },
            },
        }),
        tailwind(),
    ],
})
