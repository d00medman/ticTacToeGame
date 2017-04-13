'use strict'

// I have the distinct feeling that this file is going to end up integrated with the game engine.

const api = require('./api')
const ui = require('./ui')
const engine = require('../playGame')

const parseData = function () { // maybe the data parser can be fired in different ways depending on what it is passed?
  // a function designed to return a variable which can be used as data for the AJAX call
  // not sure if i'm going to need to build new data parse functions for each of the four methods.
  // ultimately, that is going to depend on what I need each of them to return

  // working on create: data is a single game object, meaning that the data parsing must return the game
  // game = {}
  // id = whatever game number this is
  // cells = current board state
  // over = isGameOver()

  // here is the tricky part, there is both a player_x and a player_o property. Whichever one this method is called on is created as an object with an id (not sure how this is determined) and an email (which i am uncertain of how to draw, but I imagine I can find some reference in the auth methods). The other is set to null.

  // if (currentPlayer === true) {
  //  player_x = {
  //    id = ? not sure how the ID will be derived tbh. Maybe just have it equal to the game.
  //    email = will need to pull the email. Can probably be pulled from wherever it is stored during auth events
  //  },
  //  player_o = null
  // else vice versa

  // return game

  // I am almost certain that the AJAX request handles the parsing of the object it is passed for me.

  // hmmm I think that parseData will need to live in the game engine, as the object it is creating is heavily reliant on data drawn from variables which exist in the engine.
}

const onCreate = function () {
  // need to figure out what I pass to the api method as data
  const data = null
  api.create(data)
    .then(ui.createSuccess)
}
