import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Projects from './components/Projects'
import './styles.css'

const container = document.querySelector('#projects-root')

if (container) {
  createRoot(container).render(
    <StrictMode>
      <Projects />
    </StrictMode>
  )
}
