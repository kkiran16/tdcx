import React from 'react'
import {
  NewTaskWrapper,
  StyledNewTaskHeader,
  StyledAddIcon,
  StyledInput,
  StyledNewButton
} from './task-styles'

export function NewTask(): React.ReactElement {
  return (
    <NewTaskWrapper>
      <StyledNewTaskHeader>
        <StyledAddIcon /> New Task
      </StyledNewTaskHeader>
      <StyledInput placeholder="Task Name" />
      <StyledNewButton>
        <StyledAddIcon />
        New Task
      </StyledNewButton>
    </NewTaskWrapper>
  )
}
