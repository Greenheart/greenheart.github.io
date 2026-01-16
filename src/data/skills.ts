type SkillName = string
type Proficiency = 5 | 4 | 3 | 2 | 1
type UsedInThePast = true
type Skill = [SkillName, Proficiency, UsedInThePast?]

export const TECH_SKILLS: Record<string, Skill[]> = {
    'Programming Languages': [
        ['TypeScript', 5],
        ['JavaScript', 5],
        ['Rust', 3],
        ['Python', 3],
        ['C#', 2, true],
        ['PHP', 2, true],
    ],
    'Web Development': [
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
        ['Angular.js', 2, true],
    ],
    'Backend Development & APIs': [
        ['REST', 4],
        ['OpenAPI', 4],
        ['Fastify', 4],
        ['Express', 4],
        ['BullMQ', 4],
        ['OpenSearch', 3],
        ['GraphQL', 2],
        ['Elasticsearch', 2],
        ['Meteor', 2, true],
    ],
    'Databases & ORMs': [
        ['PostgreSQL', 4],
        ['Redis', 4],
        ['Valkey', 4],
        ['SQLite', 3],
        ['Prisma', 3],
        ['Drizzle', 3],
        ['Mongo DB', 2, true],
    ],
    'Servers & Containers': [
        ['Linux', 4],
        ['Podman', 4],
        ['Docker', 4],
        ['Kubernetes', 2],
        ['Flux', 2],
        ['Ansible', 1],
    ],
    'Mobile Development': [
        ['React Native', 4],
        ['Android', 3],
        ['iOS', 2],
    ],
    CMS: [
        ['Keystatic', 4],
        ['Decap', 3, true],
        ['Strapi', 3],
        ['WordPress', 2, true],
    ],
    'Other Technologies': [
        ['Cryptography', 3],
        ['Shell Scripting', 3],
        ['CI/CD', 3],
        ['Local-first', 2],
        ['CRDT', 2],
        ['Phaser', 2, true],
    ],
} as const
