/* eslint-disable react/prop-types */
import React from 'react'
import {
  StyledCardContainer,
  StyledCompletedWrapper,
  StyledCompleted,
  StyledTaskCompletedHeader
} from './task-cards-styles'

/* type TProps = {
  completedCount: number
} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function TasksCompleted({ completedCount, totalCount }) {
  return (
    <StyledCardContainer>
      <StyledCompletedWrapper>
        <StyledTaskCompletedHeader>Tasks Completed</StyledTaskCompletedHeader>
        <StyledCompleted totalTasks={`/ ${totalCount}`}>
          {completedCount}
        </StyledCompleted>
      </StyledCompletedWrapper>
    </StyledCardContainer>
  )
}

export default TasksCompleted
