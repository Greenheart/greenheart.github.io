import { sveltekit } from '@sveltejs/kit/vite'
import tailwind from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit(),
        tailwind(),
        Icons({ compiler: 'svelte' }),
    ],
})
