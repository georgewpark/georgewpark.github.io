import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const devEntry = (): Plugin => ({
  name: 'dev-entry',
  apply: 'serve',
  transformIndexHtml: html =>
    html
      .replace(
        /\s*<link rel="stylesheet" href="\/build\/css\/app\.css"\s*\/?>/,
        ''
      )
      .replace(
        /<script type="module" src="\/build\/js\/app\.js"><\/script>/,
        '<script type="module" src="/src/main.tsx"></script>'
      )
})

export default defineConfig({
  plugins: [react(), tailwindcss(), devEntry()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: { app: 'src/main.tsx' },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'css/[name][extname]'
      }
    }
  }
})
