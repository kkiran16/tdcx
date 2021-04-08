import React from 'react'
import {
  StyledCardContainer,
  StyledTaskCompletedHeader,
  StyledListWrapper,
  StyledLatestWrapper
} from './task-cards-styles'

function TasksLatestList(): React.ReactElement {
  return (
    <StyledCardContainer>
      <StyledLatestWrapper>
        <StyledTaskCompletedHeader>
          Latest Created Tasks
        </StyledTaskCompletedHeader>
        <StyledListWrapper>
          <li>Clean the room</li>
          <li>Buy Vegetables</li>
          <li>Reinstall</li>
        </StyledListWrapper>
      </StyledLatestWrapper>
    </StyledCardContainer>
  )
}

export default TasksLatestList
