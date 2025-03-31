import { FC, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppRouter } from '@app/appRouter'
import { MainLayout } from '@app/layouts/MainLayout'
import { AuthPage } from '@pages/index'
import { CreatePage } from '@pages/create/Page'

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const RouterProvider: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* without MainLayout */}
        <Route path="/auth" element={<AuthPage />} />.
        {/* <Route path="/create" element={<CreatePage />} /> */}
        <Route path="/auth" element={isAuthenticated() ? <Navigate to="/create" replace /> : <AuthPage />} />
        <Route
          path="/create"
          element={isAuthenticated() ? <MainLayout><CreatePage /></MainLayout> : <Navigate to="/auth" replace />}
        />
        {/* with MainLayout */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <AppRouter />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
