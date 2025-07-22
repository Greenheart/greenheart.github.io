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
 * Usage:
 *
 * 1. Copy the code you want to format
 * 2. Edit the prettier config below to ensure the correct parser language has been
 *    chosen.
 * 3. Run `node scripts/format-code.js` to format and copy the result to the
 *    clipboard.
 * 4. Paste the code anywhere.
 */

import prettier from 'prettier'
import { read, write } from 'clipboardy'

const input = await read()

const formatted = prettier.format(input, {
    plugins: ['prettier-plugin-jsdoc', 'prettier-plugin-svelte'],
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    printWidth: 70,
    proseWrap: 'always',
    // Any parser from https://prettier.io/docs/en/options.html#parser
    // NOTE: Remember to use the correct language
    parser: 'svelte',
})

await write(formatted)
console.log('\n✅ Copied formatted code to the clipboard!')
