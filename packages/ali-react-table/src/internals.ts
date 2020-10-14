import { ArtColumn } from './interfaces'

function safeRenderHeader(column: ArtColumn) {
  return column.title ?? column.name
}

function safeGetValue(column: ArtColumn, record: any, rowIndex: number) {
  if (column.getValue) {
    return column.getValue(record, rowIndex)
  }
  return record[column.code]
}

function safeGetRowKey(primaryKey: string | ((record: any) => string), record: any, rowIndex: number): string {
  let key
  if (typeof primaryKey === 'string') {
    key = record[primaryKey]
  } else if (typeof primaryKey === 'function') {
    key = primaryKey(record)
  }
  if (key == null) {
    key = String(rowIndex)
  }
  return key
}

function safeGetCellProps(column: ArtColumn, record: any, rowIndex: number) {
  if (column.getCellProps) {
    const value = safeGetValue(column, record, rowIndex)
    return column.getCellProps(value, record, rowIndex) || {}
  }
  return {}
}

function safeRender(column: ArtColumn, record: any, rowIndex: number) {
  const value = safeGetValue(column, record, rowIndex)
  if (column.render) {
    return column.render(value, record, rowIndex)
  }
  return value
}

export const internals = {
  safeRenderHeader,
  safeGetValue,
  safeGetRowKey,
  safeGetCellProps,
  safeRender,
} as const
