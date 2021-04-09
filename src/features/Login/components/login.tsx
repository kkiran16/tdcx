import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { LinkDispatchToProps, LinkStateToProps } from '../types'
import {
  StyledLoginWrapper,
  StyledLoginHeader,
  StyledInput,
  StyledButton
} from './login-styles'

type TProps = LinkStateToProps & LinkDispatchToProps

function Login({ loading, loginSuccess, login }: TProps): React.ReactElement {
  const [id, setId] = useState<string>('')
  const [name, setName] = useState<string>('')
  const history = useHistory()

  useEffect(() => {
    if (loginSuccess) {
      history.push('/dashboard')
    }
  }, [history, loginSuccess])

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
      {!loading ? (
        <>
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
        </>
      ) : (
        'Logging In...!!!'
      )}
    </StyledLoginWrapper>
  )
}

export default Login
