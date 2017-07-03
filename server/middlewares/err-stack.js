import errorStack from 'koa-error-stack'

const es = errorStack({debug: process.env.NODE_ENV !== 'production'})

export default async function(ctx, next) {
  await es.call(this, ctx, next)
}

