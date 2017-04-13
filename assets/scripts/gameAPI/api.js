'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    data
  })
}

module.exports = {
  create
}
