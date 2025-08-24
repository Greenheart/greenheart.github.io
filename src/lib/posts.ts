import { error } from '@sveltejs/kit'
import type { MarkdocModule } from 'markdoc-svelte'
import type { Component as ComponentType } from 'svelte'
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
        draft: z.boolean().default(false),
    }),
})

export type Post = {
    slug: string
    Content: ComponentType
} & z.infer<typeof postSchema>

const allPosts = Object.entries(import.meta.glob('$posts/**/*.md')).reduce<
    Record<string, () => Promise<MarkdocModule>>
>((rawPosts, [path, loadPost]) => {
    const slug = path.replace('/src/content/posts/', '').replace('.md', '')
    rawPosts[slug] = loadPost as () => Promise<MarkdocModule>
    return rawPosts
}, {})

const posts = new Map<string, Post>()

/** Get a specific post, loading it the first time it's accessed */
export async function getPost(slug: string) {
    const existing = posts.get(slug)
    if (existing) return existing

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

    const post = { slug, frontmatter: data.frontmatter, Content } as Post
    posts.set(slug, post)

    return post
}

const latestFirst = (
    a: Pick<Post, 'frontmatter'>,
    b: Pick<Post, 'frontmatter'>,
) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()

/** List posts without content */
export async function listPosts() {
    return Promise.all(
        Object.keys(allPosts).map(async (slug) => {
            const { Content, ...post } = await getPost(slug)
            return post
        }),
    )
        .then((posts) => posts.sort(latestFirst))
        .catch((err) => {
            console.error(err)
            throw error(500, err.message)
        })
}
