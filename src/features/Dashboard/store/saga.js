import React from 'react'
import { takeLatest, all, put, call } from 'redux-saga/effects'

import { DashboardActions, DashboardTypes } from './actions'
import DashboardService from '../service'

function* fetchTasksList() {
  try {
    const serviceObj = new DashboardService()
    // Dummy Service Call
    const response = yield call(serviceObj.getTasksList)
    if (response.ok) {
      yield put(DashboardActions.updateTasksList(response.data))
    }
  } catch (e) {
    console.log(e)
  }
}
export function* dashboardSagas() {
  yield all([takeLatest(DashboardTypes.FETCH_TASKS_LIST, fetchTasksList)])
}
