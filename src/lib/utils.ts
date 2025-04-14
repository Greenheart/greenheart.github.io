const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})

export function formatDate(date: string) {
    return dateTimeFormat.format(new Date(date))
}

export function once(fn: Function) {
    return function (this: Function, event: Event) {
        if (fn) fn.call(this, event)
        // @ts-expect-error
        fn = null
    }
}
