'use strict'

const store = require('../store.js')

const createSuccess = (response) => {
  console.log(response)
  console.log('game logged successfully')
}

const createFailure = (error) => {
  console.error(error)
}

const updateSuccess = (response) => {
  console.log(response)
  console.log('game updated successfully')
}

const updateFailure = (error) => {
  console.log(error)
}

module.exports = {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure
}
