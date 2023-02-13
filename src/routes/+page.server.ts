import posts from '$lib/posts'
import type { PageServerLoad } from './$types'

const featuredPosts = posts.filter((p) => p.featured)

export const load = (() => ({ featuredPosts })) satisfies PageServerLoad
