// a series of checks to determine whether the game is over or not.

'use strict'

// ugly and verbose, but the logic is clearer to me this way
const horizontalVictory = function () {
  if (board[0] === board[1] === board[2]) {
    return true
  } else if (board[3] === board[4] === board[5]) {
    return true
  } else if (board[6] === board[7] === board[8]) {
    return true
  }
  return false
}

const verticalVictory = function () {
  if (board[1] === board[4] === board[7]) {
    return true
  } else if (board[1] === board[4] === board[7]) {
    return true
  } else if (board[2] === board[5] === board[8]) {
    return true
  }
  return false
}

const diagonalVictory = function () {
  if (board[0] === board[4] === board[8]) {
    return true
  } else if (board[2] === board[4] === board[8]) {
    return true
  }
  return false
}

const isGameWon = function () {
  if (verticalVictory(board)) {
    return true
  } else if (horizontalVictory(board)) {
    return true
  } else if (diagonalVictory(board)) {
    return true
  }
  return false
}

// uncertainties on how to iterate through nested arrays forced me to fall back to a simple series of nested for loops. Another piece of code I hope to clean up when I have more time
const isGameTied = function () {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === undefined) {
        return false
      }
    }
  }
  return true
}

// this method is fairly simple, will return a boolean determining whether the game is over to whatever method handles the victory screen.
const isGameOver = function () {
  return isGameWon(board) || isGameTied(board)
}

module.exports = {
  isGameOver
}
