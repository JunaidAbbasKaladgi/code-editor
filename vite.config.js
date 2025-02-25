import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the base path is set correctly
  server: {
    host: true, // Allow access from external sources (EC2)
    port: 3000, // Or use 80 for direct access
  }
})
