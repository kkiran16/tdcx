import { NewTask } from 'components/Task'
import { StyledAddIcon, StyledNewButton } from 'components/Task/task-styles'
import React from 'react'
import ListItem from './list-item'
import {
  TasksListContainer,
  TasksHeader,
  TasksLevel1,
  TaskSearch,
  TasksLevel2,
  StyledDivider
} from './tasks-list-styles'

function TasksList() {
  return (
    <TasksListContainer>
      <TasksLevel1>
        <TasksHeader>Tasks</TasksHeader>
        <TaskSearch type="text" placeholder="Search by task name" />
        <StyledNewButton>
          <StyledAddIcon />
          New Task
        </StyledNewButton>
      </TasksLevel1>
      <TasksLevel2>
        <ListItem />
        <StyledDivider />
        <ListItem />
      </TasksLevel2>
    </TasksListContainer>
  )
}

export default TasksList
