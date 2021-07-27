#!/usr/bin/env node

import { titleCase } from 'title-case'

/**
 * Title case a string. Useful for blog post heading formatting.
 */
process.argv.slice(2).forEach(arg => console.log(titleCase(arg)))