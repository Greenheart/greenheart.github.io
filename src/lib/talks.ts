import { readdir } from 'fs/promises'

const getDirectories = async (source: string) =>
    (await readdir(source, { withFileTypes: true }))
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

const talks = (await getDirectories('./static/talks')).reverse()

export default talks
