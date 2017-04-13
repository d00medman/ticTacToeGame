'use strict'

const store = require('../store.js')

const createSuccess = (response) => {
  console.log(response)
  console.log('game logged successfully')
}

module.exports = {
  createSuccess
}
