---
title: 'Git-based CMS tip: Automatic `updatedAt` timestamps with Git'
publishedAt: 2025-12-16
tags: ['Git', 'Shell Scripting', 'TypeScript']
---

One of the main benefits of using a database to power either a backend API or a CMS is the ability to get consistent `updatedAt` timestamps for entries like posts, comments or other forms of content. Until recently, this has been one of the main features that made me consider database-powered CMSes and backends even in cases where 90% of the project would work much better with a Git-based CMS.

However, it turns out that even Git-based CMSes can get this functionality, with only a few lines of code. By taking advantage of the fact that Git tracks the modification time for each file in commits, we can get reliable results since there is a difference between the _commit timestamp_ and the _filesystem modification timestamp_. This is needed since the filesystem likely will change more often, and might not even be reliable at all in CI or production environments.

This means that blogs and other projects using Git-based CMSes to store content in Git like Markdown, JSON or YAML now can get the `updatedAt` timestamp automatically. Since it's built into the `git` command, this works with any programming language where you can spawn child processes - or where you use a dedicated git library directly to get the same information.

## How to extract `updatedAt` by using `git log`

To keep things simple, this technique assumes your content is stored as separate files, like for example `posts/*.md`. However, it should also be possible to extract the git commit timestamp for specific lines within each file, perhaps by using the Git blame information.

For now though, let's focus on the simple use case with separate files like `posts/*.md`. If you group data together in to for example one big `posts.json` file, then the following code will only give you the modification time for the entire file. It might still be good enough for some kinds of data, but this is worth considering when modeling your data and how it's stored.

```sh
# Get the unix timestamps for when file was last modified.
# `--follow` allows us to take file renames into account.
# The extra `--` prevents the file name from clashing with
# git flags or options.
#
# By sorting the timestamps, we can reliably find the
# newest/oldest timestamp, even if the Git commits show in
# a different order due to rebases/merges. When reversing
# the sort, the most recent timestamp will be at the start,
# and can be retrieved with `head -n1`:
git log --follow --format=%ad --date unix -- <FILE> |\
    sort --reverse |\
    head -n1

# To get the timestamp for when the file was created,
# use `tail -n1` instead:
git log --follow --format=%ad --date unix -- <FILE> |\
    sort --reverse |\
    tail -n1
```

---

## Example implementation

You could make use of this in Node.js and TypeScript like this:

```ts
import { execSync } from 'node:child_process'

/**
 * Use Git to determine when a file was last modified.
 *
 * This is more accurate than using the file system,
 * where changes happen more freqeuntly.
 *
 * @param path The file path to operate on.
 * @returns The `updatedAt` Date, or undefined if the
 * file has not yet been modified.
 */
function getFileUpdatedAtFromGit(path: string) {
    // Get the most recent UNIX timestamp for when file was
    // modified in Git.
    //
    // By using `--follow`, we get the full history even if
    // the file was renamed. This uses the Git author timestamp,
    // because the commit timestamp is not as accurate and
    // may change during rebases and merges
    //
    // Timestamps are sorted since rebases/merges might have
    // caused commits to show in a different order
    const rawTimestamps = execSync(
        `git log --follow --format=%ad --date unix -- ${path} | sort --reverse`,
    ).toString()

    // Sepearate entries and only keep valid ones
    const timestamps = rawTimestamps.split('\n').filter(Boolean)

    // If we only have one timestamp, the file was
    // just created and has not yet been updated.
    if (timestamps.length < 2) {
        return
    }

    // Git stores timestamps in seconds, so we need to
    // convert to ms to get the expected JS date.
    const updatedAt = new Date(parseInt(timestamps[0]) * 1000)
    return updatedAt
}
```

While Git-based CMSes are no perfect solution for all problems, this makes them even more viable, simplifying apps and websites into low-cost and easy maintenance systems that don't require any server components or databases. This is ideal for resource-constrained environments, and happens to be great for security and performance too.
