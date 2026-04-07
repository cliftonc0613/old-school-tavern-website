import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/old-school-tavern-website/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bar: resolve(__dirname, 'the-bar.html'),
        kitchen: resolve(__dirname, 'the-kitchen.html'),
        events: resolve(__dirname, 'the-events.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
