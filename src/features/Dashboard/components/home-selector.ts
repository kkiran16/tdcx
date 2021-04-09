import { createStructuredSelector } from 'reselect'
import { AppState } from 'store/root-reducer'
import { LinkStateToProps } from '../types'

const tasksList = ({ dashboard }: AppState) => dashboard.getIn(['tasks'], [])

const loading = ({ dashboard }: AppState) => dashboard.getIn(['loading'], false)

export default createStructuredSelector<AppState, LinkStateToProps>({
  loading,
  tasksList
})
