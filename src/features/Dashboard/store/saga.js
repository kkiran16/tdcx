import React from 'react'
import { takeLatest, all, put, call } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'
import { TaskType } from '../../../Utils/app-data'
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

function* addTask({ name }) {
  try {
    // console.log(name)
    const payload = {
      id: uuidv4(),
      taskName: name,
      taskStatus: 'Pending'
    }
    const serviceObj = new DashboardService()
    const response = yield call(serviceObj.addTask, payload)
    if (response.ok) {
      yield put(DashboardActions.updateTasksList(response.data))
    }
  } catch (e) {
    console.log(e)
  }
}

function* changeStatus({ id, status }) {
  try {
    const payload = {
      id,
      status
    }
    const serviceObj = new DashboardService()
    const response = yield call(serviceObj.updateTask, payload)
    if (response.ok) {
      yield put(DashboardActions.updateTasksList(response.data))
    }
  } catch (error) {
    console.log(error)
  }
}

function* deleteTask({ id }) {
  try {
    const payload = {
      id
    }
    const serviceObj = new DashboardService()
    const response = yield call(serviceObj.deleteTask, payload)
    if (response.ok) {
      yield put(DashboardActions.updateTasksList(response.data))
    }
  } catch (error) {
    console.log(error)
  }
}

export function* dashboardSagas() {
  yield all([
    takeLatest(DashboardTypes.FETCH_TASKS_LIST, fetchTasksList),
    takeLatest(DashboardTypes.ADD_TASK, addTask),
    takeLatest(DashboardTypes.CHANGE_STATUS, changeStatus),
    takeLatest(DashboardTypes.DELETE_TASK, deleteTask)
  ])
}
