import type { BlogPost } from '$lib/types'

export const load = async ({ fetch }) => {
    const posts = (await fetch('/api/posts').then((res) =>
        res.json(),
    )) as BlogPost[]

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

    return {
        featuredPosts: featured,
        otherPostsCount: other.length,
    }
}
