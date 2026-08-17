export type CategoryId =
  | 'featured'
  | 'layout'
  | 'react'
  | 'speech'
  | 'emoji'
  | '3d'
  | 'text-effects'
  | 'other'

export type Project = {
  id: string
  title: string
  description: string
  image?: string
  video?: string
  github?: boolean
  categories: CategoryId[]
}

export type Filter = {
  id: CategoryId
  label: string
}
