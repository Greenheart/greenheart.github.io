import type z from 'zod'

import { postSchema } from './posts'

type RawPost = z.infer<typeof postSchema>

export type BlogPost = RawPost & {
    slug: string
}

export type TechStack = {
    Current: string[]
    Past: string[]
    Learning: string[]
}
