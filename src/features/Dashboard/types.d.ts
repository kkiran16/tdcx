import { TaskType } from 'Utils/app-data'

export type LinkStateToProps = {
  loading: boolean
  tasksList: Array<TaskType>
}

export type LinkDispatchToProps = {
  fetchTasksList: () => void
}
