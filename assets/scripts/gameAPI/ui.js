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
  console.error(error)
}

const indexSuccess = (response) => {
  console.log(response)
  console.log('index returned')
  $('.statLine').text('Here are the games you have played')
  $('.indexStats').text(response) // does not work. Need to find a way to render the game list in a readable fashion
}

const indexFailure = (error) => {
  console.error(error)
}

const showSuccess = (response) => {
  console.log(response)
  console.log('Single game returned')
}

const showFailure = (error) => {
  console.error(error)
}

module.exports = {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  indexSuccess,
  indexFailure,
  showSuccess,
  showFailure
}
