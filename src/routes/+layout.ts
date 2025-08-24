import type { MetaTagsProps } from 'svelte-meta-tags'

import { SITE_DESCRIPTION, BASE_TITLE } from '$lib/constants'

export const prerender = true
export const trailingSlash = 'ignore'

export const load = ({ url }) => {
    const canonical = new URL(url.pathname, url.origin).href

    const baseMetaTags = Object.freeze({
        titleTemplate: `%s · ${BASE_TITLE}`,
        description: SITE_DESCRIPTION,
        canonical,
        openGraph: {
            type: 'website',
            url: canonical,
            title: BASE_TITLE,
            description: SITE_DESCRIPTION,
        },
    }) satisfies MetaTagsProps

    return {
        baseMetaTags,
    }
}
