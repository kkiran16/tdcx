import React from 'react'
import {
  StyledCardsWrapper,
  StyledDashboardContainer
} from './dashboard-styles'
import TasksCompleted from './TaskCards/tasks-completed'
import TasksLatestList from './TaskCards/tasks-latest-list'
import TasksChart from './TaskCards/tasks-chart'
import TasksList from './TaskList/tasks-list'

function Dashboard(): React.ReactElement {
  return (
    <StyledDashboardContainer>
      <StyledCardsWrapper>
        <TasksCompleted />
        <TasksLatestList />
        <TasksChart />
        <TasksList />
      </StyledCardsWrapper>
    </StyledDashboardContainer>
  )
}
export default Dashboard
