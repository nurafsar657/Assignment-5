import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Nav from './components/Nav.tsx'
import Hero from './components/Hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav/>
    <Hero/> 
    <App />
  </StrictMode>,
)
