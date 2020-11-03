import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BaseTable, Classes } from '../base-table'
import { TableTransform } from '../interfaces'
import { internals } from '../internals'
import { isLeafNode, mergeCellProps, traverseColumn } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

const AUTO_WIDTH_WRAPPER_CLS = 'auto-width-wrapper'
const AUTO_WIDTH_EXPANDER_CLS = 'auto-width-expander'

const AutoWidthWrapper = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 8px 12px;
`

function isSameArray(arr1: number[], arr2: number[]) {
  return arr1.length === arr2.length && arr1.every((x, i) => x === arr2[i])
}

/** 自适应列宽
 *
 * @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展
 *
 * @param tableRef BaseTable 的 ref
 * @param options 参数
 * @param deps 重新调整列宽的依赖数组，每当依赖数组发生变化时， useAutoWidthTransform 会根据单元格内容的实际渲染宽度 设置单元格的宽度
 *
 * options 说明：
 * - options.appendExpander 是否在列的末尾追加可伸缩列
 * - options.expanderVisibility 设置为 `'hidden'` 可以隐藏可伸缩列
 * - options.wrapperStyle 单元格中 div.auto-width-wrapper 的样式
 * - options.initColumnWidth 自适应的初始列宽
 *
 * 注意 useAutoWidthTransform 是一个 React hooks，要遵循 hooks 的用法规范
 * */
export function useAutoWidthTransform(
  tableRef: React.MutableRefObject<BaseTable>,
  options?: {
    wrapperStyle?: React.CSSProperties
    initColumnWidth?: number
    appendExpander?: boolean
    expanderVisibility?: 'visible' | 'hidden'
  },
  deps?: any[],
): TableTransform {
  warnTransformsDeprecated('useAutoWidthTransform')
  const [widthList, setWidthList] = useState<number[]>([])

  useEffect(() => {
    const artTable = tableRef.current.getDoms().artTable
    const rows = Array.from<HTMLTableRowElement>(artTable.querySelectorAll(`.${Classes.tableRow}`))
    if (rows.length === 0) {
      return
    }

    const preferredWidthList: number[] = []

    for (const row of rows) {
      const autoWidthDivList = row.querySelectorAll(`.${AUTO_WIDTH_WRAPPER_CLS}`)
      autoWidthDivList.forEach((div, i) => {
        preferredWidthList[i] = Math.max(preferredWidthList[i] ?? 0, div.scrollWidth)
      })
    }

    if (!isSameArray(preferredWidthList, widthList)) {
      setWidthList(preferredWidthList)
    }
  }, deps)

  let i = 0

  const innerTransform = traverseColumn((col) => {
    if (!isLeafNode(col)) {
      return col
    }
    if (!col.features?.autoWidth) {
      return col
    }

    const { max = Infinity, min = -Infinity } = col.features.autoWidth

    const width = widthList[i++] ?? col.width ?? options?.initColumnWidth
    const clampedWidth = Math.max(min, Math.min(max, width))

    return {
      ...col,
      width: clampedWidth,
      getCellProps(_, record, rowIndex) {
        return mergeCellProps(internals.safeGetCellProps(col, record, rowIndex), {
          style: { padding: 0 },
        })
      },
      render(_, record, rowIndex) {
        return (
          <AutoWidthWrapper className={AUTO_WIDTH_WRAPPER_CLS} style={options?.wrapperStyle}>
            {internals.safeRender(col, record, rowIndex)}
          </AutoWidthWrapper>
        )
      },
    }
  })

  return (input) => {
    const { columns, dataSource } = innerTransform(input)
    const expanderVisibility = options?.expanderVisibility ?? 'visible'
    return {
      columns: options?.appendExpander
        ? columns.concat([
            {
              name: '',
              headerCellProps: {
                className: AUTO_WIDTH_EXPANDER_CLS,
                style: {
                  background: expanderVisibility === 'hidden' ? 'var(--bgcolor)' : undefined,
                  border: expanderVisibility === 'hidden' ? 'none' : undefined,
                },
              },
              getCellProps() {
                return {
                  className: AUTO_WIDTH_EXPANDER_CLS,
                  style: { visibility: expanderVisibility },
                }
              },
            },
          ])
        : columns,
      dataSource,
    }
  }
}
