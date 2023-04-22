import { createRoot } from 'react-dom/client'
import Projects from './components/Projects'

const container = document.querySelector('#projects')
const root = container && createRoot(container)

root && root.render(<Projects />)
