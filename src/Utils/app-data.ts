type UserType = {
  id: string
  name: string
}

type TaskStatusType = 'Pending' | 'Completed'

type TaskType = {
  id: number
  taskName: string
  taskStaus: TaskStatusType
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

AppData.prototype.insertTask = function (task: TaskType) {
  this.tasks.push(task)
}

AppData.prototype.updateTask = function (
  taskId: number,
  status: TaskStatusType
) {
  const index = this.tasks.findIndex((task: TaskType) => task.id === taskId)
  this.tasks[index].taskStaus = status
}

AppData.prototype.deleteTask = function (taskId: number) {
  const index = this.tasks.findIndex((task: TaskType) => task.id === taskId)
  this.tasks.splice(index, 1)
}

export default AppData
