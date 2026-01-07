import type { TechStack } from '$lib/types'

export const tech = {
    Learning: ['Rust', 'Local-first', 'CRDT', 'Ansible'],
    Current: [
        'TypeScript',
        'Python',
        'Node.js',
        'Svelte',
        'React',
        'Fastify',
        'SvelteKit',
        'Astro',
        'Tailwind CSS',
        'Docker',
        'Podman',
        'PostgreSQL',
        'SQLite',
        'Redis',
        'Playwright',
        'Prisma',
        'BullMQ',
        'Drizzle ORM',
        'Kubernetes',
        'Flux',
        'Keystatic CMS',
        'Web Crypto API',
        'HTML', // NOTE: Separate tech stack into different categories and move some items to a lower priority.
    ],
    Past: [
        'C#',
        'Elixir',
        'PHP',
        'Next.js',
        'React Native',
        'Gatsby',
        'Meteor',
        'Storybook',
        'JavaScript',
        'Angular.js',
        'Mongo DB',
        'GraphQL',
        'Phaser',
        'Express',
        'Elasticsearch',
    ],
} as const

export const groups = Object.keys(tech).reverse() as (keyof TechStack)[]
