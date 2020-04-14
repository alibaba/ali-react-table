import React from 'react'
import { AbstractTreeNode, ArtColumn } from '../interfaces'
import isLeafNode from './isLeafNode'

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
    key = rowIndex
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

/** 获取一棵树的高度/深度 (0-based) */
export function getTreeDepth(nodes: AbstractTreeNode[]) {
  let maxDepth = -1
  dfs(nodes, 0)
  return maxDepth

  function dfs(columns: AbstractTreeNode[], depth: number) {
    for (const column of columns) {
      if (isLeafNode(column)) {
        maxDepth = Math.max(maxDepth, depth)
      } else {
        dfs(column.children, depth + 1)
      }
    }
  }
}
