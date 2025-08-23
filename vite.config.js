import { sveltekit } from '@sveltejs/kit/vite'
import tailwind from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
    plugins: [sveltekit(), tailwind(), Icons({ compiler: 'svelte' })],
})
