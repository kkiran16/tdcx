import React from 'react'
import { TaskType } from 'Utils/app-data'
import {
  StyledCardContainer,
  StyledTaskCompletedHeader,
  StyledListWrapper,
  StyledLatestWrapper
} from './task-cards-styles'

type TProps = {
  latestTasks: Array<TaskType>
}

function TasksLatestList({ latestTasks }: TProps): React.ReactElement {
  return (
    <StyledCardContainer>
      <StyledLatestWrapper>
        <StyledTaskCompletedHeader>
          Latest Created Tasks
        </StyledTaskCompletedHeader>
        <StyledListWrapper>
          {latestTasks.map((task) => (
            <li key={task.id}>{task.taskName}</li>
          ))}
        </StyledListWrapper>
      </StyledLatestWrapper>
    </StyledCardContainer>
  )
}

export default TasksLatestList
