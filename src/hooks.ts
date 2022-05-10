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
    } else if (
        event.url.pathname.length > 1 &&
        event.url.href.endsWith('/') &&
        !isTalk.test(event.url.href)
    ) {
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
