export type BaseApiResponse = {
  meta: Meta
  links: Link
}

export type ApiResponse<T> = {
  [K in keyof T]: T[K]
} & BaseApiResponse

export type AuthResponse<T> = {
  data: T
}

export type BaseEntity = {
  id: number
}

export type Entity<T> = {
  [K in keyof T]: T[K]
} & BaseEntity

export type Meta = {
  current_page: number
  from: number
  last_page: number
  links: PaginationLink[]
  path: string
  per_page: number
  to: number
  total: number
}

export type PaginationLink = {
  url: string | null
  label: string
  active: boolean
}

export type Link = {
  first: string
  last: string
  prev: string | null
  next: string | null
}
