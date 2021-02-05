/*
IDEA:

- add all blog posts meta information to an array
- import individual meta
*/

export interface BlogPostMeta {
    title: string
    date: string
    author: string
    exclude?: boolean
}

export const Authors = {
    Samuel: 'Samuel Plumppu',
}

export const AllBlogPosts: BlogPostMeta[] = [
    {
        title: 'Hello',
        author: Authors.Samuel,
        date: '2020-12-28',
    },
]
