import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './appStore'
import '@shared/base.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
