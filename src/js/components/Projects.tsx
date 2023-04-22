import { ProjectsProvider } from '../context/ProjectsContext'
import ProjectFilters from './ProjectFilters'
import ProjectGrid from './ProjectGrid'

const Projects = () => {
  return (
    <ProjectsProvider>
      <div className='container'>
        <h2 className='section__heading'>Projects</h2>
        <ProjectFilters />
        <ProjectGrid />
      </div>
    </ProjectsProvider>
  )
}

export default Projects
