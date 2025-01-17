import { readdir } from 'fs/promises'

const getDirectories = async (source: string) =>
    (await readdir(source, { withFileTypes: true }))
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
        .toSorted((a, b) => b.localeCompare(a))

const talks = await getDirectories('./static/talks')

export default talks
