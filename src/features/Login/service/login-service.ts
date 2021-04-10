import { appData } from 'App'

export function loginService() {
  // Mocking Network Call and resolving after 2 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ status: 200, ok: true }), 2000)
  })
}
