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

type TProps = {
  handleModalClose: () => void
}
export function NewTask({ handleModalClose }: TProps): React.ReactElement {
  const [name, setName] = useState<string>('')
  const dispatch = useDispatch()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleAddTask = () => {
    dispatch(DashboardActions.addTask(name))
    setName('')
    handleModalClose()
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
