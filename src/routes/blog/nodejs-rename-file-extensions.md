---
title: Rename File Extensions with Node.js
date: 2021-07-27
tags: ['Code Snippet', 'JavaScript', 'Node.js']
---

A Node.js script to rename the file extension for all matching files in a directory.

```js
#!/usr/bin/env node

import { readdir, rename } from 'fs/promises'
import { resolve } from 'path'

/**
 * Rename the file extension for all matching files in a directory.
 *
 * @param {string} baseDir Where to find the files.
 * @param {function} shouldRenameFile Filter function that should
 *   return a boolean for whether or not to rename the file.
 * @param {string} beforeExt The file extension to replace. If
 *   `beforeExt` is an empty string, the `afterExt` will be added to
 *   the original filename.
 * @param {string} afterExt The new file extension to use instead.
 * @returns The number of files renamed.
 */
async function updateFileExtensions({
    baseDir,
    shouldRenameFile,
    beforeExt,
    afterExt,
}) {
    const files = (await readdir(baseDir)).filter(shouldRenameFile)

    const renamed = await Promise.all(
        files.map((f) => {
            const before = resolve(baseDir, f)
            const after = beforeExt.length
                ? before.replace(beforeExt, afterExt)
                : before + afterExt
            return rename(before, after)
        }),
    )

    return renamed.length
}

const renamedCount = await updateFileExtensions({
    baseDir: resolve(process.cwd(), 'images'),
    shouldRenameFile: (f) => f.length === 64,
    beforeExt: '',
    afterExt: '.jpg',
})

console.log(renamedCount)
```
