import posts from '$lib/posts'

export function get() {
    return {
        body: posts,
    }
}
