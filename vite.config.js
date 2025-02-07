import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    allowedHosts: ['4487-2401-4900-7dde-b432-f0cf-3437-1d3b-dd88.ngrok-free.app'],
  },
})
