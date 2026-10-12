import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true,
  },
  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Inline small assets for fewer requests
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Optimize asset file names for caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
  },
})
