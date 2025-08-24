import type { MetaTagsProps } from 'svelte-meta-tags'

import { listPosts } from '$lib/posts'

const title = 'Blog'

export const load = async () => {
    const posts = await listPosts()
    console.dir({ posts })

    return {
        posts,
        pageMetaTags: Object.freeze({
            title,
            openGraph: { title },
        }) satisfies MetaTagsProps,
    }
}
