import { appData } from 'App'

// Need to revist for typings

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function DashboardService() {}

DashboardService.prototype.getTasksList = function () {
  /* return new Promise((resolve, reject) => {
    setTimeout(() => resolve(appData.getTasksList), 3000)
  }) */
  return wait(3000).then(() => ({
    status: 200,
    ok: true,
    data: appData.getTasksList
  }))
}

export default DashboardService
