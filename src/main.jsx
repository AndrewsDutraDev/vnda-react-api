import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { TokenContext } from './components/tokenContext';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TokenContext>
      <App />
    </TokenContext>
  </StrictMode>,
)
