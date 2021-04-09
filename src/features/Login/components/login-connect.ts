import { pipe } from 'ramda'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Login from './login'
import mapStateToProps from './login-selector'
import { LoginActions } from '../store'
import { LinkDispatchToProps } from '../types'

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchToProps => ({
  login: (id, name) => dispatch(LoginActions.login(id, name))
})

export default pipe(connect(mapStateToProps, mapDispatchToProps))(Login)
