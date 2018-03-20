const Koa = require('koa')
const http = require('http')
const chalk = require('chalk')
const config = require('../config')

const recipes = require('app-proto-recipes')

const host = 'http://127.0.0.1'
const port = process.env.PORT || config.port || 8088
const url = `${host}:${port}`

const app = new Koa()

const success =
`------------------------------------------------------------------------------------------

 ${chalk.red('(◔⊖◔)つ')}: app-proto server listening on ${chalk.magenta.bold(port)}, visit ${chalk.green.underline.bold(url)} to check awesome!

---------- ☝( ◠‿◠ )☝ ---------------------------------------------------------------------`



const main = async () => await recipes(app, config)

main().then(() => http.createServer(app.callback()).listen(port, () => setTimeout(() => console.log(success), 0)))

