import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    fetchTasksList: null,
    updateTasksList: ['tasks']
  },
  {
    prefix: '@DASHBOARD-'
  }
)

export const DashboardTypes = Types
export const DashboardActions = Creators
