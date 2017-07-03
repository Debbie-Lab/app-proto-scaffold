const webpackConfig = require('./common.config')()

const glob = require('glob')
const path = require('path')
const AssetsPlugin = require('assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolve = path.resolve
const root = resolve(__dirname, '..')
const pages = resolve(root, 'client', 'pages')

webpackConfig.context = pages

const entries = {}

glob.sync('**/*.js', { cwd: pages, })
  .forEach(file => entries[file.replace(/\.\w+$/, '')] = `./${file}`)

webpackConfig.entry = entries

webpackConfig.plugins = webpackConfig.plugins || []

webpackConfig.plugins.push(new AssetsPlugin({
   filename: '__deps__.json',
  path: path.join(__dirname, '..'),
}))


webpackConfig.module.rules.push({
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [ 'css-loader', 'postcss-loader',]
  }),
})

webpackConfig.plugins.push(new ExtractTextPlugin('[name].css?[contenthash:20]'))

module.exports = webpackConfig

