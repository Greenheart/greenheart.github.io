import type { Handle } from '@sveltejs/kit'

const isTalk = /\/talks\/.+\/?$/
const isTalkWithoutTrailingSlash = /\/talks\/.+[^\/]$/

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
