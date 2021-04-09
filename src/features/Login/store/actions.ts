import { createActions } from 'reduxsauce'

/* export enum ActionTypeNames {
  LOGIN = 'LOGIN'
}

type TActionTypes = {
  [ActionTypeNames.LOGIN]: string
} */

const { Types, Creators } = createActions(
  {
    login: ['id', 'name'],
    loginSuccess: null
  },
  {
    prefix: '@LOGIN'
  }
)

export const LoginTypes = Types
export const LoginActions = Creators
