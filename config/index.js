const path = require('path')

const { join } = path

const client = join(__dirname, '..', 'client')
const server = join(__dirname, '..', 'server')

module.exports = {
  path: {
    'ctx-registers': join(server, 'ctx-registers'),
    middlewares: join(server, 'middlewares'),
    controllers: join(server, 'controllers'),
    templates: join(server, 'templates'),
  },
  env: process.env.NODE_ENV || 'development',
  mock: true,
  port: 8089,
}
