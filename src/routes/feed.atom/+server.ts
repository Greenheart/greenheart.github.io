// TODO: Import feed library
// TODO: Generate entry for each post
// TODO: Generate atom feed
// IDEA: Maybe generate JSON Feed? Yes it's good for the future and is a better format than Atom

import { SITE_DESCRIPTION, SITE_URL } from '$lib/constants'
import { Feed } from 'feed'

export const GET = async () => {
    // TODO: Set the top-level `updated` field to the last updated date for any of the blog posts
    // TODO: generate the feed in a separate module, and then just export the Atom feed on this page
    // TODO: set up the /feed.json/+page.server.ts route to serve the JSON feed
    const feed = new Feed({
        title: 'Samuel Plumppu',
        description: SITE_DESCRIPTION,
        id: SITE_URL,
        link: SITE_URL,
        copyright: `© 2015 - ${new Date().getFullYear()} Samuel Plumppu`,
        feedLinks: {
            json: new URL('feed.json', SITE_URL),
            atom: new URL('feed.atom', SITE_URL),
        },
        image: new URL('images/favicon.svg', SITE_URL).toString(),
        favicon: new URL('favicon.ico', SITE_URL).toString(),
        language: 'en',
    })

    feed.addContributor({
        name: 'Samuel Plumppu',
        link: SITE_URL,
    })

    return new Response(feed.json1())

    // return new Response()
}

// TODO: Add "(feed icon) Subscribe" to the site footer
// TODO: Add "(feed icon) Subscribe" to the top of the /blog page

// Maybe rename the `date` field in blog posts to `publishedAt` and add an optional updatedAt field which is set to the publishedAt by default

// TODO: Wherever the feed icon is present, also include a help link (or text) similar to "Learn more about [web feeds](https://en.wikipedia.org/wiki/Web_feed)" or link to https://aboutfeeds.com/
