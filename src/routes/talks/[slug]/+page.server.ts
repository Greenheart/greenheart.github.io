import { error } from '@sveltejs/kit'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

import talks from '$lib/talks'

export const trailingSlash = 'always'

export const load = async ({ params: { slug }, setHeaders }) => {
    if (talks.includes(slug)) {
        const talk = await readFile(
            resolve(process.cwd(), 'static', 'talks', slug, 'index.html'),
            { encoding: 'utf-8' },
        )

        // This is important to make the dev server work correctly
        setHeaders({
            location: `/talks/${slug}/`,
        })

        if (talk) return { talk }
    }

    error(404, 'Not found')
}
