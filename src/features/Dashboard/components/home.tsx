import React, { createContext, useContext, useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal'

import { EmptyTask, NewTask } from 'components/Task'
import { StyledContentWrapper, StyledHomeContainer } from './home.styles'
import Header from './Header/header'
import Dashboard from './dashboard-connect'
import { LinkDispatchToProps, LinkStateToProps } from '../types'

type TProps = LinkStateToProps & LinkDispatchToProps

// export const ModalContext = createContext({ showModal: false })

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
    // ctxObj.showModal = true
  }

  const handleModalClose = () => {
    setShowNewTask(false)
    // ctxObj.showModal = false
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
        {/* {showNewTask && <NewTask />} */}
        <Modal open={showNewTask} onClose={handleModalClose}>
          <NewTask handleModalClose={handleModalClose} />
        </Modal>
      </StyledContentWrapper>
    </StyledHomeContainer>
  )
}

export default Home
