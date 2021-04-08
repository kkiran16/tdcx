import React from 'react'
import {
  StyledCardContainer,
  StyledCompletedWrapper,
  StyledCompleted,
  StyledTaskCompletedHeader
} from './task-cards-styles'

function TasksCompleted() {
  return (
    <StyledCardContainer>
      <StyledCompletedWrapper>
        <StyledTaskCompletedHeader>Tasks Completed</StyledTaskCompletedHeader>
        <StyledCompleted totalTasks="/ 20">5</StyledCompleted>
      </StyledCompletedWrapper>
    </StyledCardContainer>
  )
}

export default TasksCompleted
