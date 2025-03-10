import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Quiz from './Quiz.jsx'
import 'bootstrap/dist/css/bootstrap.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quiz />
  </StrictMode>,
)
