'use strict'

// game board
let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// scoreboard variables
let games = 0
let gamesWonX = 0
let gamesWonO = 0
let draws = 0

// Current player. X is linked to true, O is linked to false
let currentPlayer = true

// burndown code, used to manifest the board in the console
const showBoard = function () {
  console.log(board[0], board[1], board[2])
  console.log(board[3], board[4], board[5])
  console.log(board[6], board[7], board[8] + '\n')
}
// burndown

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
}

// Displays the results of the game, appends the scoreboard and resets the game.
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

const makeMove = function (event) {
  let move = getTargetCell(event)
  move = parseInt(move)
  const mark = (currentPlayer === true) ? 'X' : 'O'
  const legality = isMoveLegal(move)
  if (!legality) {
    // burndown code.
    console.log('illegal move! try again' + '\n')
    // burndown
  } else {
    markDisplay(event)
    board[move] = mark
    currentPlayer = !currentPlayer
    // burndown
    console.log('~~~~~')
    showBoard()
    // burndown
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

const addHandlers = () => {
  $('.cell').on('click', makeMove)
  $('.reset').on('click', reset)
}

module.exports = {
  playGame,
  addHandlers
}
