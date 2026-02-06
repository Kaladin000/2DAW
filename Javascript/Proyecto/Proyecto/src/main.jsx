import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/EstiloGlobal.css'
import App from './App.jsx'

// Renderizo la aplicación.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
