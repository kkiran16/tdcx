import React, { useState } from 'react'
import { LinkDispatchToProps, LinkStateToProps } from '../types'
import {
  StyledLoginWrapper,
  StyledLoginHeader,
  StyledInput,
  StyledButton
} from './login-styles'

type TProps = LinkStateToProps & LinkDispatchToProps

function Login({ login, loginSuccess }: TProps): React.ReactElement {
  const [id, setId] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value)
  }

  const handleLogin = () => {
    login(id, name)
  }
  return (
    <StyledLoginWrapper>
      <StyledLoginHeader>Login</StyledLoginHeader>
      <StyledInput
        type="textfield"
        placeholder="id"
        onChange={handleNameChange}
      />
      <StyledInput
        type="textfield"
        placeholder="Name"
        onChange={handleIdChange}
      />
      <StyledButton type="button" onClick={handleLogin}>
        Login
      </StyledButton>
    </StyledLoginWrapper>
  )
}

export default Login
