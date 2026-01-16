import z from 'zod'

import { ALL_TECH_SKILLS } from '$data/tech-skills'

/**
 * Tags used for posts and projects
 */
export const tagsSchema = z.enum([
    ...ALL_TECH_SKILLS,
    'Git',
    'Terminal',
    'Vite',
    'Accessibility',
    'PDF',
    'Data Pipelines',
    'Caching',
    'Performance',
    'Distrobox',
    'Testing',
    'Entrepreneurship',
    'Co-operatives',
    'Economics',
    'DX',
    'Code Snippet',
    'Firefox',
    'Productivity',
    'Web Crypto API',
])
