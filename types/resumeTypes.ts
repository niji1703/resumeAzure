export interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
}

export interface Role {
  id: number
  title: string
  startDate: string
  endDate: string
  description: string
  projects: Project[]
}

export interface Company {
  id: number
  name: string
  roles: Role[]
}

export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

export interface ResumeData {
  education: Education[]
  companies: Company[]
}

