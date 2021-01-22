import cx from 'classnames'
import React, { CSSProperties, ReactNode } from 'react'
import { ArtColumn } from '../interfaces'
import { internals } from '../internals'
import { Colgroup } from './colgroup'
import SpanManager from './helpers/SpanManager'
import { RenderInfo } from './interfaces'
import { Classes } from './styles'
import { BaseTableProps } from './table'

export interface HtmlTableProps extends Required<Pick<BaseTableProps, 'getRowProps' | 'primaryKey'>> {
  tbodyHtmlTag: 'tbody' | 'tfoot'
  data: any[]

  horizontalRenderInfo: Pick<
    RenderInfo,
    'flat' | 'visible' | 'horizontalRenderRange' | 'stickyLeftMap' | 'stickyRightMap'
  >

  verticalRenderInfo: {
    offset: number
    first: number
    last: number
    limit: number
  }
}

export function HtmlTable({
  tbodyHtmlTag,
  getRowProps,
  primaryKey,
  data,
  verticalRenderInfo: verInfo,
  horizontalRenderInfo: hozInfo,
}: HtmlTableProps) {
  const { flat, horizontalRenderRange: hoz } = hozInfo

  const spanManager = new SpanManager()
  const fullFlatCount = flat.full.length
  const leftFlatCount = flat.left.length
  const rightFlatCount = flat.right.length

  return (
    <table>
      <Colgroup descriptors={hozInfo.visible} />
      {React.createElement(tbodyHtmlTag, null, data.map(renderRow))}
    </table>
  )

  function renderRow(record: any, i: number) {
    const rowIndex = verInfo.offset + i
    spanManager.stripUpwards(rowIndex)

    const rowProps = getRowProps(record, rowIndex)
    const rowClass = cx(
      Classes.tableRow,
      {
        first: rowIndex === verInfo.first,
        last: rowIndex === verInfo.last,
        even: rowIndex % 2 === 0,
        odd: rowIndex % 2 === 1,
      },
      rowProps?.className,
    )

    return (
      <tr
        {...rowProps}
        className={rowClass}
        key={internals.safeGetRowKey(primaryKey, record, rowIndex)}
        data-rowindex={rowIndex}
      >
        {hozInfo.visible.map((descriptor) => {
          if (descriptor.type === 'blank') {
            return <td key={descriptor.blankSide} />
          }
          return renderBodyCell(record, rowIndex, descriptor.col, descriptor.colIndex)
        })}
      </tr>
    )
  }

  function renderBodyCell(record: any, rowIndex: number, column: ArtColumn, colIndex: number) {
    if (spanManager.testSkip(rowIndex, colIndex)) {
      return null
    }

    const value = internals.safeGetValue(column, record, rowIndex)
    const cellProps = column.getCellProps?.(value, record, rowIndex) ?? {}

    let cellContent: ReactNode = value
    if (column.render) {
      cellContent = column.render(value, record, rowIndex)
    }

    let colSpan = 1
    let rowSpan = 1
    if (column.getSpanRect) {
      const spanRect = column.getSpanRect(value, record, rowIndex)
      colSpan = spanRect == null ? 1 : spanRect.right - colIndex
      rowSpan = spanRect == null ? 1 : spanRect.bottom - rowIndex
    } else {
      if (cellProps.colSpan != null) {
        colSpan = cellProps.colSpan
      }
      if (cellProps.rowSpan != null) {
        rowSpan = cellProps.rowSpan
      }
    }

    // rowSpan/colSpan 不能过大，避免 rowSpan/colSpan 影响因虚拟滚动而未渲染的单元格
    rowSpan = Math.min(rowSpan, verInfo.limit - rowIndex)
    colSpan = Math.min(colSpan, leftFlatCount + hoz.rightIndex - colIndex)

    const hasSpan = colSpan > 1 || rowSpan > 1
    if (hasSpan) {
      spanManager.add(rowIndex, colIndex, colSpan, rowSpan)
    }

    const positionStyle: CSSProperties = {}

    if (colIndex < leftFlatCount) {
      positionStyle.position = 'sticky'
      positionStyle.left = hozInfo.stickyLeftMap.get(colIndex)
    } else if (colIndex >= fullFlatCount - rightFlatCount) {
      positionStyle.position = 'sticky'
      positionStyle.right = hozInfo.stickyRightMap.get(colIndex)
    }

    return React.createElement(
      'td',
      {
        key: colIndex,
        ...cellProps,
        className: cx(Classes.tableCell, cellProps.className, {
          first: colIndex === 0,
          last: colIndex + colSpan === fullFlatCount,
          'lock-left': colIndex < leftFlatCount,
          'lock-right': colIndex >= fullFlatCount - rightFlatCount,
        }),
        ...(hasSpan ? { colSpan, rowSpan } : null),
        style: {
          textAlign: column.align,
          ...cellProps.style,
          ...positionStyle,
        },
      },
      cellContent,
    )
  }
}
