import { readFile } from 'fs/promises'
import { resolve } from 'path'
import talks from '$lib/talks'
import { error } from '@sveltejs/kit'

export const prerender = false
export const trailingSlash = 'always'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { slug } }) {
    if (talks.includes(slug)) {
        const talk = await readFile(
            resolve(process.cwd(), 'static', 'talks', slug, 'index.html'),
            { encoding: 'utf-8' },
        )

        if (talk) return { talk }
    }

    throw error(404, 'Not found')
}
