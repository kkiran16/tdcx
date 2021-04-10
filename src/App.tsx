import React, { createContext } from 'react'
import { Provider } from 'react-redux'

import { StyledContainer } from './app-styles'
import './App.css'

import { store } from './store'
import Navigation from './components/Navigation'

import AppData from './Utils/app-data'

// Need to re-visit this line
export const appData = new (AppData as any)()

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <StyledContainer>
        <Navigation />
      </StyledContainer>
    </Provider>
  )
}

export default App
