import { readFileSync, readdirSync } from 'fs'
import { resolve } from 'path'
import frontmatter from 'gray-matter'

import type { RawBlogPost } from '$lib/interfaces'

const blogDir = resolve(process.cwd(), 'src', 'routes', 'blog')

const posts = readdirSync(blogDir)
    .filter((e) => e.endsWith('.md'))
    .map((file) => {
        const post = readFileSync(resolve(blogDir, file), {
            encoding: 'utf8',
        })

        return {
            ...(frontmatter(post).data as RawBlogPost),
            slug: file.replace('.md', ''),
        }
    })

const latestFirst = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

export default latestFirst
