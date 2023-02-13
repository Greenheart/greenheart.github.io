import posts from '$lib/posts'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        featuredPosts: posts.filter((p) => p.featured),
    }
}
