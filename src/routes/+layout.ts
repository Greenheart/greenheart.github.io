import type { MetaTagsProps } from 'svelte-meta-tags'
import { dev } from '$app/environment'

import { SITE_DESCRIPTION, BASE_TITLE, SITE_URL } from '$lib/constants'

export const prerender = true
export const trailingSlash = 'ignore'

export const load = ({ url, route }) => {
    const canonical = new URL(url.pathname, url.origin).href
    const image = `${dev ? 'http://localhost:5173' : SITE_URL}/samuel.jpg`
    const imageAlt = 'Samuel Plumppu'

    const baseMetaTags = Object.freeze({
        title: BASE_TITLE,
        titleTemplate: route.id === '/' ? undefined : `%s · ${BASE_TITLE}`,
        description: SITE_DESCRIPTION,
        canonical,
        openGraph: {
            title: BASE_TITLE,
            type: 'website',
            url: canonical,
            description: SITE_DESCRIPTION,
            image,
            imageAlt,
        },
    }) satisfies MetaTagsProps

    return {
        baseMetaTags,
    }
}
