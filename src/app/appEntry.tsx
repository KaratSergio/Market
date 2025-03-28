import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from './providers/StoreProvider'
import { RouterProvider } from './providers/RouterProvider'
import '@shared/styles/base.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  </StrictMode>,
)
