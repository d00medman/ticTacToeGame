'use strict'

// access to store necessary in order to access user email for data parsing
const store = require('./store.js')
const api = require('./gameAPI/api')
const ui = require('./gameAPI/ui')

// possibly burndown, depending on how I move forward w/ implementation of index
const getFormFields = require(`../../lib/get-form-fields`)
// burndown?

// game board -> concerned this implementation will not properly interface w/API. May need to remove numbers.
let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// scoreboard variables
let games = 0
let winsX = 0
let winsO = 0
let draws = 0

// used to track how many moves have been made
let moves = 0

// Current player. X is linked to true, O is linked to false
let currentPlayer = true

// checks for legality of given move
const isMoveLegal = function (space) {
  if (board[space] === 'X' || board[space] === 'O') {
    return false
  }
  return true
}

// returns value of clicked cell for makeMove
const getTargetCell = function (event) {
  const targetCell = $(event.target).attr('data-id')
  return targetCell
}

// mutates the board in makeMove once a move is confirmed legal
const markDisplay = function (event) {
  const whichCell = $(event.target).attr('data-id')
  const whichMark = (currentPlayer === true) ? 'X' : 'O'
  $('#' + whichCell).text(whichMark)
  return whichCell
}

// a series of victory checks. They are ugly and verbose, but the logic is clearer to me this way
const horizontalVictory = function () {
  if ((board[0] === board[1]) && (board[1] === board[2])) {
    return true
  } else if ((board[3] === board[4]) && (board[4] === board[5])) {
    return true
  } else if ((board[6] === board[7]) && (board[7] === board[8])) {
    return true
  }
  return false
}

const verticalVictory = function () {
  if ((board[0] === board[3]) && (board[3] === board[6])) {
    return true
  } else if ((board[1] === board[4]) && (board[4] === board[7])) {
    return true
  } else if ((board[2] === board[5]) && (board[5] === board[8])) {
    return true
  }
  return false
}

const diagonalVictory = function () {
  if ((board[0] === board[4]) && (board[4] === board[8])) {
    return true
  } else if ((board[2] === board[4]) && (board[4] === board[6])) {
    return true
  }
  return false
}

// a function which runs the three victory check functions to determine whether or not the game is over.
const isGameWon = function () {
  if (verticalVictory()) {
    return true
  } else if (horizontalVictory()) {
    return true
  } else if (diagonalVictory()) {
    return true
  }
  return false
}

// a function used to determine whether the game is tied. Only fires when entire board is filled. A stretch goal would be having this function fire when any chance of victory has been precluded
const isGameTied = function () {
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== 'X' && board[i] !== 'O') {
      return false
    }
  }
  return true
}

// checks whether the game has over using the victory and tie checks.
const isGameOver = function () {
  if (isGameWon()) {
    return true
  } else if (isGameTied()) {
    return true
  }
  return false
}

// resets the board. Linked to the reset button. Also gets called in the endgame function.
const reset = function (event) {
  $('.cell').text('')
  currentPlayer = true
  board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  moves = 0
}

// Displays the results of the game, appends the scoreboard and resets the game.
const endgame = function () {
  $('.alert').text('The game is over.')
  if (isGameWon()) {
    const winner = (currentPlayer === true) ? 'O' : 'X' // note on this: because of the way that move switches turn, it will be the losers turn when a winner is declared, necessitating this statement
    winner === 'X' ? winsX++ : winsO++
    $('.alert2').text('The winner is ' + winner + '!') // This persists into next game: should be fixed
  } else {
    draws++
    $('.alert').text('Tie Game.')
  }
  games++
  $('.games').text(games)
  $('.draws').text(draws)
  $('.winsX').text(winsX)
  $('.winsO').text(winsO)
  reset()
}

// used to determine the games data to be passed through the create method (and possibly the patch method as well, depending on its requirements)
const createData = function () {
  return {
    id: games,
    cells: board,
    over: isGameOver(),
    player_x: {
      id: games,
      email: store.user.id
    },
    player_o: {
      id: games,
      email: store.user.id
    }
  }
}

const updateData = function (ind, val) {
  return {
    game: {
      cell: {
        index: ind,
        value: val
      },
      over: isGameOver()
    }
  }
}

const makeMove = function (event) {
  let move = getTargetCell(event)
  move = parseInt(move)
  const mark = (currentPlayer === true) ? 'X' : 'O'
  const alertMark = (currentPlayer !== true) ? 'X' : 'O'
  $('.alert').text('It is ' + alertMark + "'s turn.")
  const legality = isMoveLegal(move)
  if (!legality) {
    $('.alert').text('illegal move, try again.')
  } else {
    markDisplay(event)
    board[move] = mark
    // Updates the API with the current move. If it is the first move, it creates the game. Otherwise, it simply updates the board.
    if (moves === 0) {
      api.create(createData())
      .then(ui.createSuccess)
      .then(ui.createFailure)
    } else {
      // throwing a 400 error.
      api.update(updateData(move, mark))
      .then(ui.updateSuccess)
      .then(ui.updateFailure)
    }
    currentPlayer = !currentPlayer
    moves++
  }
  if (isGameOver() === true) {
    endgame()
  }
}

const playGame = function () {
  let endCon = false
  while (endCon === false) {
    makeMove() // I am almost certain that this method is now fubar because of fundamental changes made to the make move function. Couple this with a less temporally bounded game implementation and I think it is entirely possible that makeMove is now the core functionality of this game.
    if (isGameOver() === true) {
      endCon = !endCon
    }
  }
  endgame()
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexError)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  if (game.id.length !== 0) {
    api.show(game.id)
      .then(ui.onSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a game id!')
  }
}

const addHandlers = () => {
  $('.cell').on('click', makeMove)
  $('.index').on('click', onIndex)
  $('.singleIndex').on('submit', onGetGame)
}

module.exports = {
  playGame,
  addHandlers
}
