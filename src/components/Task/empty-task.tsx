import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import {
  EmptyTaskWrapper,
  StyledAddIcon,
  StyledEmptyDesc,
  StyledNewButton
} from './task-styles'

type TProps = {
  handleNewTask: () => void
}
export function EmptyTask({ handleNewTask }: TProps): React.ReactElement {
  return (
    <EmptyTaskWrapper>
      <StyledEmptyDesc>You have no task.</StyledEmptyDesc>
      <StyledNewButton onClick={handleNewTask}>
        <StyledAddIcon />
        New Task
      </StyledNewButton>
    </EmptyTaskWrapper>
  )
}
