import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute: FC = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to="/auth" />
  }

  return <Outlet />
}
