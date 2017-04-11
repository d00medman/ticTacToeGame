'use strict'

const isGameOver = require('./isGameOver')

let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

let currentPlayer = true

let move

// burndown code, used to manifest the board in the console
const showBoard = function () {
  console.log(board[0], board[1], board[2])
  console.log(board[3], board[4], board[5])
  console.log(board[6], board[7], board[8])
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
  move -= 1
  const mark = (currentPlayer === true) ? 'X' : 'O'
  const legality = isMoveLegal(move)
  // console.log('your move is: ' + move)
  // console.log('your mark is ' + mark)
  // console.log('Is this move legal? ' + legality)
  if (!legality) {
    console.log('illegal move! try again')
    makeMove()
  } else {
    board[move] = mark
    currentPlayer = !currentPlayer
    showBoard()
  }
}

const endgame = function () {
  return null
}

const playGame = function () {
  // mapBoard unnecessary in pure js implementation
  makeMove()
  if (isGameOver()) {
    return endgame()
  }
  currentPlayer = !currentPlayer
}
