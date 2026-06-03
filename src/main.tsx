import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CapturaApp } from './CapturaApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CapturaApp />
  </StrictMode>,
)
