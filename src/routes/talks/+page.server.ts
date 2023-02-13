import talks from '$lib/talks'
import type { PageServerLoad } from './$types'

export const load = (() => ({
    talks: talks.reverse(),
})) satisfies PageServerLoad
