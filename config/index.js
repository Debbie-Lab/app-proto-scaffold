const path = require('path')

const { join } = path

const client = join(__dirname, '..', 'client')
const server = join(__dirname, '..', 'server')

module.exports = {
  path: {
    bundles: {
      path: join(client, 'pages'),
      whitelist: [],
    },
    context: join(server, 'context'),
    controllers: join(server, 'controllers'),
    datasources: join(server, 'datasources'),
    middlewares: join(server, 'middlewares'),
    templates: join(server, 'templates'),
  },
  env: process.env.NODE_ENV || 'development',
  mock: true,
  port: 8089,
}
