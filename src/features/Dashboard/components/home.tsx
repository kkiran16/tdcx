import React, { useEffect } from 'react'

import { EmptyTask, NewTask } from 'components/Task'
import { StyledContentWrapper, StyledHomeContainer } from './home.styles'
import Header from './Header/header'
import Dashboard from './dashboard'
import { LinkDispatchToProps, LinkStateToProps } from '../types'

type TProps = LinkStateToProps & LinkDispatchToProps

function Home({
  loading,
  tasksList,
  fetchTasksList
}: TProps): React.ReactElement {
  useEffect(() => {
    fetchTasksList()
  }, [fetchTasksList])

  return (
    <StyledHomeContainer>
      <Header />
      <StyledContentWrapper>
        {tasksList.length > 0 ? <Dashboard /> : <EmptyTask />}
      </StyledContentWrapper>
    </StyledHomeContainer>
  )
}

export default Home
