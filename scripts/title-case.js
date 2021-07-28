#!/usr/bin/env node

import { titleCase } from 'title-case'

/**
 * Title case strings. Useful for blog post heading formatting.
*/

/**
 * Change to `true` to format multiple titles at once.
 */
const MULTIPLE = false

if (MULTIPLE) {
    process.argv.slice(2).forEach((arg) => console.log(titleCase(arg)))
} else {
    console.log(titleCase(process.argv.slice(2).join(' ')))
}
