import React from 'react'
import {
  StyledLoginWrapper,
  StyledLoginHeader,
  StyledInput,
  StyledButton
} from './login-styles'

function Login(): React.ReactElement {
  return (
    <StyledLoginWrapper>
      <StyledLoginHeader>Login</StyledLoginHeader>
      <StyledInput type="textfield" placeholder="id" />
      <StyledInput type="textfield" placeholder="Name" />
      <StyledButton type="button">Login</StyledButton>
    </StyledLoginWrapper>
  )
}

export default Login
