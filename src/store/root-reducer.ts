import { combineReducers } from '@reduxjs/toolkit'

import { loginReducer } from 'features/Login'
import { dashboardReducer } from 'features/Dashboard'

export const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer
})

export type AppState = ReturnType<typeof rootReducer>
