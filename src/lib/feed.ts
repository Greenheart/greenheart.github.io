import { Feed } from 'feed'
import { render } from 'svelte/server'
import type { Component } from 'svelte'

import { SITE_DESCRIPTION, SITE_URL } from '$lib/constants'
import { getAllPosts, type BlogPost } from '$lib/posts'
import { getPostUpdatedAtFromGit } from './post-details.remote'

const normalizedURL = SITE_URL.endsWith('/') ? SITE_URL : SITE_URL + '/'
const samuel = { name: 'Samuel Plumppu', link: normalizedURL }

/**
 * Turn a `svelte-markdoc` document into a clean HTML string
 *
 * @param component Svelte component with Markdoc content.
 * @returns HTML string
 */
async function renderSvelteMarkdocToHTML(component: Component) {
    const html = (await render(component)).body
    return (
        html
            // Remove CSS-based syntax highlighting since this is handled by the feed readers.
            // IDEA: Add the code language as an attribute/class to the <pre>-element
            // so maybe some feed readers could render syntax highlighting.
            .replaceAll(/<pre[^>]*>/gm, '<pre>')
            // Simplify markup by replacing code <span> elements with the plain text, formatted content
            .replaceAll(/<span[^>]*>/gm, '')
            .replaceAll(/<\/span>/gm, '')
            // Remove all HTML comments, since we don't plan to hydrate this HTML as an SvelteKit app.
            .replaceAll(/<!--([\s\S]*?)-->/gm, '')
    )
}

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
        const updatedAt = await getPostUpdatedAtFromGit(post.slug)
        const content = await renderSvelteMarkdocToHTML(post.Content)

        feed.addItem({
            published: post.publishedAt,
            // Fall back to the publishing date if post has not yet been updated in the Git history.
            date: updatedAt ?? post.publishedAt,
            title: post.title,
            link: postURL,
            content,
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
