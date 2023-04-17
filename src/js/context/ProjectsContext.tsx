import { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react'

type ProjectsContextType = {
  currentFilter: string,
  setCurrentFilter: Dispatch<SetStateAction<string>>
}

type ProjectsProviderProps = {
  children: ReactNode
}

const ProjectsContext = createContext({} as ProjectsContextType)

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [currentFilter, setCurrentFilter] = useState('Featured')

  return (
    <ProjectsContext.Provider
      value={
        {
          currentFilter,
          setCurrentFilter
        }
      }
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsContext
