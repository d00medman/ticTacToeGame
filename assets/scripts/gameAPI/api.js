'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // look at how store.user is set, then apply that principal to game
    },
    data
  })
}

const update = (data) => {
  return $.ajax({
    // I was right! this is where the error is thrown.
    url: config.apiOrigin + '/games/' + store.game.id,
    // code is correct; issue is that game is not being created in store.
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  update,
  index
}
