import { z } from 'zod'
import readingTime from 'reading-time'
import { execSync } from 'node:child_process'
import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'

import { prerender } from '$app/server'
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
 * Get reading time in minutes for a given blog post
 */
function getReadingTime(path: string) {
    const text = extractTextFromMarkdown(readFileSync(path, 'utf-8'))
    return Math.ceil(readingTime(text, { wordsPerMinute: 240 }).minutes)
}

/**
 * Get metadata for a given blog post to determine when it was updated
 */
export const getPostMetadata = prerender(z.string(), (slug: string) => {
    const path = resolve(postsBasePath, `${slug}.md`)
    return {
        updatedAt: getFileUpdatedAtFromGit(path),
        minutes: getReadingTime(path),
    }
})

function extractTextFromMarkdown(markdown: string) {
    return (
        markdown
            // Remove comments
            .replaceAll(/<!--(.*?)-->/gm, '')
            // Consistently use spaces for indentation
            .replaceAll('\t', '    ')
            // More than 1 space should be max 4 spaces
            .replaceAll(/[ ]{2,}/g, '    ')
            // Footnotes
            .replaceAll(/^\[[^]]*\][^(].*/gm, '')
            // Indented blocks of code
            .replaceAll(/^( {4,}[^-*]).*/gm, '')
            // Custom header IDs
            .replaceAll(/{#.*}/g, '')
            // Replace newlines with spaces for consistency
            .replaceAll('\n', ' ')
            // Remove images
            .replaceAll(/!\[[^\]]*\]\([^)]*\)/g, '')
            // Remove HTML tags
            .replaceAll(/<\/?[^>]*>/g, '')
            // Remove special characters
            .replaceAll(/[#*`~\-–^=<>+|/:]/g, '')
            // Remove footnote references
            .replaceAll(/\[[0-9]*\]/g, '')
            // Remove enumerations
            .replaceAll(/[0-9#]*\./g, '')
    )
}
