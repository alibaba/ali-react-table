import cx from 'classnames'
import React from 'react'
import { getTreeDepth, isLeafNode } from '../utils'
import { ArtColumn } from '../interfaces'
import { HorizontalRenderRange, TableSide } from './interfaces'
import { Classes } from './styles'
import { BaseTableState } from './table'

function range(n: number) {
  const array: number[] = []
  for (let i = 0; i < n; i++) {
    array.push(i)
  }
  return array
}

export interface TableHeaderProps {
  nested: BaseTableState['nested']
  flat: BaseTableState['flat']
  useVirtual: BaseTableState['useVirtual']
  side: TableSide
  hoz: HorizontalRenderRange
}

type ColWithRenderInfo =
  | {
      type: 'normal'
      colIndex: number
      col: ArtColumn
      colSpan: number
      isLeaf: boolean
      width: number
    }
  | { type: 'blank'; blankSide: 'left' | 'right'; width: number }

type IndexedCol = {
  colIndex: number
  col: ArtColumn
  children?: IndexedCol[]
}

/** 根据当前横向虚拟滚动 对 nested.center 进行过滤，结果只保留当前视野内可见的那些列配置 */
function filterNestedCenter(centerNested: ArtColumn[], hoz: HorizontalRenderRange, leftFlatCount: number) {
  return dfs(centerNested, leftFlatCount).filtered

  function dfs(cols: ArtColumn[], startColIndex: number) {
    let leafCount = 0

    const filtered: IndexedCol[] = []

    for (const col of cols) {
      const colIndex = startColIndex + leafCount
      if (isLeafNode(col)) {
        leafCount += 1
        if (leftFlatCount + hoz.leftIndex <= colIndex && colIndex < leftFlatCount + hoz.rightIndex) {
          filtered.push({ colIndex, col })
        }
      } else {
        const dfsRes = dfs(col.children, colIndex)
        leafCount += dfsRes.leafCount
        if (dfsRes.filtered.length > 0) {
          filtered.push({ colIndex, col, children: dfsRes.filtered })
        }
      }
    }

    return { filtered, leafCount }
  }
}

/** 根据输入的 nested 列配置，算出相应的 leveled & flat 配置方便渲染 */
function calculateLeveledAndFlat(inputNested: IndexedCol[], rowCount: number) {
  const leveled: ColWithRenderInfo[][] = []
  for (let depth = 0; depth < rowCount; depth++) {
    leveled.push([])
  }
  const flat: ColWithRenderInfo[] = []

  dfs(inputNested, 0)

  return { flat, leveled }

  function dfs(input: IndexedCol[], depth: number) {
    let leafCount = 0
    for (let i = 0; i < input.length; i++) {
      const indexedCol = input[i]

      if (isLeafNode(indexedCol)) {
        leafCount += 1
        const wrapped = {
          type: 'normal' as const,
          width: indexedCol.col.width,
          col: indexedCol.col,
          colIndex: indexedCol.colIndex,
          colSpan: 1,
          isLeaf: true,
        }
        leveled[depth].push(wrapped)
        flat.push(wrapped)
      } else {
        const dfsRes = dfs(indexedCol.children, depth + 1)
        leafCount += dfsRes.leafCount
        if (dfsRes.leafCount > 0) {
          leveled[depth].push({
            type: 'normal',
            width: indexedCol.col.width,
            col: indexedCol.col,
            colIndex: indexedCol.colIndex,
            colSpan: dfsRes.leafCount,
            isLeaf: false,
          })
        }
      }
    }

    return { leafCount }
  }
}

