type UserType = {
  id: string
  name: string
}

export type TaskStatusType = 'Pending' | 'Completed'

export type TaskType = {
  id: string
  taskName: string
  taskStatus: TaskStatusType
}

type ThisType = {
  userDetails: UserType
  tasks: Array<TaskType>
}

function AppData() {
  const userDetails: UserType = {
    id: '123',
    name: 'xyz'
  }
  const tasks: Array<TaskType> = []

  this.userDetails = userDetails
  this.tasks = tasks
}

AppData.prototype.getUserDetails = function (): UserType {
  return this.userDetails
}

AppData.prototype.getTasksList = function (): Array<TaskType> {
  return this.tasks
}

AppData.prototype.addTask = function (task: TaskType) {
  this.tasks.push(task)
}

AppData.prototype.updateTask = function (
  taskId: string,
  status: TaskStatusType
) {
  const index = this.tasks.findIndex((task: TaskType) => task.id === taskId)
  this.tasks[index].taskStatus = status
}

AppData.prototype.deleteTask = function (taskId: string) {
  const index = this.tasks.findIndex((task: TaskType) => task.id === taskId)
  this.tasks.splice(index, 1)
}

export default AppData
