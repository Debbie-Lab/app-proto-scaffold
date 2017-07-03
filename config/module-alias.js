const fs = require('fs')
const path = require('path')


const { join, resolve } = path

function isDirectory(dir) {
  try {
    return fs.statSync(resolve(client, dir)).isDirectory()
  } catch (e) {
    return false
  }
}

const root = join(__dirname, '..')
const client = join(root, 'client')

const moduleAlias = {
  '@client': client,
  '@server': resolve(root, 'server'),
  '@config': resolve(root, 'config'),
  '@webpack': resolve(root, 'webpack'),
}

fs.readdirSync(client)
  .filter(dir => isDirectory(resolve(client, dir)))
  .forEach(dir => moduleAlias[`@${dir}`] = resolve(client, dir))

module.exports = moduleAlias

