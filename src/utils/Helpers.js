const join = (...classes) => classes.join(' ')

const throttleAnimationFrame = fn => {
    let ticking = false
    return (...args) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                fn(...args)
                ticking = false
            })
            ticking = true
        }
    }
}

export { join, throttleAnimationFrame }
