import { appData } from 'App'

export function loginService() {
  console.log('In LoginService')
  console.log(appData)

  // Mocking Network Call and resolving after 3 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ status: 200, ok: true }), 3000)
  })
}
