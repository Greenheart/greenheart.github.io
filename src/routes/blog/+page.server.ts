import posts from '$lib/posts'
import type { PageServerLoad } from './$types'

export const load = (() => ({ posts })) satisfies PageServerLoad
