'use strict'

const request = require('supertest')
const debug = require('debug')('slettest')

module.exports = (app) => {
  return request(app.run())
}
