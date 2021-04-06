import React from 'react'
import { StyledContainer } from './app-styles'
import './App.css'

import Navigation from './components/Navigation'

function App(): React.ReactElement {
  return (
    <StyledContainer>
      <Navigation />
    </StyledContainer>
  )
}

export default App
