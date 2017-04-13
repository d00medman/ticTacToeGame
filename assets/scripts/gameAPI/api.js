'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = (data) => {
  return $.ajax({
    // there could be an error here as I am not entirely sure where the game is being stored and how to retrieve the game's id.
    url: config.apiOrigin + '/games/' + store.game.id,
    // sketchy code
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  create,
  update
}
