import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Template from 'app-proto-recipes/template'
import { errorStack2Html } from 'koa-error-stack'

export default class DefaultTpl extends Template {
  constructor(params) {
    super(params)
  }

  async toHtml() {
    const { doT, assets } = this.ctx
    const App = this.serveBundle
    try {
      const data = {
        serveData: this.serveData,
        assets: {
          js: assets.deps(this.page),
          css: assets.deps(this.page, 'css'),
        },
        ssr: ReactDOMServer.renderToString(<App {...this.serveData} />),
      }
      return doT.default(data)
    } catch (error) {
      dump(error)
      return errorStack2Html(error)
    }
  }
}

