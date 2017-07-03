require('../debugger-tools')
const path = require('path')

const babelConfig = require('../config/babel.config.js')
const moduleAlias = require('../config/module-alias.js')

const dev = process.env.NODE_ENV !== 'production'

const { resolve } = path
const root = resolve(__dirname, '..')
const webroot = resolve(root, 'webroot')

const webAssetsDir = 'delonix'

module.exports = function() {
  return {
    output: {
      path: resolve(webroot, webAssetsDir),
      publicPath: `${resolve('/', webAssetsDir)}/`,
      filename: '[name].js?[chunkhash]',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader?cacheDirectory',
          exclude: /node_modules/,
          query: babelConfig,
        },
        {
          test: /\.(png|jpg|gif|svg|eot|woff|ttf)$/,
          loader: 'file-loader?cacheDirectory',
          options: {
            name: dev ? '[name].[ext]?[hash:20]' : '[name]-[hash:20].[ext]',
          },
        },
      ],
    },
    resolve: {
      alias: moduleAlias,
    },
    performance: {
      hints: dev ? false : 'warning',
    },
    stats: {
      assets: true,
      assetsSort: "field",
      cached: true,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      chunksSort: "field",
      colors: true,
      errors: true,
      errorDetails: true,
      hash: true,
      modules: false,
      modulesSort: "field",
      publicPath: true,
      reasons: true,
      source: false,
      timings: true,
      version: true,
      warnings: true,
    }
  }
}

