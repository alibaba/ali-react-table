import { ArtColumn } from './interfaces'

export function safeRenderHeader(column: ArtColumn) {
  return column.title ?? column.name
}

export function safeGetValue(column: ArtColumn, record: any, rowIndex: number) {
  if (column.getValue) {
    return column.getValue(record, rowIndex)
  }
  return record[column.code]
}

export function safeGetRowKey(
  primaryKey: string | ((record: any, rowIndex: number) => string),
  record: any,
  rowIndex: number,
): string {
  let key
  if (typeof primaryKey === 'string') {
    key = record[primaryKey]
  } else if (typeof primaryKey === 'function') {
    key = primaryKey(record, rowIndex)
  }
  if (key == null) {
    key = String(rowIndex)
  }
  return key
}

export function safeGetCellProps(column: ArtColumn, record: any, rowIndex: number) {
  if (column.getCellProps) {
    const value = safeGetValue(column, record, rowIndex)
    return column.getCellProps(value, record, rowIndex) || {}
  }
  return {}
}

export function safeRender(column: ArtColumn, record: any, rowIndex: number) {
  const value = safeGetValue(column, record, rowIndex)
  if (column.render) {
    return column.render(value, record, rowIndex)
  }
  return value
}
