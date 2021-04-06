import React from 'react'
import styled from 'styled-components/macro'
import Add from '@material-ui/icons/Add'

export const EmptyTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  width: 80vh;
  max-width: 300px;
  padding: 24px;
  margin: 0 1em;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;
`

export const StyledEmptyDesc = styled.div`
  font-size: 1.25rem;
  color: #537178;
`

export const StyledNewButton = styled.button`
  padding: 11px 22px;
  color: #ffffff;
  background: #5285ec 0% 0% no-repeat padding-box;
  border-radius: 8px;
  border: 0;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0 none;
  }
`

export const StyledAddIcon = styled(Add)`
  font-size: 1rem !important;
`
export const NewTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1.25rem; */
  width: 80vh;
  max-width: 300px;
  padding: 24px;
  margin: 0 1em;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;
`
export const StyledNewTaskHeader = styled.div`
  color: #537178;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`
export const StyledInput = styled.input`
  margin-bottom: 0.75rem;
  height: 40px;
  font-size: 1rem;
  padding-left: 10px;
  background-color: #eef1f8;
  outline: 0 none;
  border: 0;
  border-radius: 8px;
`
