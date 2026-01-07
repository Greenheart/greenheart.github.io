import { tech } from '$data/tech-stack'
import z from 'zod'

const allTechSkills = [...tech.Current, ...tech.Learning, ...tech.Past]

/**
 * Tags used for posts and projects
 */
export const tagsSchema = z.enum([
    ...allTechSkills,
    'Git',
    'Terminal',
    'Vite',
    'Accessibility',
    'PDF',
    'Data Pipeline',
    'OCR',
    'Caching',
    'Performance',
    'Distrobox',
    'Testing',
    'Shell Scripting',
    'Entrepreneurship',
    'Co-operatives',
    'Economics',
    'DX',
    'Code Snippet',
    'Firefox',
    'Productivity',
])
