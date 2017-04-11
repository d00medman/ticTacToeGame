'use strict'

const isGameOver = require('./isGameOver')

const board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

let currentPlayer = true

// burndown code, used to manifest the board in the console
const showBoard = function () {
  console.log(board[0], board[1], board[2])
  console.log(board[3], board[4], board[5])
  console.log(board[6], board[7], board[8] + '\n')
}
// end burndown

const isMoveLegal = function (space) {
  if (board[space] === ('X' || 'O')) {
    return false
  }
  return true
}

const makeMove = function () {
  // the prompt statement to right of the = is burndown
  let move = prompt('Enter move')
  move--
  const mark = (currentPlayer === true) ? 'X' : 'O'
  const legality = isMoveLegal(move)
  if (!legality) {
    // burndown code.
    console.log('illegal move! try again')
    // burndown
    makeMove()
  } else {
    board[move] = mark
    currentPlayer = !currentPlayer
    showBoard()
  }
}

const endgame = function () {
  console.log('the game is over')
}

const playGame = function () {
  // mapBoard unnecessary in pure js implementation
  makeMove()
  if (isGameOver()) {
    endgame()
  }
  currentPlayer = !currentPlayer
}

module.exports = {
  board,
  currentPlayer,
  isMoveLegal,
  showBoard,
  makeMove
}
