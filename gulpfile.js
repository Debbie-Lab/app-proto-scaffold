const gulp = require('gulp')
const nodemon = require('nodemon')
const webpack = require('webpack')

const clientWebpackConfig = require('./webpack/client.config')
const statsConfig = clientWebpackConfig.stats
const logger = console.log

function onBuild(done) {
  return function(err, stats) {
    if (err) logger(err)
    else logger(stats.toString(statsConfig))
    if (done) done()
  }
}

gulp.task('build-webpack', done => webpack(clientWebpackConfig).run(onBuild(done)))


gulp.task('run', () => {
  let first = true
  webpack(clientWebpackConfig).watch(100, onBuild(() => {
    if (!first) {
      nodemon.restart()
      return
    }
    first = false
    nodemon({
      script: './index',
      verbose: true,
      watch: [ 'server', 'index.js' ],
    })
    .on('start', () => logger('Main process started. watching...'))
    .on('crash', () => logger('Main process crashed.'))
    .on('quit', process.exit)
    .on('restart', () => logger('restart'))
    .on('config:update', config => {
      const options = config.options || {}
      logger('Nodemon configured.')
      logger('输入`' + (options.restartable || 'rs') + '\'回车以手动重启进程')
    })
  }))
})

