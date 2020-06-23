const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n')
const {getENVPath} = require('./server/common/helpers')
const env = require('dotenv').config({path: getENVPath()}).parsed
const app = next({dev: process.env.DEVMODE === 'true'})
const handle = app.getRequestHandler()

;(async () => {
  await app.prepare()
  const server = express()

  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  // Start Express server.
  server.listen(env.PORT, () => {
    console.log(`ENVIRONMENT: ${env.NAME}, PORT: ${env.PORT}`) // eslint-disable-line no-console
  })
})()
