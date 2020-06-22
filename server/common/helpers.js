/**
 * Server helper functions
 */

const fs = require('fs')
const path = require('path')

/**
 * getENVPath - Helper function to get .env file path depending on NODE_ENV varivable
 * @param {string} name - Env name
 * @param {string} defaultENV - default value is .env.default
 * @param {string} rootPath - Root path to read file from
 */
function getENVPath(name = process.env.NODE_ENV, defaultENV = '.env.default', rootPath = './') {
  if (typeof name !== 'string' || !name.length) {
    return defaultENV
  }
  const filepath = path.normalize(`${rootPath}.env.${name}`)
  if (fs.existsSync(filepath)) {
    return filepath
  }
  return defaultENV
}

module.exports = {
  getENVPath
}
