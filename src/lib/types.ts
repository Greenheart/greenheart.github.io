export type BlogPost = {
    title: string
    date: string
    tags?: string[]
    featured?: boolean
    draft?: boolean
    slug: string
}

export type TechStack = {
    Current: string[]
    Past: string[]
    Learning: string[]
}
