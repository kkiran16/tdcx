import { appData } from 'App'
import { TaskStatusType, TaskType } from 'Utils/app-data'

// Need to revist for typings

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function DashboardService() {}

DashboardService.prototype.getTasksList = function () {
  return wait(3000).then(() => ({
    status: 200,
    ok: true,
    data: appData.getTasksList()
  }))
}

DashboardService.prototype.addTask = function (task: TaskType) {
  appData.addTask(task)

  return wait(2000).then(() => ({
    status: 200,
    ok: true,
    data: appData.getTasksList()
  }))
}

DashboardService.prototype.updateTask = function ({
  id,
  status
}: {
  id: number
  status: TaskStatusType
}) {
  appData.updateTask(id, status)

  return wait(1500).then(() => ({
    status: 200,
    ok: true,
    data: appData.getTasksList()
  }))
}

export default DashboardService
