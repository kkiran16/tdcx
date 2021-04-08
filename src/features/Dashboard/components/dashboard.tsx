import React from 'react'
import {
  StyledCardsWrapper,
  StyledDashboardContainer
} from './dashboard-styles'
import TasksCompleted from './TaskCards/tasks-completed'

function Dashboard(): React.ReactElement {
  return (
    <StyledDashboardContainer>
      <StyledCardsWrapper>
        <TasksCompleted />
        <TasksCompleted />
        <TasksCompleted />
      </StyledCardsWrapper>
    </StyledDashboardContainer>
  )
}
export default Dashboard
