'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => {
  // burndown
  console.log(response)
  // burndown
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  // burndown
  console.log(response)
  console.log('you are signed in')
  store.user = response.user
  // burndown
  // lets see if this works.
  const board = document.querySelector('.gameDisplay')
  board.style.visibility = 'visible'
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (response) => {
  // burndown
  console.log('password changed')
  // burndown
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  // burndown
  console.log('signed out')
  // burndown
  const board = document.querySelector('.gameDisplay')
  board.style.visibility = 'hidden'
}

const signOutFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
