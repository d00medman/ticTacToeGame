'use strict'

const store = require('../store.js')

// Displays that user has signed up successfully
const signUpSuccess = (response) => {
  $('.loginAlert').text('You have signed up! Sign in to play!')
}

// Displays users failure to sign up
const signUpFailure = (error) => {
  $('.loginAlert').text('Not a viable username.')
}

// Hides login-info section, sets the board and footer to visible on success
const signInSuccess = (response) => {
  store.user = response.user
  document.querySelector('.gameDisplay').style.visibility = 'visible'
  document.querySelector('.login-info').style.visibility = 'collapse'
  document.querySelector('footer').style.visibility = 'visible'
}

// Displays users failure to sign in
const signInFailure = (error) => {
  $('.loginAlert').text('login attempt failed.')
}

// Displays that user has successfully changed password
const changePasswordSuccess = (response) => {
  $('.logoutAlert').text('Password changed successfully.')
}

// Displays that user has failed to change password
const changePasswordFailure = (error) => {
  $('.logoutAlert').text('Original password incorrect, please input the correct one to proceed')
}

// displays that user has logged out. Sets board and footer to hidden, makes login-info visible
const signOutSuccess = (response) => {
  $('.logoutAlert').text('You are logged out')
  $('.loginAlert').text('Log in to play!')
  document.querySelector('.gameDisplay').style.visibility = 'hidden'
  document.querySelector('.login-info').style.visibility = 'visible'
  document.querySelector('footer').style.visibility = 'hidden'
}

// Makes fun of you if you fail to sign out
const signOutFailure = (error) => {
  $('.logoutAlert').text('You have somehow failed logged out')
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
