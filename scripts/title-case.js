#!/usr/bin/env node

/**
 * Title Case Headings.
 * 
 * Why?
 *
 * 1. Ensure consistent heading style in all posts.
 *
 * Usage:
 *
 * 1. Copy the heading you want to format
 * 3. Run `node scripts/title-case.js` to format and copy the result to the clipboard.
 * 4. Paste the heading anywhere.
 */

import { titleCase } from 'title-case'
import { read, write } from 'clipboardy'

const input = await read()
const result = titleCase(input)
console.log(result)
await write(result)

console.log('\n✅ Copied formatted title to the clipboard!')
