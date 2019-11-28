import fs from 'fs'
import execSafely from './execSafely'

function accessible () {
  const [, err] = execSafely(() => fs.accessSync.apply(fs, arguments))
  return typeof err === 'undefined'
}

export default accessible

export function isDirectory (file) {
  const [res, err] = execSafely(() => fs.statSync(file).isDirectory())
  return (typeof err === 'undefined' && res)
}
