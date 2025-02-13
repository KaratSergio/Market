import { FC, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const MainPage = lazy(() => import('../pages/main'))
const ProfilePage = lazy(() => import('../pages/profile'))
const NotFoundPage = lazy(() => import('../pages/404'))

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
