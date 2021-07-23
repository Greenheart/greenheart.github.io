/**
 * Test if an URL is external.
 * @param href {string} The URL to test.
 * @returns True if the link is external, and false otherwise.
 */
export default function isExternalURL(href: string): boolean {
    const a = document.createElement('a')
    a.href = href
    console.log(window.location.host, a.host)
    return window.location.host !== a.host
}