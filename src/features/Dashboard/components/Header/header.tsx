import React from 'react'
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledIcon,
  StyledLogout
} from './header-styles'

function Header(): React.ReactElement {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <StyledIcon>KK</StyledIcon>
        <StyledLogout>Logout</StyledLogout>
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  )
}

export default Header
