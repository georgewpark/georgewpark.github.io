import { useContext } from 'react'
import ProjectsContext from '../context/ProjectsContext'
import { filterList } from '../data/ProjectData'

const ProjectFilters = () => {
  const { currentFilter, setCurrentFilter } = useContext(ProjectsContext)

  return (
    <nav aria-label='projects navigation'>
      <ul className='projects-filter'>
        {filterList.map(filter => (
          <li>
            <button
              id={filter.toLowerCase().replace(' ', '-')}
              className={`projects-filter__btn btn--dark`}
              aria-current={filter === currentFilter}
              onClick={() => setCurrentFilter(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ProjectFilters
