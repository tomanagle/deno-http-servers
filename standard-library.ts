/*
 * deno run --allow-net --allow-read standard-library.ts
 * OR
 * deno run --allow-net --allow-read https://raw.githubusercontent.com/tomanagle/deno-http-servers/master/standard-library.ts
 * Docs: https://deno.land/std/http
 */
import { serve } from 'https://deno.land/std/http/server.ts'
const s = serve({ port: 8000 })
console.log(`🦕 Deno server running at http://localhost:8000/ 🦕`)
for await (const req of s) {
  req.respond({ body: 'Hello from your first Deno server' })
}
