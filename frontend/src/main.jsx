import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="80225094484-qdf2k6ujsvclk2ck9fsqhhp2bu47l802.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    
  </StrictMode>,
)
