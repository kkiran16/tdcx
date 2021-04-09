import Immutable, { ImmutableObject } from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
// import { TaskType } from 'Utils/app-data'
import { DashboardTypes } from './actions'

/* export type DashboardType = {
  loading: boolean
  tasks: ImmutableObject<TaskType>[]
}

export type DashboardStateType = DashboardType & ImmutableObject<DashboardType>

export interface FunctionType {
  (state: DashboardStateType): ImmutableObject<DashboardType>
}
 */
export const INITIAL_STATE = Immutable({
  loading: false,
  tasks: []
})

const fetchTasks = (state) => state.merge({ loading: true })
const updateTasks = (state, { tasks }) => state.merge({ tasks })

export const dashboardReducer = createReducer(INITIAL_STATE, {
  [DashboardTypes.FETCH_TASKS_LIST]: fetchTasks,
  [DashboardTypes.UPDATE_TASKS_LIST]: updateTasks
})
