const util = require('util')
const chalk = require('chalk')
const moment = require('moment')

const inspect = obj => util.inspect(obj, { depth: 3, colors: true })

global.dump = function() {
  if (arguments.length === 0) {
    return
  }
  console.log(`${chalk.gray.bgCyan('[dump]')}@${chalk.blue.underline(moment().format())} (◔⊖◔)つ:`, inspect(arguments))
}

