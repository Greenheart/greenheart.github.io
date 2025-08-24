import type { MetaTagsProps } from 'svelte-meta-tags'

import { SITE_DESCRIPTION, BASE_TITLE } from '$lib/constants'

export const prerender = true
export const trailingSlash = 'ignore'

export const load = ({ url, route }) => {
    const canonical = new URL(url.pathname, url.origin).href

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
        },
    }) satisfies MetaTagsProps

    return {
        baseMetaTags,
    }
}
