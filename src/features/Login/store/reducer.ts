import Immutable, { ImmutableObject } from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { LoginTypes } from './actions'

export type LoginType = {
  loginSuccess: boolean
}

export type LoginStateType = LoginType & ImmutableObject<LoginType>

export interface FunctionType {
  (state: LoginStateType): ImmutableObject<LoginType>
}

export const INITIAL_STATE: ImmutableObject<LoginType> = Immutable({
  loginSuccess: false
})

const logInSuccess: FunctionType = (state) =>
  state.merge({ loginSuccess: true })

export const loginReducer = createReducer<LoginStateType>(INITIAL_STATE, {
  [LoginTypes.LOGIN_SUCCESS]: logInSuccess
})
