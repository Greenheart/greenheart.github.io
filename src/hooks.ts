import type { Handle } from '@sveltejs/kit'
// import { readdir } from 'fs/promises'

// const getDirectories = async (source: string) =>
//     (await readdir(source, { withFileTypes: true }))
//         .filter((dirent) => dirent.isDirectory())
//         .map((dirent) => dirent.name)

// const allTalks = await getDirectories('./static/talks')

// const isTalk = (url: URL) =>
//     allTalks.some((talk) => url.href.endsWith(`/talks/${talk}`))

const isTalk = /\/talks\/.+\/?$/
const isTalkWithoutTrailingSlash = /\/talks\/.+[^\/]$/

// IDEA: Maybe use the actual talks, but likely this is unnecessary.
// const isTalkRegExp = new RegExp(`\/talks\/${allTalks.join('|')}\/`)

export const handle: Handle = async ({ event, resolve }) => {
    if (isTalkWithoutTrailingSlash.test(event.url.href)) {
        console.log('[handle]: Missing trailing slash:', event.url.href)
        return new Response('', {
            status: 301,
            headers: {
                location: event.url.pathname + '/',
            },
        })
    } else if (event.url.href.endsWith('/') && !isTalk.test(event.url.href)) {
        console.log(
            '[handle]: Removing unwanted trailing slash:',
            event.url.href,
        )
        return new Response('', {
            status: 301,
            headers: { location: event.url.pathname.replace(/\/$/, '') },
        })
    }

    return resolve(event)
}

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
