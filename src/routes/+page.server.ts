import type { BlogPost } from '$lib/types'
import posts from '$lib/posts'

const { featured, other } = posts.reduce(
    (acc, post) => {
        acc[post.featured ? 'featured' : 'other'].push(post)
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

export const load = () => ({
    featuredPosts: featured,
    otherPostsCount: other.length,
})
