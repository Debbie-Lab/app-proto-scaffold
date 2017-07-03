// babel.config for webpack\babel-register
const path = require('path')
const moduleAlias = require('./module-alias.js')

const root = path.resolve(__dirname, '..')

const moduleResolver = {
  root: [root],
  alias: moduleAlias,
}

module.exports = {
  presets: ['es2015', 'stage-3', 'react'],
  plugins: [
    ['module-resolver', moduleResolver],
  ],
  ignore: ['node_modules'],
}


