import { createStructuredSelector } from 'reselect'
import { AppState } from 'store/root-reducer'
import { LinkStateToProps } from '../types'

const loginSuccess = ({ login }: AppState) =>
  login.getIn(['loginSuccess'], false)

const loading = ({ login }: AppState) => login.getIn(['loading'], false)

export default createStructuredSelector<AppState, LinkStateToProps>({
  loading,
  loginSuccess
})
