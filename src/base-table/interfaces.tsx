import React from 'react'
import { DvtTableColumn } from '../interfaces'

export type TableSide = 'main' | 'left' | 'right'
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
  dvtTableWrapper: HTMLDivElement
  dvtTable: HTMLDivElement
  mainSection: HTMLDivElement
  mainHeader: HTMLDivElement
  mainBody: HTMLDivElement
  leftSection: HTMLDivElement
  leftHeader: HTMLDivElement
  leftBody: HTMLDivElement
  rightSection: HTMLDivElement
  rightHeader: HTMLDivElement
  rightBody: HTMLDivElement
  stickyScroll: HTMLDivElement
  stickyScrollItem: HTMLDivElement
}

export type HozWrappedCol =
  | { type: 'blank'; blankSide: 'left' | 'right'; width: number }
  | { type: 'normal'; colIndex: number; col: DvtTableColumn }
