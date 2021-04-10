import { DashboardActions } from 'features/Dashboard/store'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TaskType } from 'Utils/app-data'
import {
  ListItemContainer,
  StyledCheckbox,
  StyledDelete,
  StyledEdit,
  StyledItemName
} from './tasks-list-styles'

type TProps = {
  task: TaskType
}

function ListItem({ task }: TProps): React.ReactElement {
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch()

  const handleStatusChange = () => {
    const sendStatus = !status ? 'Completed' : 'Pending'
    dispatch(DashboardActions.changeStatus(task.id, sendStatus))
    setStatus(!status)
  }
  return (
    <ListItemContainer>
      <StyledCheckbox
        type="checkbox"
        checked={status}
        onChange={handleStatusChange}
      />
      <StyledItemName className={status ? 'strike' : 'non-strike'}>
        {task.taskName}
      </StyledItemName>
      <StyledEdit />
      <StyledDelete />
    </ListItemContainer>
  )
}

export default ListItem
