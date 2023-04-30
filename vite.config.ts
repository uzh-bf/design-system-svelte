import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['src/main.ts'],
    },
  },
  plugins: [
    svelte({
      include: '**/*.wc.svelte',
      compilerOptions: {
        customElement: true,
      },
    }),
    svelte({
      exclude: '**/*.wc.svelte',
      compilerOptions: {
        customElement: false,
      },
    }),
  ],
})
