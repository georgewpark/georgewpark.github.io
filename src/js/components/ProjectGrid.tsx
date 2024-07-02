import { useContext } from 'react'
import ProjectsContext from '../context/ProjectsContext'
import { projectList } from '../data/ProjectData'

const ProjectGrid = () => {
  const { currentFilter } = useContext(ProjectsContext)

  return (
    <div className='projects-gallery' aria-live='polite'>
      {projectList.map(project => {
        const showProject = project.categories.includes(
          currentFilter.toLowerCase().replace(' ', '-')
        )
          ? 'show-item'
          : ''
        const projectUrl = project.github
          ? `github.com/georgewpark/${project.title.split(' ').join('-')}`
          : `cdpn.io/${project.id}`
        const projectCategories = project.categories.join(' ')

        return (
          <article
            key={project.id}
            className={`projects-item ${projectCategories} ${showProject}`}
          >
            {project.image && (
              <img
                className='projects-item__image'
                src={`/images/portfolio/${project.image}.jpg`}
                alt=''
                loading='lazy'
              />
            )}
            {project.video && (
              <video
                className='projects-item__video'
                src={`/video/portfolio/${project.video}.mp4`}
                autoPlay={
                  !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
                }
                muted
                loop
                playsInline
                aria-hidden='true'
              />
            )}
            <div className='projects-item__info'>
              <h3 className='projects-item__info-title'>{project.title}</h3>
              <p className='projects-item__info-desc'>{project.description}</p>
              <a
                className='projects-item__info-btn btn--light'
                href={`https://${projectUrl}/`}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Project
              </a>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ProjectGrid
