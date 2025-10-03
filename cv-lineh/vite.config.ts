import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/application-cv/',
  plugins: [react()],
  server: {
    host: 'localhost'
  }
})