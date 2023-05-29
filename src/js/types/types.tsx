export type Project = {
  id: string
  title: string
  description: string
  image?: string | null
  video?: string | null
  github?: boolean
  categories: string[]
}
