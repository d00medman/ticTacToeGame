'use strict'

const store = require('../store.js')


// Creates game in API
const createSuccess = (response) => {
  store.game = response.game
}

const createFailure = (error) => {}

const updateSuccess = (response) => {}

const updateFailure = (error) => {}

// Allows for display of statistics
const indexSuccess = (response) => {
  const games = response.games.length
  $('.thisMany').text(games)
}

const indexFailure = (error) => {}

const showSuccess = (response) => {}

const showFailure = (error) => {}

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
