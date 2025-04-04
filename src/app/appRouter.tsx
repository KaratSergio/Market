import { FC, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './guards/PrivateRoute'
import { PublicRoute } from './guards/PublicRoute'

const MainPage = lazy(() =>
  import('../pages').then((module) => ({ default: module.MainPage })),
)
const ProfilePage = lazy(() =>
  import('../pages').then((module) => ({ default: module.ProfilePage })),
)
const NotFoundPage = lazy(() =>
  import('../pages').then((module) => ({ default: module.NotFoundPage })),
)
const CreatePage = lazy(() =>
  import('../pages').then((module) => ({ default: module.CreatePage })),
)

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<MainPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/publish-ad" element={<CreatePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
