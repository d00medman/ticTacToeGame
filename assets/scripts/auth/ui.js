'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => {
  $('.loginAlert').text('You have signed up! Sign in to play!')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  store.user = response.user
  document.querySelector('.gameDisplay').style.visibility = 'visible'
  document.querySelector('.login-info').style.visibility = 'collapse'
  document.querySelector('footer').style.visibility = 'visible'
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (response) => {
  $('.loginAlert').text('I could have sworn I hid this form. You are one canny user.')
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  $('.logoutAlert').text('You are logged out')
  $('.loginAlert').text('Log in to play!')
  // cleanup
  const board = document.querySelector('.gameDisplay')
  board.style.visibility = 'hidden'
  const login = document.querySelector('.login-info')
  login.style.visibility = 'visible'
  // cleanup
  document.querySelector('footer').style.visibility = 'hidden'
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
