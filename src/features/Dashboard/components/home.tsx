import React, { useEffect, useState } from 'react'

import { EmptyTask, NewTask } from 'components/Task'
import { StyledContentWrapper, StyledHomeContainer } from './home.styles'
import Header from './Header/header'
import Dashboard from './dashboard-connect'
import { LinkDispatchToProps, LinkStateToProps } from '../types'

type TProps = LinkStateToProps & LinkDispatchToProps

function Home({
  loading,
  tasksList,
  fetchTasksList
}: TProps): React.ReactElement {
  const [showNewTask, setShowNewTask] = useState<boolean>(false)
  useEffect(() => {
    fetchTasksList()
  }, [fetchTasksList])

  const handleNewTask = () => {
    setShowNewTask(true)
  }

  return (
    <StyledHomeContainer>
      <Header />
      <StyledContentWrapper>
        {tasksList.length > 0 ? (
          <Dashboard />
        ) : (
          !showNewTask && <EmptyTask handleNewTask={handleNewTask} />
        )}
        {showNewTask && <NewTask />}
      </StyledContentWrapper>
    </StyledHomeContainer>
  )
}

export default Home
