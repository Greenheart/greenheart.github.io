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

/**
 * Separate featured entries from other entries, and sort them by weight.
 */
export function sortFeaturedByWeight<T extends { featuredWeight?: number }>(
    entries: T[],
): {
    featured: (T & { featuredWeight: number })[]
    other: T[]
} {
    const result = entries.reduce<{
        featured: (T & { featuredWeight: number })[]
        other: T[]
    }>(
        (result, entry) => {
            result[
                entry.featuredWeight !== undefined ? 'featured' : 'other'
            ].push(entry as T & { featuredWeight: number })
            return result
        },
        { featured: [], other: [] },
    )

    return {
        featured: result.featured.sort(
            (a, b) => b.featuredWeight - a.featuredWeight,
        ),
        other: result.other,
    }
}
