import { generateFeed } from '$lib/feed'

export const prerender = true

export const GET = async () => {
    const feed = await generateFeed()

    return new Response(feed.json1(), {
        headers: { 'Content-Type': 'application/feed+json' },
    })
}
