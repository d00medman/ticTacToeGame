'use strict'

// the numbers are burndown, used to determine where a new mark is placed
let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// burndown

let games = 0
let gamesWonX = 0
let gamesWonO = 0
let draws = 0

let currentPlayer = true

// burndown code, used to manifest the board in the console
const showBoard = function () {
  console.log(board[0], board[1], board[2])
  console.log(board[3], board[4], board[5])
  console.log(board[6], board[7], board[8] + '\n')
}
// burndown

// There is some wierd shit here.
const isMoveLegal = function (space) {
  if (board[space] === 'X' || board[space] === 'O') {
    return false
  }
  return true
}

const makeMove = function () {
  // burndown, as move will be drawn from the dom
  let move = prompt('Enter move')
  move--
  const mark = (currentPlayer === true) ? 'X' : 'O'
  const legality = isMoveLegal(move)
  if (!legality) {
    // burndown code.
    console.log('illegal move! try again' + '\n')
    // burndown
    makeMove()
  } else {
    // not quite burndown, but will almost certainly need to be altered, as i will not be returning a clean number
    board[move] = mark
    currentPlayer = !currentPlayer
    // burndown
    console.log('----')
    // burndown
    showBoard()
  }
}
// ugly and verbose, but the logic is clearer to me this way
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

// uncertainties on how to iterate through nested arrays forced me to fall back to a simple series of nested for loops. Another piece of code I hope to clean up when I have more time
const isGameTied = function () {
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== 'X' && board[i] !== 'O') {
      return false
    }
  }
  return true
}

// this method is fairly simple, will return a boolean determining whether the game is over to whatever method handles the victory screen.
const isGameOver = function () {
  if (isGameWon()) {
    return true
  } else if (isGameTied()) {
    return true
  }
  return false
}

const reset = function () {
  board = board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  currentPlayer = true
}

const endgame = function () {
  // burndown
  console.log('the game is over')
  // burndown
  if (isGameWon()) {
    const winner = (currentPlayer === true) ? 'O' : 'X' // note on this: because of the way that move switches turn, it will be the losers turn when a winner is declared, necessitating this statement
    winner === 'X' ? gamesWonX++ : gamesWonO++
    // burndown
    console.log('The winner is ' + winner)
    // burndown
  } else {
    // burndown
    draws++
    console.log('tie game')
    // burndown
  }
  games++
  // burndown
  console.log('You have played ' + games + ' games.')
  console.log(draws + ' of them have been draws.')
  console.log('X has won ' + gamesWonX + ' times, O has won ' + gamesWonO + ' times.')
  // burndown
  reset()
}

const playGame = function () {
  let endCon = false
  while (endCon === false) {
    makeMove()
    if (isGameOver() === true) {
      endCon = !endCon
    }
  }
  endgame()
}

module.exports = {
  playGame
}
