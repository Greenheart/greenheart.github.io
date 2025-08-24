import { listPosts } from '$lib/posts'
import type { BlogPost } from '$lib/types'

export const load = async () => {
    const posts = await listPosts()

    const { featured, other } = posts.reduce(
        (acc, post) => {
            acc[post.frontmatter.featured ? 'featured' : 'other'].push(post)
            return acc
        },
        {
            featured: [],
            other: [],
        } as {
            featured: BlogPost[]
            other: BlogPost[]
        },
    )

    return {
        featuredPosts: featured,
        otherPostsCount: other.length,
    }
}
