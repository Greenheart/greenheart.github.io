import { readdir } from 'fs/promises'

const getDirectories = async (source: string) =>
    (await readdir(source, { withFileTypes: true }))
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

export const ALL_TALKS = await getDirectories('./static/talks')

export async function get() {
    return {
        body: { allTalks: ALL_TALKS },
    }
}
