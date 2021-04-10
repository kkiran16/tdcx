import { DashboardActions } from 'features/Dashboard/store'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  NewTaskWrapper,
  StyledNewTaskHeader,
  StyledAddIcon,
  StyledInput,
  StyledNewButton
} from './task-styles'

export function NewTask(): React.ReactElement {
  const [name, setName] = useState<string>('')
  const dispatch = useDispatch()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleAddTask = () => {
    dispatch(DashboardActions.addTask(name))
    setName('')
  }

  return (
    <NewTaskWrapper>
      <StyledNewTaskHeader>
        <StyledAddIcon /> New Task
      </StyledNewTaskHeader>
      <StyledInput
        value={name}
        placeholder="Task Name"
        onChange={handleNameChange}
      />
      <StyledNewButton onClick={handleAddTask}>
        <StyledAddIcon />
        New Task
      </StyledNewButton>
    </NewTaskWrapper>
  )
}
