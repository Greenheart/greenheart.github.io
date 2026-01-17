import { sveltekit } from '@sveltejs/kit/vite'
import tailwind from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import Icons from 'unplugin-icons/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import readingTime, { type Options } from 'reading-time'
import { readFileSync, globSync } from 'node:fs'
import { parse } from 'node:path'

import { postsBasePath } from './src/lib/constants'

function blogReadingTimes(options?: Options): Plugin {
    const virtualModuleId = 'virtual:blog-reading-times'
    const resolvedId = '\O' + virtualModuleId

    function getReadingTimes() {
        const readingTimes: Record<string, number> = {}
        for (const path of globSync(postsBasePath + '**/*.md')) {
            const text = extractTextFromMarkdown(readFileSync(path, 'utf-8'))
            readingTimes[parse(path).name] = Math.ceil(
                readingTime(text, options).minutes,
            )
        }
        return readingTimes
    }

    function extractTextFromMarkdown(markdown: string) {
        return (
            markdown
                // Remove comments
                .replaceAll(/<!--(.*?)-->/gm, '')
                // Consistently use spaces for indentation
                .replaceAll('\t', '    ')
                // More than 1 space should be max 4 spaces
                .replaceAll(/[ ]{2,}/g, '    ')
                // Footnotes
                .replaceAll(/^\[[^]]*\][^(].*/gm, '')
                // Indented blocks of code
                .replaceAll(/^( {4,}[^-*]).*/gm, '')
                // Custom header IDs
                .replaceAll(/{#.*}/g, '')
                // Replace newlines with spaces for consistency
                .replaceAll('\n', ' ')
                // Remove images
                .replaceAll(/!\[[^\]]*\]\([^)]*\)/g, '')
                // Remove HTML tags
                .replaceAll(/<\/?[^>]*>/g, '')
                // Remove special characters
                .replaceAll(/[#*`~\-–^=<>+|/:]/g, '')
                // Remove footnote references
                .replaceAll(/\[[0-9]*\]/g, '')
                // Remove enumerations
                .replaceAll(/[0-9#]*\./g, '')
        )
    }

    return {
        name: 'vite-plugin-blog-reading-times',
        resolveId(id) {
            if (id === virtualModuleId) {
                return resolvedId
            }
        },
        load(id) {
            if (id === resolvedId) {
                return `export default ${JSON.stringify(getReadingTimes())}`
            }
        },
    }
}

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit(),
        tailwind(),
        Icons({ compiler: 'svelte' }),
        blogReadingTimes({ wordsPerMinute: 240 }),
    ],
})
