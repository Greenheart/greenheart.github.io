import { prerender } from '$app/server'
import { execSync } from 'node:child_process'
import { resolve } from 'node:path'
import { z } from 'zod'
import { postsBasePath } from './constants'

/**
 * Use Git to determine when a file was last modified.
 *
 * This is more accurate than using the file system, where changes happen more freqeuntly.
 *
 * @param path The file path to operate on.
 * @returns The `updatedAt` Date, or undefined if the file has not yet been modified.
 */
function getFileUpdatedAtFromGit(path: string) {
    // Get the most recent UNIX timestamp for when file was modified in Git.
    // By using `--follow`, we get the full history even if the file was renamed.
    // This uses the Git author timestamp, because the commit timestamp is not as accurate
    // and may change during rebases and merges
    // Timestamps are sorted since rebases/merges might have caused commits to show in a different order
    const rawTimestamps = execSync(
        `git log --follow --format=%ad --date unix -- ${path} | sort --reverse`,
    ).toString()

    // Sepearate entries and only keep valid ones
    const timestamps = rawTimestamps.split('\n').filter(Boolean)

    // If we only have one timestamp, the file was just created and has not yet been updated.
    if (timestamps.length < 2) {
        return
    }

    // Git stores timestamps in seconds, so we need to convert to ms to get the expected JS date.
    const updatedAt = new Date(parseInt(timestamps[0]) * 1000)
    return updatedAt
}

/**
 * Use Git to determine when a blog post was last modified.
 */
export const getPostUpdatedAtFromGit = prerender(z.string(), (slug: string) => {
    const path = resolve(postsBasePath, `${slug}.md`)
    return getFileUpdatedAtFromGit(path)
})
