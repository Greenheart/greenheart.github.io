import posts from '$lib/posts'

export async function load({ params }) {
    const current = posts.findIndex((post) => post.slug === params.slug)
    const older = posts[current + 1] ?? null
    const newer = posts[current - 1] ?? null

    return {
        older,
        newer,
        otherPostsCount: posts.length - 1,
    }
}
