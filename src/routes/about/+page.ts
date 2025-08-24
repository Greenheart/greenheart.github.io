import type { MetaTagsProps } from 'svelte-meta-tags'

const title = 'About'

export const load = () => ({
    pageMetaTags: Object.freeze({
        title,
        openGraph: { title },
    }) satisfies MetaTagsProps,
})
