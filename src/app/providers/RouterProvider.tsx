import { FC, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@app/appRouter'

export const RouterProvider: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  )
}
