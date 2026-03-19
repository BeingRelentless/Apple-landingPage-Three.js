import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MacBookStoreProvider } from './context/MacBookStoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MacBookStoreProvider>
      <App />
    </MacBookStoreProvider>
  </StrictMode>,
)
