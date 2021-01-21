import React, { useState } from 'react'
import { fromEvent } from 'rxjs'
import * as op from 'rxjs/operators'
import styled from 'styled-components'
import { TableTransform } from '../interfaces'
import { internals } from '../internals'
import { isLeafNode, traverseColumn } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

function clamp(min: number, x: number, max: number) {
  return Math.max(min, Math.min(max, x))
}

const RESIZE_EXPANDER_CLS = 'resize-expander'

const ResizeHandle = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -5px;
  width: 10px;
  cursor: col-resize;
  z-index: 1;
`

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export interface ColumnResizeOptions {
  /** 每一列的宽度 */
  sizes: number[]

  /** 修改宽度的回调函数 */
  onChangeSizes(nextSizes: number[]): void

  /** 列的最小宽度，默认为 40 */
  minSize?: number
  /** 列的最大宽度，默认为 Infinity */
  maxSize?: number
  /** 是否在列的末尾追加可伸缩列，默认为 false */
  appendExpander?: boolean
  /** 是否在调整列宽时禁用 user-select，默认为 false */
  disableUserSelectWhenResizing?: boolean
  /** 可伸缩列 style.visibility */
  expanderVisibility?: 'visible' | 'hidden'
}

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeColumnResizeTransform({
  sizes,
  onChangeSizes,
  minSize = 40,
  maxSize = Infinity,
  appendExpander,
  expanderVisibility = 'visible',
  disableUserSelectWhenResizing,
}: ColumnResizeOptions): TableTransform {
  warnTransformsDeprecated('makeColumnResizeTransform')

  const startResize = (colIndex: number, e: React.MouseEvent<HTMLSpanElement>) => {
    const startX = e.clientX
    const startSize = sizes[colIndex]

    const nextSizes$ = fromEvent<MouseEvent>(window, 'mousemove').pipe(
      op.takeUntil(fromEvent(window, 'mouseup')),
      op.map((e) => {
        const movingX = e.clientX
        const nextSizes = sizes.slice()
        nextSizes[colIndex] = clamp(minSize, startSize + (movingX - startX), maxSize)
        return nextSizes
      }),
    )

    let prevUserSelect = ''
    let docElemStyle: CSSStyleDeclaration

    if (disableUserSelectWhenResizing) {
      docElemStyle = document.documentElement.style
      prevUserSelect = docElemStyle.userSelect
      docElemStyle.userSelect = 'none'
    }

    nextSizes$.subscribe({
      next: onChangeSizes,
      complete() {
        if (disableUserSelectWhenResizing) {
          docElemStyle.userSelect = prevUserSelect
        }
      },
    })
  }

  const innerTransform = traverseColumn((col, { range }) => {
    if (!isLeafNode(col)) {
      return col
    }

    const prevTitle = internals.safeRenderHeader(col)

    return {
      ...col,
      width: sizes[range.start],
      title: (
        <>
          {prevTitle}
          <ResizeHandle
            className="resize-handle"
            onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => startResize(range.start, e)}
          />
        </>
      ),
      headerCellProps: {
        ...col.headerCellProps,
        style: {
          ...col.headerCellProps?.style,
          overflow: 'visible',
          position: 'relative',
        },
      },
    }
  })

  return (input) => {
    const { columns, dataSource } = innerTransform(input)
    return {
      columns: appendExpander
        ? columns.concat([
            {
              name: '',
              headerCellProps: {
                className: RESIZE_EXPANDER_CLS,
                style: {
                  background: expanderVisibility === 'hidden' ? 'var(--bgcolor)' : undefined,
                  border: expanderVisibility === 'hidden' ? 'none' : undefined,
                },
              },
              getCellProps() {
                return {
                  className: RESIZE_EXPANDER_CLS,
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

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function useColumnResizeTransform({
  defaultSizes,
  ...others
}: Omit<ColumnResizeOptions, 'sizes' | 'onChangeSizes'> & { defaultSizes: number[] }) {
  const [sizes, onChangeSizes] = useState(defaultSizes)
  return makeColumnResizeTransform({ sizes, onChangeSizes, ...others })
}
