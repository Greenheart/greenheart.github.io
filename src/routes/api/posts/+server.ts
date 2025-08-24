import { json } from '@sveltejs/kit'

import type { BlogPost } from '$lib/types'

const latestFirst = (a: BlogPost, b: BlogPost) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()

async function getPosts() {
    let posts: BlogPost[] = []

    const paths = import.meta.glob('/src/content/posts/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<BlogPost, 'slug'>
            const post = { ...metadata, slug } satisfies BlogPost
            if (!post.draft) {
                posts.push(post)
            }
        }
    }

    return posts.sort(latestFirst)
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
