import { generateFeed } from '$lib/feed'

export const prerender = true

export const GET = async () => {
    const feed = await generateFeed()

    return new Response(feed.atom1(), {
        headers: { 'Content-Type': 'application/atom+xml' },
    })
}

// TODO: Add "(feed icon) Subscribe" to the site footer
// TODO: Add "(feed icon) Subscribe" to the top of the /blog page
// TODO: Wherever the feed icon is present, also include a help link (or text) similar to "Learn more about [web feeds](https://en.wikipedia.org/wiki/Web_feed)" or link to https://aboutfeeds.com/
