import React from 'react'
import styled from 'styled-components/macro'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

export const TasksListContainer = styled.div`
  padding: 30px 0 16px;
  width: 320px;
  max-width: 320px;
`

export const TasksLevel1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 15px;
`

export const TasksHeader = styled.div`
  align-self: center;
  font-size: 1.25rem;
  color: #537178;
`

export const TaskSearch = styled.input`
  border-radius: 8px;
  border: 0;
  background: #d9dfeb;
  padding: 15px;
  font-size: 0.85rem;
`
export const TasksLevel2 = styled.div`
  margin-top: 16px;
  background-color: #fff;
`

export const ListItemContainer = styled.div`
  display: flex;
  padding: 24px 16px;
  /* align-items: center; */
  gap: 5px;
`
export const StyledCheckbox = styled.input`
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  margin-top: 2px;
`

export const StyledItemName = styled.div`
  font-size: 1.25rem;
  color: #5285ec;
  flex-grow: 1;
`

export const StyledEdit = styled(Edit)`
  cursor: pointer;
  color: #647278;
`

export const StyledDelete = styled(Delete)`
  cursor: pointer;
  color: #647278;
`
export const StyledDivider = styled.hr`
  margin-left: 16px;
  border: none;
  height: 2px;
  background: #e8e8e8;
`
