import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    fetchTasksList: null,
    updateTasksList: ['tasks'],
    addTask: ['name'],
    changeStatus: ['id', 'status'],
    deleteTask: ['id']
  },
  {
    prefix: '@DASHBOARD-'
  }
)

export const DashboardTypes = Types
export const DashboardActions = Creators
