import { resolve } from 'node:path'
import { cwd } from 'node:process'

export const SERVICE_WORKER_PATH = resolve(cwd(), 'node_modules/@nka11/sveltepress-theme-nka11/dist/components/pwa/sw.js')
