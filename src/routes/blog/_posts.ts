import { readFileSync, readdirSync } from 'fs'
import { resolve } from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

import type { RawBlogPost } from '$lib/interfaces'

const blogDir = resolve(process.cwd(), 'src', 'routes', 'blog')

const posts = readdirSync(blogDir)
    .filter((e) => e.endsWith('.md'))
    .map((file) => {
        const raw = readFileSync(resolve(blogDir, file), {
            encoding: 'utf8',
        })

        const frontmatter = matter(raw)

        return {
            ...(frontmatter.data as RawBlogPost),
            slug: file.replace('.md', ''),
            readingTime: readingTime(frontmatter.content).text,
        }
    })

const latestFirst = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

export default latestFirst
