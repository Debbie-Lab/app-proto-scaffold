import Koa from 'koa'
import http from 'http'
import chalk from 'chalk'
import recipes from 'app-proto-recipes'

import config from '@config'

const host = 'http://127.0.0.1'
const port = process.env.PORT || config.port
const url = `${host}:${port}`

const app = new Koa()

recipes(app, config)

const success =
`------------------------------------------------------------------------------------------

 ${chalk.red('(◔⊖◔)つ')}: app-proto server listening on ${chalk.magenta.bold(port)}, visit ${chalk.green.underline.bold(url)} to check awesome!

---------- ☝( ◠‿◠ )☝ ---------------------------------------------------------------------`

http.createServer(app.callback()).listen(port,
  () => setTimeout(() => console.log(success), 0)
)


