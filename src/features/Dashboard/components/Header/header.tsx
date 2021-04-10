import React from 'react'
import { useHistory } from 'react-router'
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledIcon,
  StyledLogout
} from './header-styles'

function Header(): React.ReactElement {
  const history = useHistory()

  const handleLogout = () => {
    history.push('/')
  }

  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <StyledIcon>KK</StyledIcon>
        <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  )
}

export default Header
