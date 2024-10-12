//create a json server using json-server module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Use router middleware
server.use(router)

// Start server
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`)
})