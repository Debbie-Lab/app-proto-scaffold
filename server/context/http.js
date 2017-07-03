import rp from 'request-promise'

export default class Http {
  constructor() {
    this.rp = rp
  }

  request(opts) {
    return new Promise((resolve, reject) => rp(opts).then(resolve).cache(reject))
  }
}

