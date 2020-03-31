import { ArtColumn } from '../interfaces'

export type SortOrder = 'desc' | 'asc' | 'none'

export type SortItem = {
  code: string
  order: SortOrder
}

export type Transform<T> = (input: T) => T

export type TableTransform = Transform<{
  columns: ArtColumn[]
  dataSource: any[]
}>
