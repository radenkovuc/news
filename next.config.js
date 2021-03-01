const {i18n} = require('./next-i18next.config')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv({publicPrefix: 'PUBLIC_'})

module.exports = withNextEnv({
  i18n
})
