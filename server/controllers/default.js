export default [
  {
    urls: ['/'],
    template: 'default',
    controller: async (ctx) => {
      return { 'name': 'juyipeng', "age": 27 }
    },
  },
  {
    urls: ['/dot'],
    controller: async (ctx) => {
      ctx.body = ctx.doT.dotCc({ 'name': 'juyipeng', "age": 27 })
    },
  },
  {
    urls: ['/hacker-news'],
    controller: async (ctx) => {
      const topstories = await ctx.$ds.hackerNewsTopstories(ctx, {}, false, true, 60000)
      ctx.render('default', Object.assign({ name: 'juyipeng', age: 27 }, { topstories }), 'hacker-news')
    },
  },

]

