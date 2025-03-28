import axios from 'axios'
import { appStore } from '@app/appStore'
import { refreshToken } from '@features/auth/api/authApi'
import { logout } from '@features/auth/api/authSlice'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// INTERCEPTORS
// REQUEST
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  config.headers['Content-Type'] =
    config.data instanceof FormData ? 'multipart/form-data' : 'application/json'
  return config
})

// RESPONSE
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // if 401 and the request has not yet been repeated
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const { payload } = await appStore.dispatch(refreshToken())
        if (payload?.accessToken) {
          localStorage.setItem('token', payload.accessToken)
          apiClient.defaults.headers.Authorization = `Bearer ${payload.accessToken}`
          originalRequest.headers.Authorization = `Bearer ${payload.accessToken}`
          return apiClient(originalRequest)
        }
      } catch (err) {
        appStore.dispatch(logout())
        return Promise.reject(err)
      }
    }

    return Promise.reject(error)
  },
)

export default apiClient
