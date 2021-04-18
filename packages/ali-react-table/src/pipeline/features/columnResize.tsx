import React from 'react'
import { fromEvent } from 'rxjs'
import * as op from 'rxjs/operators'
import styled from 'styled-components'
import { internals } from '../../internals'
import { collectNodes, makeRecursiveMapper, mergeCellProps } from '../../utils'
import { TablePipeline } from '../pipeline'

function clamp(min: number, x: number, max: number) {
  return Math.max(min, Math.min(max, x))
}

const ResizeHandle = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -5px;
  width: 10px;
  cursor: col-resize;
  z-index: 1;
  transition: background-color 200ms;

  background: ${(props: any) => {
    return props['var-handleBackground']
  }};

  &:hover {
    background: ${(props: any) => {
      return props['var-handleHoverBackground']
    }};
  }
`

export interface ColumnResizeFeatureOptions {
  /** 非受控用法：默认的列宽数组 */
  defaultSizes?: number[]

  /** 受控用法：列宽数组 */
  sizes?: number[]
  /** 受控用法：修改宽度的回调函数 */
  onChangeSizes?(nextSizes: number[]): void

  /** 列的最小宽度，默认为 60 */
  minSize?: number
  /** 如果列宽数组中没有提供有效的宽度，fallbackSize 将作为该列的宽度，默认为 150 */
  fallbackSize?: number
  /** 列的最大宽度，默认为 1000 */
  maxSize?: number

  /** 是否在调整列宽时禁用 user-select，默认为 true */
  disableUserSelectWhenResizing?: boolean

  /** 把手的背景色 */
  handleBackground?: string
  /** 鼠标悬停时，把手的背景色 */
  handleHoverBackground?: string
  /** 把手激活时的背景色 */
  handleActiveBackground?: string
}

export function columnResize(opts: ColumnResizeFeatureOptions = {}) {
  const stateKey = 'columnResize'
  const disableUserSelectWhenResizing = opts.disableUserSelectWhenResizing ?? true
  const minSize = opts.minSize ?? 60
  const fallbackSize = opts.fallbackSize ?? 150
  const maxSize = opts.maxSize ?? 1000

  return function columnResizeFeature(pipeline: TablePipeline) {
    const sizes = opts.sizes ?? pipeline.getStateAtKey(stateKey) ?? opts.defaultSizes ?? []
    const leafColumns = collectNodes(pipeline.getColumns(), 'leaf-only')
    leafColumns.forEach((col, colIndex) => {
      if (sizes[colIndex] == null) {
        if (typeof col.width === 'number') {
          sizes[colIndex] = col.width
        } else {
          sizes[colIndex] = fallbackSize
        }
      }
    })

    const onChangeSizes = (nextSizes: number[]) => {
      pipeline.setStateAtKey(stateKey, nextSizes)
      opts.onChangeSizes?.(nextSizes)
    }

    const startResize = (startIndex: number, endIndex: number, e: React.MouseEvent<HTMLSpanElement>) => {
      const startX = e.clientX
      const target = e.target as HTMLSpanElement

      const nextSizes$ = fromEvent<MouseEvent>(window, 'mousemove').pipe(
        op.takeUntil(fromEvent(window, 'mouseup')),
        op.map((e) => {
          const movingX = e.clientX
          const nextSizes = sizes.slice()
          const deltaSum = movingX - startX
          const sizeSum = sizes.slice(startIndex, endIndex).reduce((sum, s) => sum + s, 0)
          let deltaRemaining = deltaSum

          for (let colIndex = startIndex; colIndex < endIndex - 1; colIndex++) {
            const startSize = sizes[colIndex]
            // 将每一列的宽度变化量 都四舍五入至 整数，不然看起来非常难受
            const colDelta = Math.round(deltaSum * (startSize / sizeSum))
            nextSizes[colIndex] = clamp(minSize, startSize + colDelta, maxSize)
            deltaRemaining -= colDelta
          }
          // 因为前面的列宽都进行了四舍五入，最后一列的变化量需要使用 deltaRemaining 以避免误差
          nextSizes[endIndex - 1] = clamp(minSize, sizes[endIndex - 1] + deltaRemaining, maxSize)

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
      if (opts.handleActiveBackground) {
        target.style.background = opts.handleActiveBackground
      }

      nextSizes$.subscribe({
        next: onChangeSizes,
        complete() {
          if (disableUserSelectWhenResizing) {
            docElemStyle.userSelect = prevUserSelect
          }
          if (opts.handleActiveBackground) {
            target.style.background = ''
          }
        },
      })
    }

    return pipeline.mapColumns(
      makeRecursiveMapper((col, { startIndex, endIndex }) => {
        const prevTitle = internals.safeRenderHeader(col)

        return {
          ...col,
          width: sizes[startIndex],
          title: (
            <>
              {prevTitle}
              <ResizeHandle
                className="resize-handle"
                var-handleBackground={opts.handleBackground}
                var-handleHoverBackground={opts.handleHoverBackground}
                onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => startResize(startIndex, endIndex, e)}
              />
            </>
          ),
          headerCellProps: mergeCellProps(col.headerCellProps, {
            style: {
              overflow: 'visible',
              position: 'relative',
            },
          }),
        }
      }),
    )
  }
}
