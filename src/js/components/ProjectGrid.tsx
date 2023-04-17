import { useContext } from 'react'
import ProjectsContext from '../context/ProjectsContext'
import { projectList } from '../data/ProjectData'

const ProjectGrid = () => {
  const { currentFilter } = useContext(ProjectsContext)

  return (
    <div className='projects-gallery' aria-live='polite'>
      {
        projectList.map(project => {
          const showProject = project.categories.includes(currentFilter.toLowerCase().replace(' ', '-'))

          return (
            <div
              key={project.id}
              className={`projects-item ${project.categories.join(' ')} ${showProject ? 'show-item' : ''}`}>
              {
                project.image && (
                  <img
                    className='projects-item__image'
                    src={`/images/portfolio/${project.image}`}
                    alt=''
                    loading='lazy'
                  />
                )
              }
              {
                project.video && (
                  <video
                    className='projects-item__video'
                    src={`/video/portfolio/${project.video}`}
                    autoPlay
                    muted
                    loop
                    aria-hidden='true'
                  />
                )
              }
              <div className='projects-item__info'>
                <h3 className='projects-item__info-title'>{project.title}</h3>
                <p className='projects-item__info-desc'>{project.description}</p>
                <a
                  className='projects-item__info-btn btn--light'
                  href={`https://cdpn.io/${project.id}/`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project
                </a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProjectGrid