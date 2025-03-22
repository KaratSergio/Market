import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoute: FC = () => {
  const token = localStorage.getItem('token')

  if (token) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
