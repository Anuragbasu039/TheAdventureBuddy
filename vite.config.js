import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',

    },
  },
})
