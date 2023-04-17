import { useContext } from 'react'
import ProjectsContext from '../context/ProjectsContext'

const ProjectFilters = () => {
  const {
    filterList,
    currentFilter,
    setCurrentFilter
  } = useContext(ProjectsContext)

  return (
    <ul className='projects-filter'>
      {
        filterList.map(filter =>
          <li>
            <button
              id={filter.toLowerCase().replace(' ', '-')}
              className={`projects-filter__btn btn--dark ${filter === currentFilter ? 'current' : ''}`}
              onClick={() => setCurrentFilter(filter)}
            >
              {filter}
            </button>
          </li>
        )
      }
    </ul>
  )
}

export default ProjectFilters