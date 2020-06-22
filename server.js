const express = require('express')
const next = require('next')
const {getENVPath} = require('./server/common/helpers')
const env = require('dotenv').config({path: getENVPath()}).parsed
const app = next({dev: process.env.DEVMODE === 'true'})
const handle = app.getRequestHandler()

;(async () => {
  await app.prepare()
  const server = express()
  server.get('*', (req, res) => handle(req, res))

  // Start Express server.
  server.listen(env.PORT, () => {
    console.log(`ENVIRONMENT: ${env.NAME}, PORT: ${env.PORT}`) // eslint-disable-line no-console
  })
})()
