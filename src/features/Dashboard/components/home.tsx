import React from 'react'

import { EmptyTask } from 'components/Task'
import { StyledContentWrapper, StyledHomeContainer } from './home.styles'
import Header from './Header/header'

function Home(): React.ReactElement {
  return (
    <StyledHomeContainer>
      <Header />
      <StyledContentWrapper>
        <EmptyTask />
      </StyledContentWrapper>
      {/* <NewTask /> */}
    </StyledHomeContainer>
  )
}

export default Home
