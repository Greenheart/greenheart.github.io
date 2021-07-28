#!/usr/bin/env node

/**
 * Format Code Snippets for Blog Posts.
 * 
 * Why?
 *
 * 1. Ensure consistent code style in all posts.
 * 2. Automatically format with a `printWidth` that works with the blog to prevent
 *    horizontal scrolling. Also include plugin for comment formatting.
 * 
 * Setup before first run in a new environment:
 * 
 * 1. Create the file `scripts/format-input.txt` if it doesn't exist.
 *
 * Usage:
 *
 * 1. Paste code to format in `scripts/format-input.txt`.
 * 2. Update the `parser` variable in the Prettier config match the language you are formatting.
 * 3. Run this script with `node scripts/format-code.js`
 * 4. Copy the code from `scripts/format-output.txt` into the blog post.
 */

import prettier from 'prettier'
import { fileURLToPath } from 'url'
import { readFile, writeFile } from 'fs/promises'

const base = fileURLToPath(import.meta.url)
const input = base.replace(/code\.js$/, 'input.txt')
const output = base.replace(/code\.js$/, 'output.txt')

const code = await readFile(input, { encoding: 'utf-8' })
const formatted = prettier.format(code, {
    plugins: ['prettier-plugin-jsdoc'],
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    printWidth: 70,
    proseWrap: 'always',
    // Any parser from https://prettier.io/docs/en/options.html#parser
    parser: 'typescript',
})

await writeFile(output, formatted, { encoding: 'utf-8' })


// IDEA: Copy output to clipboard and write to console that it has been done.