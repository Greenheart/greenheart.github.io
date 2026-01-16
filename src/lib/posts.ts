import { dev } from '$app/environment'
import type { MarkdocModule } from 'markdoc-svelte'
import type { Component } from 'svelte'
import { z } from 'zod'

import { postsBasePath } from './constants'
import { tagsSchema } from './schemas'

// IDEA: Rename posts to pages and keep it for dynamic pages that can be organised with custom paths
// IDEA: Rename route to handle all pages, not just in the `blog` category. This would allow us to add any type of page
// IDEA: Make the routing controlled by the files and directories of `pages`
// IDEA: Update this module to load all pages instead

const postSchema = z.object({
    frontmatter: z.object({
        title: z.string(),
        publishedAt: z.coerce.date(),
        tags: z.array(tagsSchema).optional(),
        featured: z.boolean().default(false),
    }),
})

type RawPost = z.infer<typeof postSchema>

export type BlogPost = RawPost['frontmatter'] & {
    slug: string
    Content: Component
    updatedAt?: Date
}

export type BlogPostWithoutMetadata = Omit<BlogPost, 'updatedAt'>

const allPosts = Object.entries(
    import.meta.glob('/src/content/posts/**/*.md'),
).reduce<Record<string, () => Promise<MarkdocModule>>>(
    (rawPosts, [path, loadPost]) => {
        const slug = path.replace(`/${postsBasePath}`, '').replace('.md', '')
        rawPosts[slug] = loadPost as () => Promise<MarkdocModule>
        return rawPosts
    },
    {},
)

const posts = new Map<string, BlogPostWithoutMetadata>()

/** Get a specific post, loading it the first time it's accessed */
export async function getPost(slug: string) {
    const existing = posts.get(slug)
    if (existing) return existing

    // Exclude draft posts for production builds
    if (!dev && slug.startsWith('_')) {
        return null
    }

    const loaded = await allPosts[slug]?.()
    if (!loaded) {
        throw new Error('No post with slug: ' + slug)
    }
    const { default: Content, ...rawPost } = loaded

    const data = postSchema.parse(rawPost, {
        reportInput: true,
        error: () =>
            'Invalid frontmatter for slug: ' + `${postsBasePath}${slug}.md`,
    })

    const post: BlogPostWithoutMetadata = {
        ...data.frontmatter,
        slug,
        Content,
    }

    posts.set(slug, post)
    return post
}

export async function getAllPosts() {
    return Promise.all(Object.keys(allPosts).map((slug) => getPost(slug))).then(
        (posts) =>
            // Filter out draft posts and sort by publication date
            (posts.filter(Boolean) as BlogPostWithoutMetadata[]).sort(
                latestPublishedFirst,
            ),
    )
}

const latestPublishedFirst = (
    a: Pick<BlogPost, 'publishedAt'>,
    b: Pick<BlogPost, 'publishedAt'>,
) => b.publishedAt.getTime() - a.publishedAt.getTime()

/** List posts without content */
export async function listPosts() {
    const posts = await getAllPosts()
    return posts.map(({ Content, ...postWithoutContent }) => postWithoutContent)
}
