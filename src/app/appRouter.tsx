import { FC, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './guards/PrivateRoute'
import { PublicRoute } from './guards/PublicRoute'

const MainPage = lazy(() => import('../pages/main'))
const ProfilePage = lazy(() => import('../pages/profile'))
const NotFoundPage = lazy(() => import('../pages/404'))

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<MainPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
