import { pipe } from 'ramda'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Dashboard from './dashboard'
import mapStateToProps from './dashboard-selector'
import { LinkDashboardDispatchToProps } from '../types'
import { DashboardActions } from '../store'

const mapDispatchToProps = (
  dispatch: Dispatch
): LinkDashboardDispatchToProps => ({
  fetchTasksList: () => dispatch(DashboardActions.fetchTasksList())
})

export default pipe(connect(mapStateToProps, mapDispatchToProps))(Dashboard)
