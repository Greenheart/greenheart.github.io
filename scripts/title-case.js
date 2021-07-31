#!/usr/bin/env node

import { titleCase } from 'title-case'
import { write } from 'clipboardy'

/** Title case strings. Useful for blog post heading formatting. */

/** Change to `true` to format multiple titles at once. */
const MULTIPLE = false
const input = process.argv.slice(2)

if (MULTIPLE) {
    write(input.map((arg) => titleCase(arg)).join('\n'))
} else {
    write(titleCase(input.join(' ')))
}

console.log('✅ Copied formatted title to the clipboard!')
