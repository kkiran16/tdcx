import { TaskType } from 'Utils/app-data'

export type LinkStateToProps = {
  loading: boolean
  tasksList: Array<TaskType>
}

export type LinkDispatchToProps = {
  fetchTasksList: () => void
}

export type LinkDashboardStateToProps = {
  tasksList: Array<TaskType>
  completedCOunt: number
}

export type LinkDashboardDispatchToProps = {
  fetchTasksList: () => void
}
