import { all, fork } from 'redux-saga/effects'

import { loginSagas } from '../features/Login'

export default function* root() {
  yield all([fork(loginSagas)])
}
