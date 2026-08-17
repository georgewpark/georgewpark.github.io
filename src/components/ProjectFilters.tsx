import { filters } from '../data/projects'
import type { CategoryId } from '../types'

type ProjectFiltersProps = {
  current: CategoryId
  onChange: (id: CategoryId) => void
}

const ProjectFilters = ({ current, onChange }: ProjectFiltersProps) => (
  <div
    role='group'
    aria-label='Filter projects by category'
    className='flex flex-wrap gap-2.5'
  >
    {filters.map(filter => (
      <button
        key={filter.id}
        type='button'
        className='chip'
        aria-pressed={filter.id === current}
        onClick={() => onChange(filter.id)}
      >
        {filter.label}
      </button>
    ))}
  </div>
)

export default ProjectFilters
