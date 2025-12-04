import { error } from '@sveltejs/kit'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

import talks from '$lib/talks'

export const prerender = true
export const trailingSlash = 'always'

export const GET = async ({ params: { slug }, setHeaders }) => {
    if (talks.includes(slug)) {
        const talk = await readFile(
            resolve(process.cwd(), 'static', 'talks', slug, 'index.html'),
            { encoding: 'utf-8' },
        )

        // This is important to make the dev server work correctly
        setHeaders({
            location: `/talks/${slug}/`,
        })

        if (talk) {
            return new Response(talk, {
                headers: { 'Content-Type': 'text/html' },
            })
        }

        throw new Error(`Unexpected error when rendering talk ${slug}`)
    }

    error(404, 'Not found')
}
