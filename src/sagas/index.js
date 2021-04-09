import { all, fork } from 'redux-saga/effects'

import { loginSagas } from '../features/Login'
import { dashboardSagas } from '../features/Dashboard'

export default function* root() {
  yield all([fork(loginSagas), fork(dashboardSagas)])
}
