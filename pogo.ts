/*
 * deno run --allow-net pogo.ts
 * OR
 *
 * Docs: https://github.com/sholladay/pogo
 */
import pogo from 'https://deno.land/x/pogo/main.ts'

const server = pogo.server({ port: 5678 })

server.route([
  { method: 'GET', path: '/hi', handler: () => 'Hello! from Pogo' },
  { method: 'GET', path: '/bye', handler: () => 'Goodbye! from Pogo' }
])

server.start()

console.log('🕹️ Pogo server running at http://localhost:5678/ 🕹️')
