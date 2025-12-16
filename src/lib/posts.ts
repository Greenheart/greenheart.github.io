import { error } from '@sveltejs/kit'
import { dev } from '$app/environment'
import type { MarkdocModule } from 'markdoc-svelte'
import type { Component } from 'svelte'
import { z } from 'zod'
import { execSync } from 'node:child_process'

// IDEA: Rename posts to pages and keep it for dynamic pages that can be organised with custom paths
// IDEA: Rename route to handle all pages, not just in the `blog` category. This would allow us to add any type of page
// IDEA: Make the routing controlled by the files and directories of `pages`
// IDEA: Update the alias from $posts to $pages
// IDEA: Update this module to load all pages instead

const postSchema = z.object({
    frontmatter: z.object({
        title: z.string(),
        publishedAt: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().default(false),
    }),
})

type RawPost = z.infer<typeof postSchema>

export type BlogPost = RawPost['frontmatter'] & {
    slug: string
    Content: Component
    updatedAt?: Date
}

/**
 * Use Git to determine when a file was last modified.
 *
 * This is more accurate than using the file system, where changes happen more freqeuntly.
 *
 * @param path The file to operate on.
 * @returns The `updatedAt` Date, or undefined if the file has not yet been modified.
 */
function getFileUpdatedAtFromGit(path: string) {
    // Get the most recent UNIX timestamp for when file was modified in Git.
    // By using `--follow`, we get the full history even if the file was renamed.
    // This uses the Git author timestamp, because the commit timestamp is not as accurate
    // and may change during rebases and merges
    // Timestamps are sorted since rebases/merges might have caused commits to show in a different order
    const raw = execSync(
        `git log --follow --format=%ad --date unix -- ${path} | sort --reverse`,
    ).toString()

    const timestamps = raw.split('\n').filter(Boolean)

    // If we only have one timestamp, the file was just created and has not yet been updated.
    if (timestamps.length < 2) {
        return
    }

    const updatedAt = new Date(parseInt(timestamps[0]) * 1000)
    return updatedAt
}

const postsBasePath = 'src/content/posts/'

const allPosts = Object.entries(import.meta.glob('$posts/**/*.md')).reduce<
    Record<string, () => Promise<MarkdocModule>>
>((rawPosts, [path, loadPost]) => {
    const slug = path.replace(`/${postsBasePath}`, '').replace('.md', '')
    rawPosts[slug] = loadPost as () => Promise<MarkdocModule>
    return rawPosts
}, {})

const posts = new Map<string, BlogPost>()

/** Get a specific post, loading it the first time it's accessed */
export async function getPost(slug: string) {
    const existing = posts.get(slug)
    if (existing) return existing

    // Exclude draft posts if not running in development
    if (!dev && slug.startsWith('_')) {
        return null
    }

    const loaded = await allPosts[slug]?.()
    if (!loaded) {
        throw new Error('No post with slug: ' + slug)
    }
    const { default: Content, ...rawPost } = loaded

    const { data, error } = postSchema.safeParse(rawPost)
    if (error) {
        throw new Error('Invalid frontmatter for slug: ' + slug, {
            cause: error,
        })
    }

    const post: BlogPost = {
        ...data.frontmatter,
        slug,
        Content,
        updatedAt: getFileUpdatedAtFromGit(postsBasePath + slug),
    }

    posts.set(slug, post)
    return post
}

export async function getAllPosts() {
    return Promise.all(
        Object.keys(allPosts).map(async (slug) => getPost(slug)),
    ).then((posts) =>
        // Filter out draft posts and sort by publication date
        (posts.filter(Boolean) as BlogPost[]).sort(latestPublishedFirst),
    )
}

const latestPublishedFirst = (
    a: Pick<BlogPost, 'publishedAt'>,
    b: Pick<BlogPost, 'publishedAt'>,
) => b.publishedAt.getTime() - a.publishedAt.getTime()

/** List posts without content */
export async function listPosts() {
    return getAllPosts()
        .then((posts) =>
            posts.map(
                ({ Content, ...postWithoutContent }) => postWithoutContent,
            ),
        )
        .catch((err) => {
            console.error(err)
            throw error(500, err.message)
        })
}
