import { error } from '@sveltejs/kit'
import { dev } from '$app/environment'
import type { MarkdocModule } from 'markdoc-svelte'
import type { Component } from 'svelte'
import { z } from 'zod'

// IDEA: Rename posts to pages and keep it for dynamic pages that can be organised with custom paths
// IDEA: Rename route to handle all pages, not just in the `blog` category. This would allow us to add any type of page
// IDEA: Make the routing controlled by the files and directories of `pages`
// IDEA: Update the alias from $posts to $pages
// IDEA: Update this module to load all pages instead

export const postSchema = z.object({
    frontmatter: z.object({
        title: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().default(false),
    }),
})

type RawPost = z.infer<typeof postSchema>

export type BlogPost = RawPost['frontmatter'] & {
    slug: string
    Content: Component
}

const allPosts = Object.entries(import.meta.glob('$posts/**/*.md')).reduce<
    Record<string, () => Promise<MarkdocModule>>
>((rawPosts, [path, loadPost]) => {
    const slug = path.replace('/src/content/posts/', '').replace('.md', '')
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

    // TODO: Rename the `date` field in blog posts to `publishedAt`
    // TODO: Set `post.updatedAt` to the latest Git modification time.
    const post: BlogPost = { ...data.frontmatter, slug, Content }

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
    a: Pick<BlogPost, 'date'>,
    b: Pick<BlogPost, 'date'>,
) => b.date.getTime() - a.date.getTime()

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
