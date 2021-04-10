import React from 'react'
import {
  StyledCardsWrapper,
  StyledDashboardContainer
} from './dashboard-styles'
import TasksCompleted from './TaskCards/tasks-completed'
import TasksLatestList from './TaskCards/tasks-latest-list'
import TasksChart from './TaskCards/tasks-chart'
import TasksList from './TaskList/tasks-list'
import {
  LinkDashboardDispatchToProps,
  LinkDashboardStateToProps
} from '../types'

type TProps = LinkDashboardStateToProps & LinkDashboardDispatchToProps

function Dashboard({ tasksList, completedCOunt }: TProps): React.ReactElement {
  return (
    <StyledDashboardContainer>
      <StyledCardsWrapper>
        <TasksCompleted
          completedCount={completedCOunt}
          totalCount={tasksList.length}
        />

        <TasksLatestList latestTasks={[...tasksList.slice(-3)].reverse()} />

        <TasksChart
          completedCount={completedCOunt}
          totalCount={tasksList.length}
        />
      </StyledCardsWrapper>
      <TasksList tasks={[...tasksList].reverse()} />
    </StyledDashboardContainer>
  )
}
export default Dashboard
