import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import { vercelPreset } from '@vercel/remix/vite'

const maybeVercelPresets = process.env.VERCEL ? [vercelPreset()] : []
export default defineConfig({
  plugins: [
    remix({
      presets: maybeVercelPresets,
    }),
  ],
})
