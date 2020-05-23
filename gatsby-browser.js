exports.onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === 'undefined') {
        window.IntersectionObserver = import('intersection-observer')
        console.log('# IntersectionObserver is polyfilled!')
    }
}
