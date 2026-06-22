import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"

// How to render a component or any element from the Dom - getElement.render(.....)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Step1 for Adding routing */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)
