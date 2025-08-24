import { error } from '@sveltejs/kit'
import type { MetaTagsProps } from 'svelte-meta-tags'

import type { BlogPost } from '$lib/types'

export async function load({ params, fetch }) {
    try {
        const post = await import(`../../../content/posts/${params.slug}.md`)
        const meta = post.metadata as BlogPost
        const title = meta.title

        const posts = (await fetch('/api/posts').then((res) =>
            res.json(),
        )) as BlogPost[]

        const current = posts.findIndex((post) => post.slug === params.slug)
        const older = posts[current + 1] ?? null
        const newer = posts[current - 1] ?? null

        return {
            content: post.default,
            meta: post.metadata as BlogPost,
            pageMetaTags: Object.freeze({
                title,
                openGraph: { title },
            }) satisfies MetaTagsProps,
            older,
            newer,
            otherPostsCount: posts.length - 1,
        }
    } catch (e) {
        console.error(e)
        error(404, `Could not find ${params.slug}`)
    }
}
