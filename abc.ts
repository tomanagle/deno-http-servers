/*
 * deno run --allow-net abc.ts

 * Docs: 
 */
import { Application } from 'https://deno.land/x/abc@v1.0.0-rc6/mod.ts'

const app = new Application()

function home() {
  return 'Hello from your first Abc server'
}

function hello() {
  return 'Hello route'
}

app.get('/', home)

app.get('/hello', hello)

app.start({ port: 4567 })

console.log(`🔤 Abc server running at http://localhost:4567/ 🔤`)
