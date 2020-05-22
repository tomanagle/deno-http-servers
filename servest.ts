/*
 * deno run --allow-net --allow-read servest.ts
 * OR
 * deno run --allow-net --allow-read https://raw.githubusercontent.com/tomanagle/deno-http-servers/master/servest.ts
 * Docs: https://github.com/keroxp/servest
 */
// @deno-types="https://servestjs.org/@/types/react/index.d.ts"
import React from 'https://dev.jspm.io/react/index.js'
// @deno-types="https://servestjs.org/@/types/react-dom/server/index.d.ts"
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server.js'
import { createApp } from 'https://servestjs.org/@/mod.ts'

const app = createApp()
app.handle('/', async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/html; charset=UTF-8'
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>Hello Servest!</body>
      </html>
    )
  })
})
app.listen({ port: 3456 })
