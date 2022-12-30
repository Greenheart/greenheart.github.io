import posts from '$lib/posts'

export const prerender = true
export const ssr = false

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        featuredPosts: posts.filter((p) => p.featured),
    }
}
