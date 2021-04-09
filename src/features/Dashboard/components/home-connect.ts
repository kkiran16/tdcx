import { pipe } from 'ramda'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Home from './home'
import mapStateToProps from './home-selector'
import { DashboardActions } from '../store'
import { LinkDispatchToProps } from '../types'

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchToProps => ({
  fetchTasksList: () => dispatch(DashboardActions.fetchTasksList())
})

export default pipe(connect(mapStateToProps, mapDispatchToProps))(Home)
