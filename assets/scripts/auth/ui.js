'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => {
  console.log(response)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  console.log(response)
  console.log('you are signed in')
  store.user = response.user
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (response) => {
  console.log('password changed')
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  console.log('signed out')
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
