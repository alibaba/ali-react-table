import { useState } from 'react'
import {
  columnHover,
  columnRangeHover,
  ColumnRangeHoverOptions,
  columnResize,
  ColumnResizeOptions,
  HoverRange,
  sort,
  SortOptions,
  treeMode,
  TreeModeOptions,
} from './common-transforms'
import { SortItem } from './interfaces'

export function useColumnHoverTransform({
  hoverColor,
  defaultHoverColIndex = -1,
}: { hoverColor?: string; defaultHoverColIndex?: number } = {}) {
  const [hoverColIndex, onChangeHoverColIndex] = useState(defaultHoverColIndex)
  return columnHover({ hoverColor, hoverColIndex, onChangeHoverColIndex })
}

export function useColumnHoverRangeTransform({
  hoverColor,
  headerHoverColor,
  defaultHoverRange = { start: 0, end: 0 },
}: Omit<ColumnRangeHoverOptions, 'hoverRange' | 'onChangeHoverRange'> & { defaultHoverRange?: HoverRange } = {}) {
  const [hoverRange, onChangeHoverRange] = useState(defaultHoverRange)
  return columnRangeHover({ hoverColor, headerHoverColor, hoverRange, onChangeHoverRange })
}

export function useColumnResizeTransform({
  defaultSizes,
  ...others
}: Omit<ColumnResizeOptions, 'sizes' | 'onChangeSizes'> & { defaultSizes: number[] }) {
  const [sizes, onChangeSizes] = useState(defaultSizes)
  return columnResize({ sizes, onChangeSizes, ...others })
}

export function useSortTransform({
  defaultSorts = [],
  ...others
}: Omit<SortOptions, 'sorts' | 'onChangeSorts'> & { defaultSorts?: SortItem[] } = {}) {
  const [sorts, onChangeSorts] = useState(defaultSorts)
  return sort({ sorts, onChangeSorts, ...others })
}

export function useTreeModeTransform({
  isLeafNode,
  indentSize,
  primaryKey,
  defaultOpenKeys = [],
}: Omit<TreeModeOptions, 'openKeys' | 'onChangeOpenKeys'> & { defaultOpenKeys?: string[] }) {
  const [openKeys, onChangeOpenKeys] = useState(defaultOpenKeys)
  return treeMode({ indentSize, primaryKey, isLeafNode, openKeys, onChangeOpenKeys })
}
