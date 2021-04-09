import React from 'react'
import { takeLatest, all, put, call } from 'redux-saga/effects'

import { LoginActions, LoginTypes } from './actions'
import { loginService } from '../service'

function* login({ id, name }) {
  try {
    console.log(id, name)
    const payload = {
      id,
      name
    }
    // Dummy Service Call
    const response = yield call(loginService, payload)
    console.log(response)
    if (response.ok) {
      yield put(LoginActions.loginSuccess())
    }
  } catch (e) {
    console.log(e)
  }
}

export function* loginSagas() {
  yield all([takeLatest(LoginTypes.LOGIN, login)])
}
