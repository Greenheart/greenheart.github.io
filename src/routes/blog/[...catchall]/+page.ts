import type { MetaTagsProps } from 'svelte-meta-tags'

import { getPost, listPosts } from '$lib/posts'

export const load = async ({ params }) => {
    const slug = params.catchall

    const post = await getPost(slug)
    const title = post.title

    const posts = await listPosts()
    const current = posts.findIndex((post) => post.slug === slug)
    const older = posts[current + 1] ?? null
    const newer = posts[current - 1] ?? null

    return {
        post,
        otherPostsCount: posts.length - 1,
        older,
        newer,
        pageMetaTags: Object.freeze({
            title,
            openGraph: { title },
        }) satisfies MetaTagsProps,
    }
}
