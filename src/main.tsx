import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const redirectPath = sessionStorage.redirectPath as string | undefined;
if (redirectPath) {
  delete sessionStorage.redirectPath;
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Jiya-Janwani/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
