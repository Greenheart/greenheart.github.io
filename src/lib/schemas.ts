import z from 'zod'

import { ALL_TECH_SKILLS } from '$data/tech-skills'

/**
 * Tags which are only used for posts and projects
 */
export const tagsSchema = z.enum([
    ...ALL_TECH_SKILLS,
    'Git',
    'Terminal',
    'Vite',
    'PDF',
    'Data Pipelines',
    'Caching',
    'Performance',
    'Distrobox',
    'Entrepreneurship',
    'Co-operatives',
    'Systems Thinking',
    'Economics',
    'DX',
    'Code Snippet',
    'Firefox',
    'Productivity',
    'Web Crypto API',
    'Open Source',
])
