import { rm, readdir } from 'fs/promises'
import { resolve } from 'path'

const getDirectories = async (source) =>
    (await readdir(source, { withFileTypes: true }))
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

export const ALL_TALKS = await getDirectories(resolve('./static/talks'))

const UNWANTED_FILES = ['.html', '__data.json']

// Remove weird build artifacts caused by combining SvelteKit `static` assets with rendered pages
await Promise.all(
    ALL_TALKS.flatMap((talk) =>
        UNWANTED_FILES.map((file) =>
            rm(resolve(`./build/talks/${talk}`, file)),
        ),
    ),
)
