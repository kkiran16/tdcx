import { createSelector, createStructuredSelector } from 'reselect'
import { AppState } from 'store/root-reducer'
import { TaskType } from 'Utils/app-data'

import { LinkDashboardStateToProps } from '../types'

const tasksList = ({ dashboard }: AppState) => dashboard.getIn(['tasks'], [])

const completedCOunt = createSelector([tasksList], (list: Array<TaskType>) =>
  list.reduce(
    (total, item) => (item.taskStatus === 'Completed' ? total + 1 : total),
    0
  )
)

export default createStructuredSelector<AppState, LinkDashboardStateToProps>({
  tasksList,
  completedCOunt
})
