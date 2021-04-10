import React, { Fragment, useContext, useState } from 'react'
import Modal from '@material-ui/core/Modal'
import { StyledAddIcon, StyledNewButton } from 'components/Task/task-styles'
import { TaskType } from 'Utils/app-data'
import { NewTask } from 'components/Task'
import ListItem from './list-item'
import {
  TasksListContainer,
  TasksHeader,
  TasksLevel1,
  TaskSearch,
  TasksLevel2,
  StyledDivider
} from './tasks-list-styles'

type TProps = {
  tasks: Array<TaskType>
}
function TasksList({ tasks }: TProps): React.ReactElement {
  const [showModal, setShowModal] = useState(false)

  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  return (
    <TasksListContainer>
      <TasksLevel1>
        <TasksHeader>Tasks</TasksHeader>
        <TaskSearch type="text" placeholder="Search by task name" />
        <StyledNewButton onClick={handleModalOpen}>
          <StyledAddIcon />
          New Task
        </StyledNewButton>
      </TasksLevel1>
      <TasksLevel2>
        {tasks.map((task: TaskType) => {
          return (
            <Fragment key={task.id}>
              <ListItem key={task.id} task={task} />
              <StyledDivider />
            </Fragment>
          )
        })}
      </TasksLevel2>
      <Modal open={showModal} onClose={handleModalClose}>
        <NewTask handleModalClose={handleModalClose} />
      </Modal>
    </TasksListContainer>
  )
}

export default TasksList
