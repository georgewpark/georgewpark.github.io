import { useMemo, useState } from 'react'
import { filters, visibleProjects } from '../data/projects'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { CategoryId } from '../types'
import ProjectCard from './ProjectCard'
import ProjectFilters from './ProjectFilters'
import { SearchOffIcon } from './icons'

const Projects = () => {
  const [current, setCurrent] = useState<CategoryId>('featured')
  const [hasFiltered, setHasFiltered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleChange = (id: CategoryId) => {
    setCurrent(id)
    setHasFiltered(true)
  }

  const visible = useMemo(
    () =>
      visibleProjects.filter(project => project.categories.includes(current)),
    [current]
  )

  const currentLabel =
    filters.find(filter => filter.id === current)?.label ?? current

  return (
    <div className='container-page'>
      <div className='max-w-2xl'>
        <span className='section-eyebrow'>Selected work</span>
        <h2 className='section-heading'>Projects</h2>
        <p className='prose-body mt-4'>
          Experiments and builds covering various web technologies.
        </p>
      </div>

      <div className='mt-10'>
        <ProjectFilters current={current} onChange={handleChange} />
      </div>

      <p role='status' className='sr-only'>
        {hasFiltered &&
          `Showing ${visible.length} ${
            visible.length === 1 ? 'project' : 'projects'
          } in ${currentLabel}.`}
      </p>

      {visible.length > 0 ? (
        <ul className='mt-8 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {visible.map(project => (
            <li key={project.id} className='flex'>
              <ProjectCard
                project={project}
                prefersReducedMotion={prefersReducedMotion}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className='mt-8 flex flex-col items-center gap-3 rounded-card border border-line border-dashed bg-surface p-12 text-center'>
          <span className='text-fg-muted'>
            <SearchOffIcon />
          </span>
          <p className='text-fg-muted'>
            No projects in {currentLabel} yet. Try another category.
          </p>
        </div>
      )}
    </div>
  )
}

export default Projects
