const prod = process.env.NODE_ENV === 'production'
const ASSETS_DEPS_JSON = '../../__deps__.json'

export default class Assets {
  constructor () {
    this.cache = require(ASSETS_DEPS_JSON).default
  }

  deps (key, type) {
    if (!prod) {
      delete require.cache[require.resolve(ASSETS_DEPS_JSON)]
      this.cache = require(ASSETS_DEPS_JSON)
    }

    const suffix = type || 'js'
    if (!this.cache[key] || !this.cache[key][suffix]) {
      throw new ReferenceError(`["${key}"]["${suffix}"] is not in assets object.`)
    }

    return this.cache[key][suffix]
  }
}