/** 包装列配置，附加上 colIndex 属性 */
function attachColIndex(inputNested: ArtColumn[], colIndexOffset: number) {
  return dfs(inputNested, colIndexOffset).result

  function dfs(input: ArtColumn[], startColIndex: number) {
    const result: IndexedCol[] = []

    let leafCount = 0
    for (let i = 0; i < input.length; i++) {
      const col = input[i]
      const colIndex = startColIndex + leafCount

      if (isLeafNode(col)) {
        leafCount += 1
        result.push({ colIndex, col })
      } else {
        const sub = dfs(col.children, colIndex)
        leafCount += sub.leafCount
        if (sub.leafCount > 0) {
          result.push({ col, colIndex, children: sub.result })
        }
      }
    }
    return { result, leafCount }
  }
}

/** 计算用于渲染表头的数据结构 */
function calculateRenderInfo(
  { flat, nested, side, hoz, useVirtual }: TableHeaderProps,
  rowCount: number,
): { flat: ColWithRenderInfo[]; leveled: ColWithRenderInfo[][] } {
  if (side === 'main' && useVirtual.header) {
    const leftPart = calculateLeveledAndFlat(attachColIndex(nested.left, 0), rowCount)
    const filtered = filterNestedCenter(nested.center, hoz, flat.left.length)
    const centerPart = calculateLeveledAndFlat(filtered, rowCount)
    const rightPart = calculateLeveledAndFlat(
      attachColIndex(nested.right, flat.left.length + flat.center.length),
      rowCount,
    )

    return {
      flat: [
        ...leftPart.flat,
        { type: 'blank', width: hoz.leftBlank, blankSide: 'left' },
        ...centerPart.flat,
        { type: 'blank', width: hoz.rightBlank, blankSide: 'right' },
        ...rightPart.flat,
      ],
      leveled: range(rowCount).map((depth) => [
        ...leftPart.leveled[depth],
        { type: 'blank', width: hoz.leftBlank, blankSide: 'left' },
        ...centerPart.leveled[depth],
        { type: 'blank', width: hoz.rightBlank, blankSide: 'right' },
        ...rightPart.leveled[depth],
      ]),
    }
  }

  const colIndexOffset = side === 'right' ? flat.left.length + flat.center.length : 0
  return calculateLeveledAndFlat(attachColIndex(nested[side], colIndexOffset), rowCount)
}

export default function TableHeader(props: TableHeaderProps) {
  const { nested, flat } = props
  const colCount = flat.main.length
  const rowCount = getTreeDepth(nested.main) + 1
  const renderInfo = calculateRenderInfo(props, rowCount)

  const tbody = renderInfo.leveled.map((wrappedCols, level) => {
    const headerCells = wrappedCols.map((wrapped) => {
      if (wrapped.type === 'normal') {
        const headerCellProps = wrapped.col.headerCellProps ?? {}

        return (
          <th
            key={wrapped.colIndex}
            {...headerCellProps}
            className={cx(
              Classes.tableHeaderCell,
              {
                first: wrapped.colIndex === 0,
                last: wrapped.colIndex + wrapped.colSpan === colCount,
              },
              headerCellProps.className,
            )}
            colSpan={wrapped.colSpan}
            rowSpan={wrapped.isLeaf ? rowCount - level : undefined}
            style={{ textAlign: wrapped.col.align, ...headerCellProps.style }}
          >
            {wrapped.col.title ?? wrapped.col.name}
          </th>
        )
      } else {
        if (wrapped.width > 0) {
          return <th key={wrapped.blankSide} />
        } else {
          return null
        }
      }
    })

    return (
      <tr
        key={level}
        className={cx(Classes.tableHeaderRow, {
          first: level === 0,
          last: level === rowCount - 1,
        })}
      >
        {headerCells}
      </tr>
    )
  })

  return (
    <div className={Classes.tableHeader}>
      <table>
        <colgroup>
          {renderInfo.flat.map((wrapped) => {
            if (wrapped.type === 'blank') {
              if (wrapped.width > 0) {
                return <col key={wrapped.blankSide} style={{ width: wrapped.width }} />
              } else {
                return null
              }
            } else {
              return <col key={wrapped.colIndex} style={{ width: wrapped.width }} />
            }
          })}
        </colgroup>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  )
}
