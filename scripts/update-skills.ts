import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { TECH_SKILLS } from '../src/data/tech-skills.ts'

/**
 * This script updates tech skills to keep the TypeScript definitions in sync
 * with the actual data. This provides type safety and spell checking,
 * while avoiding the issue of circular references in TypeScript.
 */
if (import.meta.main) {
    const path = resolve(import.meta.dirname, '../src/data/tech-skills.ts')
    const rawFile = await readFile(path, 'utf-8')

    const allSkills = Object.values(TECH_SKILLS).flatMap((category) =>
        category.map((skill) => skill[0]),
    )

    const oldSkills = rawFile.match(
        /export const ALL_TECH_SKILLS = \[\s*([\s\S]*)\,\n\] as const/,
    )![1]

    await writeFile(
        path,
        rawFile.replace(
            oldSkills,
            allSkills.map((skill) => `'${skill}'`).join(',\n    '),
        ),
        'utf-8',
    )
}
