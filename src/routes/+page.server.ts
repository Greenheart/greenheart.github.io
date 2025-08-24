import { listPosts } from '$lib/posts'
import type { BlogPost } from '$lib/types'

export const load = async () => {
    const posts = await listPosts()

    const { featured, other } = posts.reduce(
        (acc, post) => {
            acc[post.featured ? 'featured' : 'other'].push(post)
            return acc
        },
        {
            featured: [],
            other: [],
        } as {
            featured: Omit<BlogPost, 'Content'>[]
            other: Omit<BlogPost, 'Content'>[]
        },
    )

    return {
        featuredPosts: featured,
        regularPostsCount: other.length,
    }
}
