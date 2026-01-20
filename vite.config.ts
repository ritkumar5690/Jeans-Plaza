import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/Jeans-Plaza/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

// export