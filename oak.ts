/*
 * deno run --allow-net --allow-read oak.ts
 * OR
 *
 * Docs: https://github.com/oakserver/oak
 */
import { Application } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()

app.use((ctx) => {
  ctx.response.body = 'Hello from your first oak server'
})

console.log(`🌳 oak server running at http://localhost:2345/ 🌳`)

await app.listen({ port: 2345 })
