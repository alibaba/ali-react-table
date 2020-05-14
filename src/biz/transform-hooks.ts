import { useState } from 'react'
import {
  columnHover,
  ColumnHoverOptions,
  columnRangeHover,
  ColumnRangeHoverOptions,
  columnResize,
  ColumnResizeOptions,
  sort,
  SortOptions,
  treeMode,
  TreeModeOptions,
} from './common-transforms'
import { SortItem } from './interfaces'

export function useColumnHoverTransform({
  hoverColor,
}: Omit<ColumnHoverOptions, 'hoverColIndex' | 'onChangeHoverColIndex'> = {}) {
  const [hoverColIndex, onChangeHoverColIndex] = useState(-1)
  return columnHover({ hoverColor, hoverColIndex, onChangeHoverColIndex })
}

export function useColumnHoverRangeTransform({
  hoverColor,
  headerHoverColor,
}: Omit<ColumnRangeHoverOptions, 'hoverRange' | 'onChangeHoverRange'> = {}) {
  const [hoverRange, onChangeHoverRange] = useState({ start: 0, end: 0 })
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
  defaultOpenKeys,
}: Omit<TreeModeOptions, 'openKeys' | 'onChangeOpenKeys'> & { defaultOpenKeys: string[] }) {
  const [openKeys, onChangeOpenKeys] = useState(defaultOpenKeys)
  return treeMode({ indentSize, primaryKey, isLeafNode, openKeys, onChangeOpenKeys })
}
