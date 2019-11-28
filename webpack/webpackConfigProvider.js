import path from 'path'
import Target from '../consts/Target'
console.log(path)

const defaultOptions = {
  target: Target.Browser
}

const webpackConfigProvider = (_options = {}) => {
  const options = Object.assign({}, defaultOptions, _options)

  console.log(options)
  const webpackConfig = {}

  return webpackConfig
}

export default webpackConfigProvider
