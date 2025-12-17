import { Feed } from 'feed'
import { SITE_DESCRIPTION, SITE_URL } from '$lib/constants'
import { getAllPosts, type BlogPost } from '$lib/posts'
import { getPostUpdatedAtFromGit } from './post-details.remote'

const normalizedURL = SITE_URL.endsWith('/') ? SITE_URL : SITE_URL + '/'
const samuel = { name: 'Samuel Plumppu', link: normalizedURL }

export async function generateFeed() {
    const posts = await getAllPosts()

    const feed = new Feed({
        title: samuel.name,
        description: SITE_DESCRIPTION,
        id: normalizedURL,
        copyright: `© 2015 - ${new Date().getFullYear()} ${samuel.name}`,
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
        const updatedAt = await getPostUpdatedAtFromGit(post.slug)

        feed.addItem({
            published: post.publishedAt,
            // Fall back to the publishing date if post has not yet been updated in the Git history.
            date: updatedAt ?? post.publishedAt,
            title: post.title,
            link: postURL,
            // content: ``,
            id: postURL,
        })

        // Set the top-level updatedAt for the feed based on the last updated post
        if (
            !feed.options.updated ||
            (updatedAt && updatedAt < feed.options.updated)
        ) {
            feed.options.updated = updatedAt
        }
    }

    return feed
}
