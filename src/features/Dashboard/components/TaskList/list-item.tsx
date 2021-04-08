import React from 'react'
import {
  ListItemContainer,
  StyledCheckbox,
  StyledDelete,
  StyledEdit,
  StyledItemName
} from './tasks-list-styles'

function ListItem() {
  return (
    <ListItemContainer>
      <StyledCheckbox type="checkbox" />
      <StyledItemName>
        Clean the roomClean the roomClean the room
      </StyledItemName>
      {/* <div>KK</div> */}
      <StyledEdit />
      <StyledDelete />
    </ListItemContainer>
  )
}

export default ListItem
