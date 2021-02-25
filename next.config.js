const {getENVPath} = require('./server/common/helpers')
const env = require('dotenv').config({path: getENVPath()}).parsed
const webpack = require('webpack')
const {i18n} = require('./next-i18next.config')

module.exports = {
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    const envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next])
      return prev
    }, {})
    config.plugins.push(new webpack.DefinePlugin(envKeys))
    return config
  }
}
