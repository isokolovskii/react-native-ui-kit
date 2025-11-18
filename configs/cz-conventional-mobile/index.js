const configLoader = require('commitizen').configLoader

const adapter = require('./src/adapter')
const conventionalCommitTypes = require('./src/types')

const config = configLoader.load() || {}

const options = {
  types: config.types || conventionalCommitTypes.types,
  maxHeaderWidth:
    (process.env.CZ_MAX_HEADER_WIDTH &&
      parseInt(process.env.CZ_MAX_HEADER_WIDTH)) ||
    config.maxHeaderWidth ||
    100,
  maxLineWidth:
    (process.env.CZ_MAX_LINE_WIDTH &&
      parseInt(process.env.CZ_MAX_LINE_WIDTH)) ||
    config.maxLineWidth ||
    100,
}

module.exports = adapter(options)
