'use strict'

const store = require('../store.js')

const createSuccess = (response) => {
  console.log(response)
  console.log('game logged successfully')
}

const createFailure = (error) => {
  console.error(error)
}

module.exports = {
  createSuccess,
  createFailure
}
