'use strict'

const store = require('../store.js')

const createSuccess = (response) => {
  store.game = response.game
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

const indexSuccess = (response) => {
  console.log(response)
  console.log('index returned')
}

module.exports = {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  indexSuccess
}
