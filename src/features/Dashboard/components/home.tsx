import React from 'react'

import { EmptyTask, NewTask } from 'components/Task'
import { StyledContentWrapper, StyledHomeContainer } from './home.styles'
import Header from './Header/header'
import Dashboard from './dashboard'

function Home(): React.ReactElement {
  return (
    <StyledHomeContainer>
      <Header />
      <StyledContentWrapper>
        {/* <EmptyTask /> */}
        {/* <NewTask /> */}
        <Dashboard />
      </StyledContentWrapper>
      {/* <NewTask /> */}
    </StyledHomeContainer>
  )
}

export default Home
