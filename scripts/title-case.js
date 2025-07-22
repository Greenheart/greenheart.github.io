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
 * 2. Run `node scripts/title-case.js` to format and copy the result to the
 *    clipboard.
 * 3. Paste the heading anywhere.
 */

import { titleCase } from 'title-case'
import clipboard from 'clipboardy'

const input = await clipboard.read()
const result = titleCase(input)
console.log(result)
await clipboard.write(result)

console.log('\n✅ Copied formatted title to the clipboard!')
