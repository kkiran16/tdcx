import { NewTask } from 'components/Task'
import { StyledAddIcon, StyledNewButton } from 'components/Task/task-styles'
import React, { useEffect, useRef } from 'react'
import { TaskType } from 'Utils/app-data'
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
  /* const refCount = useRef<number>(0)

  useEffect(() => {
    return () => {
      console.log('Came', refCount.current)
      refCount.current = 0
    }
  })
 */
  return (
    <TasksListContainer>
      <TasksLevel1>
        <TasksHeader>Tasks</TasksHeader>
        <TaskSearch type="text" placeholder="Search by task name" />
        <StyledNewButton>
          <StyledAddIcon />
          New Task
        </StyledNewButton>
      </TasksLevel1>
      <TasksLevel2>
        {tasks.map((task: TaskType) => {
          return (
            <>
              <ListItem key={task.id} task={task} />
              <StyledDivider />
            </>
          )
        })}
      </TasksLevel2>
    </TasksListContainer>
  )
}

export default TasksList
