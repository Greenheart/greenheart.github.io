import { error } from '@sveltejs/kit'
import type { MetaTagsProps } from 'svelte-meta-tags'

import { getPost } from '$lib/posts'

export const load = async ({ params }) => {
    const slug = params.catchall

    try {
        const post = await getPost(slug)
        const title = post.frontmatter.title

        return {
            post,
            pageMetaTags: Object.freeze({
                title,
                openGraph: { title },
            }) satisfies MetaTagsProps,
        }
    } catch (e) {
        console.error(e)
        throw error(404, `No corresponding file found for the slug "${slug}"`)
    }
}
