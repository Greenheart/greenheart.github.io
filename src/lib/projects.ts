import type { MarkdocModule } from 'markdoc-svelte'
import type { Component } from 'svelte'
import { z } from 'zod'

import { projectsBasePath } from './constants'
import { tagsSchema } from './schemas'
import type { RequiredProperties } from './types'

const projectSchema = z.object({
    frontmatter: z
        .object({
            name: z.string(),
            tags: z.array(tagsSchema),
            demo: z.url().optional(),
            code: z.url().optional(),
            startedYear: z.number().min(2000).max(2100),
            updatedYear: z.number().min(2000).max(2100).optional(),
            featured: z.boolean().default(false),
        })
        .superRefine((data, ctx) => {
            console.log(data.name, data.startedYear, data.updatedYear)
            if (
                data.updatedYear !== undefined &&
                data.updatedYear < data.startedYear
            ) {
                ctx.addIssue({
                    code: 'custom',
                    message: `updatedYear (${data.updatedYear}) can not be before startedYear (${data.startedYear})`,
                })
            }
        })
        .transform(
            (data) =>
                // Default to updated the same year if not defined
                (data.updatedYear === undefined
                    ? { ...data, updatedYear: data.startedYear }
                    : data) as RequiredProperties<typeof data, 'updatedYear'>,
        ),
})

type RawProject = z.infer<typeof projectSchema>

export type Project = RawProject['frontmatter'] & {
    slug: string
    Content: Component
} & Required<Pick<RawProject['frontmatter'], 'updatedYear'>>

const allProjects = Object.entries(
    import.meta.glob('/src/content/projects/*.md'),
).reduce<Record<string, () => Promise<MarkdocModule>>>(
    (rawProjects, [path, load]) => {
        const slug = path.replace(`/${projectsBasePath}`, '').replace('.md', '')
        rawProjects[slug] = load as () => Promise<MarkdocModule>
        return rawProjects
    },
    {},
)

const projects = new Map<string, Project>()

/** Get a specific project, loading it the first time it's accessed */
export async function getProject(slug: string) {
    const existing = projects.get(slug)
    if (existing) return existing

    const loaded = await allProjects[slug]?.()
    if (!loaded) {
        throw new Error('No project with slug: ' + slug)
    }
    const { default: Content, ...rawProject } = loaded

    const data = projectSchema.parse(rawProject, {
        reportInput: true,
        error: () => 'Invalid frontmatter for slug: ' + slug,
    })

    const project: Project = {
        ...data.frontmatter,
        slug,
        Content,
    }

    projects.set(slug, project)
    return project
}

export async function getAllProjects() {
    return Promise.all(
        Object.keys(allProjects).map((slug) => getProject(slug)),
    ).then((posts) => posts.sort(latestUpdatedFirst))
}

const latestUpdatedFirst = (
    a: Pick<Project, 'updatedYear'>,
    b: Pick<Project, 'updatedYear'>,
) => b.updatedYear - a.updatedYear

/** List projects without content */
export async function listProjects() {
    const projects = await getAllProjects()
    return projects.map(
        ({ Content, ...projectWithoutContent }) => projectWithoutContent,
    )
}
