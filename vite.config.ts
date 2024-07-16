import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@style': path.resolve(__dirname, './src/style'),
      
      '@bootstrap-scss': path.resolve(
        __dirname,
        './node_modules/bootstrap/scss/bootstrap'
      ),
      '@bootstrap-icons-svg': path.resolve(
        __dirname,
        './node_modules/bootstrap-icons/bootstrap-icons.svg'
      ),
      '@bootstrap-js': path.resolve(
        __dirname,
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
      ),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
