import type { MetaTagsProps } from 'svelte-meta-tags'

import type { BlogPost } from '$lib/types.js'

const title = 'Blog'

export const load = async ({ fetch }) => {
    const posts = (await fetch('/api/posts').then((res) =>
        res.json(),
    )) as BlogPost[]

    return {
        posts,
        pageMetaTags: Object.freeze({
            title,
            openGraph: { title },
        }) satisfies MetaTagsProps,
    }
}
