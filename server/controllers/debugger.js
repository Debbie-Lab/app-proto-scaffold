
module.exports = {
  url: [ 'debugger' ],
  middlewares: [],
  controller: async (ctx) => {
    await ctx.render('default', {}, '')
  },
}

