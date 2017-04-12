'use strict'

const engine = require('./playGame.js')

// burndown. When events are integrated with engine, currentPlayer will be pulled from the engine
let currentPlayer = true
// burndown

const mark = function (event) {
  // burndown
  console.log('test')
  // burndown
  const whichCell = $(this).attr('data-id')
  const whichMark = (currentPlayer === true) ? 'X' : 'O'
  $('#' + whichCell).text(whichMark)
  currentPlayer = !currentPlayer
}

const reset = function (event) {
  // burndown
  console.log('test')
  // burndown
  $('.cell').text('')
}

const addHandlers = () => {
  $('.cell').on('click', mark)
  $('.reset').on('click', reset)
}

module.exports = {
  addHandlers
}
