import React from 'react'
import { ArtColumn } from '../interfaces'

export type VirtualEnum = false | true | 'auto'

export interface FullRenderRange {
  vertical: VerticalRenderRange
  horizontal: HorizontalRenderRange
}

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

export type TRNodeList = NodeListOf<HTMLTableRowElement>

export interface TableDoms {
  artTableWrapper: HTMLDivElement
  artTable: HTMLDivElement
  tableHeader: HTMLDivElement
  tableBody: HTMLDivElement

  stickyScroll: HTMLDivElement
  stickyScrollItem: HTMLDivElement
}

export type HozWrappedCol =
  | { type: 'blank'; blankSide: 'left' | 'right'; width: number }
  | { type: 'normal'; colIndex: number; col: ArtColumn }
