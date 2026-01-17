import 'unplugin-icons/types/svelte'

declare module 'virtual:blog-reading-times' {
    type ReadingTimes = { [slug: string]: number }
    export default ReadingTimes
}

/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
    VITE_EMAIL: string
    VITE_PASSWORD: string
    VITE_PAYLOAD: string
}
