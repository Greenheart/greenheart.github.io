export interface RawBlogPost {
    title: string
    date: string
    tags?: string[]
}

export interface BlogPost extends RawBlogPost {
    slug: string
}

export interface TechStack {
    Current: string[]
    Past: string[]
    Learning: string[]
}
