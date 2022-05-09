import type { Handle } from '@sveltejs/kit'
import { readFile, readdir } from 'fs/promises'
import path from 'path'

const getDirectories = async (source: string) =>
    (await readdir(source, { withFileTypes: true }))
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

const allTalks = await getDirectories('./static/talks')

// IDEA: intercept requests and serve static files or render the Slidev SPA

// Only remaining issue is getting the right path for static assets

// export const handle: Handle = async ({ event, resolve }) => {
//     // const response = await resolve(event, {
//     //     ssr: !event.url.pathname.startsWith('/talks/20'),
//     // })

//     // return response

//     if (event.url.pathname.startsWith('/talks/20')) {
//         const slug = event.url.pathname.replace('/talks/', '')

//         // const x = path.resolve('static', 'talks', slug)
//         // console.log('HOOOKS X', x)

//         console.log(allTalks, slug)

//         if (!allTalks.includes(slug)) {
//             // IDEA: Maybe it would be possible to rewrite the URL to allow the static assets
//             console.log(slug, event)
//             const response = await resolve(event)
//             return response
//         }

//         const talk = await readFile(
//             path.resolve('./static', 'talks', slug, 'index.html'),
//             { encoding: 'utf-8' },
//         )

//         if (talk) {
//             return new Response(talk, {
//                 headers: { 'Content-Type': 'text/html' },
//             })
//         }

//         return new Response('', { status: 404 })
//     }

//     const response = await resolve(event)
//     return response
// }
