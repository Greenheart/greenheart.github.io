import { type Config } from '@sveltejs/kit'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'
import { markdocPreprocess } from 'markdoc-svelte'
import { resolve } from 'node:path'

import { markdocConfig } from './src/lib/markdoc.ts'

export default {
    extensions: ['.svelte', '.md', '.mdoc'],
    preprocess: [vitePreprocess(), markdocPreprocess(markdocConfig)],
    kit: {
        adapter: adapter(),
        alias: {
            $components: resolve('./src/components'),
            $data: resolve('./src/data'),
            $assets: resolve('./src/assets'),
        },
        experimental: {
            remoteFunctions: true,
        },
    },
    compilerOptions: {
        experimental: {
            async: true,
        },
    },
} satisfies Config
