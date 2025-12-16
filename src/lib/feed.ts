import { Feed } from 'feed'
import { SITE_DESCRIPTION, SITE_URL } from '$lib/constants'
import { getAllPosts } from '$lib/posts'

const normalizedURL = SITE_URL.endsWith('/') ? SITE_URL : SITE_URL + '/'
const samuel = { name: 'Samuel Plumppu', link: normalizedURL }

export async function generateFeed() {
    const posts = await getAllPosts()
    const mostRecentlyUpdatedPost = posts.reduce((mostRecent, post) => {
        if (post.publishedAt > mostRecent.publishedAt) return post
        return mostRecent
    }, posts[0]!)

    const feed = new Feed({
        title: samuel.name,
        description: SITE_DESCRIPTION,
        id: normalizedURL,
        copyright: `© 2015 - ${new Date().getFullYear()} ${samuel.name}`,
        updated: mostRecentlyUpdatedPost.publishedAt,
        feedLinks: {
            json: `${SITE_URL}/feed.json`,
            atom: `${SITE_URL}/feed.atom`,
        },
        author: samuel,
        image: `${SITE_URL}/images/favicon.svg`,
        favicon: `${SITE_URL}/favicon.ico`,
        language: 'en',
    })

    for (const post of posts) {
        const postURL = `${SITE_URL}/blog/${post.slug}`
        // TODO: Render markdoc content as HTML

        feed.addItem({
            published: post.publishedAt,
            // Use specific updatedAt, or fall back to the publishing date
            date: post.updatedAt ?? post.publishedAt,
            title: post.title,
            link: postURL,
            // content: ``,
            id: postURL,
        })
    }

    return feed
}
