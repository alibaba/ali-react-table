import React from 'react'
import { ArtColumn } from '../interfaces'

export type VirtualEnum = false | true | 'auto'

export interface VerticalRenderRange {
  topIndex: number
  topBlank: number
  bottomIndex: number
  bottomBlank: number
}

export interface HorizontalRenderRange {
  leftIndex: number
  leftBlank: number
  rightIndex: number
  rightBlank: number
}

// VisibleColumnDescriptor 用于在表格内部描述「那些在页面中可见的列」
export type VisibleColumnDescriptor =
  | { type: 'blank'; blankSide: 'left' | 'right'; width: number }
  | { type: 'normal'; colIndex: number; col: ArtColumn }

export interface ResolvedUseVirtual {
  horizontal: boolean
  vertical: boolean
  header: boolean
}

export interface RenderInfo {
  verticalRenderRange: VerticalRenderRange
  horizontalRenderRange: HorizontalRenderRange
  visible: VisibleColumnDescriptor[]

  flat: { full: ArtColumn[]; left: ArtColumn[]; center: ArtColumn[]; right: ArtColumn[] }
  nested: { full: ArtColumn[]; left: ArtColumn[]; center: ArtColumn[]; right: ArtColumn[] }
  stickyLeftMap: Map<number, number>
  stickyRightMap: Map<number, number>
  useVirtual: ResolvedUseVirtual
  /** props.columns 是否包含有效的锁列 */
  hasLockColumn: boolean
  /** 左侧锁定列的总宽度 */
  leftLockTotalWidth: number
  /** 右侧锁定列的总宽度 */
  rightLockTotalWidth: number
  /** 左上角单元格 */
  upperLeftCell: {
    /** 唯一id */
    id: string,
    /** 斜线宽度 */
    lineWidth?: number,
    /** 斜线颜色 */
    lineColor?: string,
    /** 字体大小 */
    fontSize?: number,
    /** 字体 */
    fontFamily?: string,
    /** 单元格左下角文字 */
    lowerLeftText?: string,
    /** 单元格右上角文字 */
    topRightText?: string,
  }
}
