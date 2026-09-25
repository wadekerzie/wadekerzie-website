import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev only: serve /api/latest locally the way Vercel serves it in production.
const devApi = {
  name: 'dev-api',
  configureServer(server) {
    server.middlewares.use('/api/latest', async (req, res) => {
      const { default: handler } = await import('./api/latest.js')
      const shim = {
        setHeader: (k, v) => res.setHeader(k, v),
        status(code) { res.statusCode = code; return shim },
        json(body) { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(body)) },
      }
      await handler(req, shim)
    })
  },
}

export default defineConfig({
  plugins: [react(), devApi],
})
