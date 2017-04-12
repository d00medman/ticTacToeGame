'use strict'

const engine = require('./playGame.js')

const mark = function (event) {
  console.log('test')
}

const addHandlers = () => {
  $('.cell').on('click', mark)
}

module.exports = {
  addHandlers
}
