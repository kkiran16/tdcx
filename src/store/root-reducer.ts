import { combineReducers } from '@reduxjs/toolkit'

import { loginReducer } from 'features/Login'

export const rootReducer = combineReducers({
  login: loginReducer
})

export type AppState = ReturnType<typeof rootReducer>
