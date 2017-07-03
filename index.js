require('./debugger-tools')

const babelConfig = require('./config/babel.config.js')

babelConfig.plugins.push([
  'babel-plugin-transform-require-ignore',
  { extensions: ['.scss'] },
])

require('babel-register')(babelConfig)
require('babel-polyfill')


require('./server/main')

