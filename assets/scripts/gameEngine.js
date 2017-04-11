'use strict'

let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

let currentPlayer = true

// burndown code, used to manifest the board in the console
const showBoard = function () {
  console.log(board[0], board[1], board[2])
  console.log(board[3], board[4], board[5])
  console.log(board[6], board[7], board[8])
}
// end burndown

const isMoveLegal = function (space) {
  // space !== ('X' || 'O') ? return true : return false
  // I imagine the above ternary works, but it throws this problem
  if (space === ('X' || 'O')) {
    return false
  }
  return true
}

const makeMove = function () {
  // the prompt statement to right of the = is burndown
  let move = prompt('Where would you like to play (please insert a number between 1 and 9)')
  move -= 1
  const mark = (currentPlayer === true) ? 'X' : 'O'
  console.log(move)
  console.log(mark)
  if (!isMoveLegal(move)) {
    console.alert('illegal move! try again')
    makeMove()
  }
  board[move] = mark
  currentPlayer = !currentPlayer
  showBoard()
}

const isGameOver = function () {
  return null
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

showBoard()
makeMove()
