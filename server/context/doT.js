import doT from 'dot'
import fs from 'mz/fs'
import glob from 'glob'
import path from 'path'
import config from '@config'
import camelCase from 'camelcase'

const tplPath = config.path.templates

// http://olado.github.io/doT/index.html
export default class DoT {
  constructor() {
    glob('**/*.jst', { cwd: tplPath, dot: false, sync: true })
      .forEach(async file =>
        this[camelCase(file.replace(/\//g, ' ').replace(/\.\w+$/, ''))] = doT.template(
          await fs.readFile(path.resolve(tplPath, file)
        )
      )
    )
  }
}

