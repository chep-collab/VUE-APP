// vite.config.js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/', // Vercel serves from root
  build: {
    minify: 'esbuild', // Faster minification
    chunkSizeWarningLimit: 1000, // Avoid warnings
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js', // Ensure consistent asset paths
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]', // CSS and other assets
      },
    },
  },
})