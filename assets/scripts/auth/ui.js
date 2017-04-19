'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => {
  $('.loginAlert').text('You have signed up! Sign in to play!')
  // document.querySelector('#change-password').style.visibility = 'visible'
}

const signUpFailure = (error) => {
  $('.loginAlert').text('Not a viable username.')
  // console.error(error)
}

const signInSuccess = (response) => {
  store.user = response.user
  document.querySelector('.gameDisplay').style.visibility = 'visible'
  document.querySelector('.login-info').style.visibility = 'collapse'
  document.querySelector('footer').style.visibility = 'visible'
  // document.querySelector('#change-password').style.visibility = 'visible'
}

const signInFailure = (error) => {
  $('.loginAlert').text('login attempt failed.')
  // console.error(error)
}

const changePasswordSuccess = (response) => {
  $('.logoutAlert').text('Password changed successfully.')
}

const changePasswordFailure = (error) => {
  $('.logoutAlert').text('Original password incorrect, please input the correct one to proceed')
  // console.error(error)
}

const signOutSuccess = (response) => {
  $('.logoutAlert').text('You are logged out')
  $('.loginAlert').text('Log in to play!')
  document.querySelector('.gameDisplay').style.visibility = 'hidden'
  document.querySelector('.login-info').style.visibility = 'visible'
  document.querySelector('footer').style.visibility = 'hidden'
}

const signOutFailure = (error) => {
  $('.logoutAlert').text('You have somehow failed logged out')
  //console.error(error)
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
