const join = (...classes) => classes.join(' ')

const getCSSVariable = (name, target = document.body) =>
    getComputedStyle(target).getPropertyValue(name)

export { join, getCSSVariable }
