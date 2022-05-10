import { readFile } from 'fs/promises'
import { resolve } from 'path'

import { ALL_TALKS } from '../index'

export async function get({ params: { slug } }: { params: { slug: string } }) {
    if (ALL_TALKS.includes(slug)) {
        const talk = await readFile(
            resolve(process.cwd(), 'static', 'talks', slug, 'index.html'),
            { encoding: 'utf-8' },
        )

        if (talk) {
            return {
                body: { talk },
                headers: {
                    location: `/talks/${slug}/`,
                },
            }
        }
    }

    return { status: 404 }
}
