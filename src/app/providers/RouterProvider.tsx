import { FC, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@app/appRouter'
import { MainLayout } from '@app/layouts/MainLayout'

export const RouterProvider: FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRouter />
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}
