import React, { ReactNode } from 'react'

export type ArtColumnAlign = 'left' | 'center' | 'right'

export interface ArtColumnStaticPart {
  /** 列的名称 */
  name: string

  /** 在数据中的字段 code */
  code?: string

  /** 列标题的展示名称；在页面中进行展示时，该字段将覆盖 name 字段 */
  title?: ReactNode

  /** 列的宽度，如果该列是锁定的，则宽度为必传项 */
  width?: number

  /** 单元格中的文本或内容的 对其方向 */
  align?: ArtColumnAlign

  /** 是否隐藏 */
  hidden?: boolean

  /** 是否锁列 */
  lock?: boolean

  /** 表头单元格的 props */
  headerCellProps?: React.ThHTMLAttributes<HTMLTableHeaderCellElement>

  /** 功能开关 */
  features?: { [key: string]: any }
}

export interface ArtColumnDynamicPart {
  /** 自定义取数方法 */
  getValue?(record: any, rowIndex: number): any

  /** 自定义渲染方法 */
  render?(value: any, record: any, rowIndex: number): ReactNode

  /** 自定义的获取单元格 props 的方法 */
  getCellProps?(value: any, record: any, rowIndex: number): React.TdHTMLAttributes<HTMLTableDataCellElement>

  /** 自定义的获取单元格 SpanRect 方法 */
  getSpanRect?(value: any, record: any, rowIndex: number): SpanRect
}

export interface ArtColumn extends ArtColumnStaticPart, ArtColumnDynamicPart {
  /** 该列的子节点 */
  children?: ArtColumn[]
}

/** SpanRect 用于描述合并单元格的边界
 * 注意 top/left 为 inclusive，而 bottom/right 为 exclusive */
export interface SpanRect {
  top: number
  bottom: number
  left: number
  right: number
}

export interface AbstractTreeNode {
  children?: AbstractTreeNode[]
}

export type SortOrder = 'desc' | 'asc' | 'none'

export type SortItem = { code: string; order: SortOrder }

export type Transform<T> = (input: T) => T

export type TableTransform = Transform<{
  columns: ArtColumn[]
  dataSource: any[]
}>
