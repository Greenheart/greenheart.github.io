import { readFile } from 'fs/promises'
import { resolve } from 'path'
import talks from '$lib/talks'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { slug }, setHeaders }) {
    if (talks.includes(slug)) {
        const talk = await readFile(
            resolve(process.cwd(), 'static', 'talks', slug, 'index.html'),
            { encoding: 'utf-8' },
        )

        setHeaders({
            location: `/talks/${slug}/`,
        })

        if (talk) return { talk }
    }

    throw error(404, 'Not found')
}
