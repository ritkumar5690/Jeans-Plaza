import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
   base: process.env.VITE_BASE_PATH || "/Jeans-Plaza
"
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
});
