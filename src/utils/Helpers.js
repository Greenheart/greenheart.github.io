const join = (...classes) => classes.join(' ')

const getCSSVariable = (name, target = document.body) =>
    getComputedStyle(target).getPropertyValue(name)

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

export { join, getCSSVariable, throttleAnimationFrame }
