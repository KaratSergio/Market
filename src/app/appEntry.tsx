import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from './providers/StoreProvider'
import { MainPage } from '@pages/main'
import '@shared/base.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <MainPage />
    </StoreProvider>
  </StrictMode>,
)
