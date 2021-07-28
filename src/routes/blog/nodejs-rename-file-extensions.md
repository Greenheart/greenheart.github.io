---
title: Rename File Extensions with Node.js
date: 2021-07-27
tags: ['Code Snippet', 'JavaScript', 'Node.js']
---

A Node.js function to rename the file extension for matching files in a directory using [fs-extra](https://www.npmjs.com/package/fs-extra).

```js
import { move } from 'fs-extra'
import { readdir } from 'fs/promises'
import { resolve } from 'path'

/**
 * Rename the file extension for all matching files in a given directory.
 *
 * @param {string} baseDir The base directory where to find and place the files.
 * @param {function} shouldRenameFile Filter function that should return a boolean
 * for whether or not to include the file in the renaming.
 * @param {string} beforeExt The file extension to replace.
 * If `beforeExt` is an empty string, the `afterExt` will be added to the original filename.
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
            return move(before, after)
        }),
    )

    return renamed.length
}

console.log(
    await updateFileExtensions({
        baseDir: resolve(process.cwd(), 'images'),
        shouldRenameFile: (f) => f.length === 64,
        before: '',
        after: '.jpg',
    }),
)

```