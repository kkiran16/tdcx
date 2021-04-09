import Immutable, { ImmutableObject } from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { LoginTypes } from './actions'

export type LoginType = {
  loading: boolean
  loginSuccess: boolean
}

export type LoginStateType = LoginType & ImmutableObject<LoginType>

export interface FunctionType {
  (state: LoginStateType): ImmutableObject<LoginType>
}

export const INITIAL_STATE: ImmutableObject<LoginType> = Immutable({
  loading: false,
  loginSuccess: false
})

const logInSuccess: FunctionType = (state) =>
  state.merge({ loginSuccess: true, loading: false })

const login: FunctionType = (state) => state.merge({ loading: true })

export const loginReducer = createReducer<LoginStateType>(INITIAL_STATE, {
  [LoginTypes.LOGIN]: login,
  [LoginTypes.LOGIN_SUCCESS]: logInSuccess
})
