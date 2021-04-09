import { createStructuredSelector } from 'reselect'
import { AppState } from 'store/root-reducer'
import { LinkStateToProps } from '../types'

const loginSuccess = ({ login }: AppState) =>
  login.getIn(['loginSuccess'], false)

export default createStructuredSelector<AppState, LinkStateToProps>({
  loginSuccess
})
