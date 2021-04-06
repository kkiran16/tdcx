import React from 'react'
import Add from '@material-ui/icons/Add'
import {
  EmptyTaskWrapper,
  StyledAddIcon,
  StyledEmptyDesc,
  StyledNewButton
} from './task-styles'

export function EmptyTask(): React.ReactElement {
  return (
    <EmptyTaskWrapper>
      <StyledEmptyDesc>You have no task.</StyledEmptyDesc>
      <StyledNewButton>
        <StyledAddIcon />
        New Task
      </StyledNewButton>
    </EmptyTaskWrapper>
  )
}
