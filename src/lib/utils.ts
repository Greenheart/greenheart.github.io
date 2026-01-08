const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
})

export function formatDate(date: Date) {
    return dateTimeFormat.format(date)
}

/**
 * Run an event handler only once before unregistering it.
 */
export function once(fn: Function) {
    return function (this: Function, event: Event) {
        if (fn) fn.call(this, event)
        // @ts-expect-error
        fn = null
    }
}

/**
 * Separate featured entries from other entries.
 */
export function separateFeatured<T extends { featured: boolean }>(
    entries: T[],
): {
    featured: T[]
    other: T[]
} {
    return entries.reduce<{ featured: T[]; other: T[] }>(
        (result, entry) => {
            result[entry.featured ? 'featured' : 'other'].push(entry)
            return result
        },
        { featured: [], other: [] },
    )
}
