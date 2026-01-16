/**
 * Main data source for tech skills, organized into categories.
 */
export const TECH_SKILLS: Record<string, Skill[]> = {
    'Programming languages': [
        ['TypeScript', 5],
        ['JavaScript', 5],
        ['Rust', 3],
        ['Python', 3],
        ['C#', 2],
        ['PHP', 2],
    ],
    'Web development': [
        ['HTML', 5],
        ['CSS', 4],
        ['Svelte', 4],
        ['SvelteKit', 4],
        ['React', 4],
        ['Astro', 3],
        ['Playwright', 3],
        ['Vitest', 3],
        ['Storybook', 2],
        ['Next.js', 2],
        ['Angular.js', 2],
    ],
    'Backend development & APIs': [
        ['REST', 4],
        ['OpenAPI', 4],
        ['Node.js', 4],
        ['Fastify', 4],
        ['Express', 4],
        ['BullMQ', 4],
        ['OpenSearch', 3],
        ['GraphQL', 2],
        ['Elasticsearch', 2],
        ['Meteor', 2],
    ],
    'Databases & ORMs': [
        ['PostgreSQL', 4],
        ['Redis', 4],
        ['Valkey', 4],
        ['SQLite', 3],
        ['Prisma', 3],
        ['Drizzle', 3],
        ['Database Design', 3],
        ['Mongo DB', 2],
    ],
    'Servers & containers': [
        ['Linux', 4],
        ['Podman', 4],
        ['Docker', 4],
        ['Kubernetes', 2],
        ['Flux', 2],
        ['Ansible', 1],
    ],
    'Mobile development': [
        ['React Native', 4],
        ['Android', 3],
        ['iOS', 2],
    ],
    CMS: [
        ['Keystatic', 4],
        ['Decap', 3],
        ['Strapi', 3],
        ['WordPress', 2],
    ],
    'Other tech skills': [
        ['Testing', 4],
        ['Accessibility', 3],
        ['Privacy', 3],
        ['Cryptography', 3],
        ['Shell Scripting', 3],
        ['CI/CD', 3],
        ['Data Pipelines', 3],
        ['OCR', 2],
        ['Local-first', 2],
        ['CRDT', 2],
        ['Phaser', 2],
    ],
} as const

/**
 * This enables type checking for the skill definitions below and for tags.
 *
 * Do not edit this array directly. New tech skills should either be added:
 * 1) In the `TECH_SKILLS` below (to show it as tech skills)
 * 2) Directly in the `tagsSchema` (if it's only needed for blog posts or projects)
 *
 * This array can be automatically updated by running:
 * `pnpm update-skills`
 */
export const ALL_TECH_SKILLS = [
    'TypeScript',
    'JavaScript',
    'Rust',
    'Python',
    'C#',
    'PHP',
    'HTML',
    'CSS',
    'Svelte',
    'SvelteKit',
    'React',
    'Astro',
    'Playwright',
    'Vitest',
    'Storybook',
    'Next.js',
    'Angular.js',
    'REST',
    'OpenAPI',
    'Node.js',
    'Fastify',
    'Express',
    'BullMQ',
    'OpenSearch',
    'GraphQL',
    'Elasticsearch',
    'Meteor',
    'PostgreSQL',
    'Redis',
    'Valkey',
    'SQLite',
    'Prisma',
    'Drizzle',
    'Database Design',
    'Mongo DB',
    'Linux',
    'Podman',
    'Docker',
    'Kubernetes',
    'Flux',
    'Ansible',
    'React Native',
    'Android',
    'iOS',
    'Keystatic',
    'Decap',
    'Strapi',
    'WordPress',
    'Testing',
    'Accessibility',
    'Privacy',
    'Cryptography',
    'Shell Scripting',
    'CI/CD',
    'Data Pipelines',
    'OCR',
    'Local-first',
    'CRDT',
    'Phaser',
] as const

type SkillName = (typeof ALL_TECH_SKILLS)[number]
/** Higher proficiency is better */
export type Proficiency = 5 | 4 | 3 | 2 | 1
type Skill = [SkillName, Proficiency]
