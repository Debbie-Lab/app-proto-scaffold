import path from 'path'
import koaStatic from 'koa-static'

const prod = process.env.NODE_ENV === 'production'
const serve = koaStatic(path.resolve(__dirname, '..', '..', 'webroot'))

export default async function(ctx, next) {
  if (prod) await next()
  else await serve.call(this, ctx, next)
}


