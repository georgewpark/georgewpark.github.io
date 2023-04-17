import { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react'
import { Project } from '../types/types'
import { filterList, projectList } from '../data/ProjectData'

type ProjectsContextType = {
  filterList: string[],
  currentFilter: string,
  setCurrentFilter: Dispatch<SetStateAction<string>>,
  projectList: Project[]
}

type ProjectsProviderProps = {
  children: ReactNode
}

const ProjectsContext = createContext({} as ProjectsContextType)

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [currentFilter, setCurrentFilter] = useState(filterList[0])

  return (
    <ProjectsContext.Provider
      value={
        {
          filterList,
          currentFilter,
          setCurrentFilter,
          projectList
        }
      }
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsContext
