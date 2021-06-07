import cx from 'classnames'
import React, { CSSProperties, ReactNode } from 'react'
import { ArtColumn } from '../interfaces'
import { internals } from '../internals'
import { Colgroup } from './colgroup'
import SpanManager from './helpers/SpanManager'
import { RenderInfo } from './interfaces'
import { Classes } from './styles'
import { BaseTableProps } from './table'

export interface HtmlTableProps extends Required<Pick<BaseTableProps, 'getRowProps' | 'primaryKey' | 'components'>> {
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
  components: { Row, Cell, TableBody },
}: HtmlTableProps) {
  const { flat, horizontalRenderRange: hoz } = hozInfo

  const spanManager = new SpanManager()
  const fullFlatCount = flat.full.length
  const leftFlatCount = flat.left.length
  const rightFlatCount = flat.right.length

  const tbody =
    TableBody != null && tbodyHtmlTag === 'tbody' ? (
      <TableBody tbodyProps={{ children: data.map(renderRow) }} />
    ) : (
      React.createElement(tbodyHtmlTag, null, data.map(renderRow))
    )

  return (
    <table>
      <Colgroup descriptors={hozInfo.visible} />
      {tbody}
    </table>
  )

  function renderRow(row: any, i: number) {
    const rowIndex = verInfo.offset + i
    spanManager.stripUpwards(rowIndex)

    const rowProps = getRowProps(row, rowIndex)
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

    const trProps = {
      ...rowProps,
      className: rowClass,
      'data-rowindex': rowIndex,
      children: hozInfo.visible.map((descriptor) => {
        if (descriptor.type === 'blank') {
          return <td key={descriptor.blankSide} />
        }
        return renderBodyCell(row, rowIndex, descriptor.col, descriptor.colIndex)
      }),
    }

    const key = internals.safeGetRowKey(primaryKey, row, rowIndex)
    if (Row != null && tbodyHtmlTag === 'tbody') {
      return React.createElement(Row, { key, row, rowIndex, trProps })
    } else {
      return <tr key={key} {...trProps} />
    }
  }

  function renderBodyCell(row: any, rowIndex: number, column: ArtColumn, colIndex: number) {
    if (spanManager.testSkip(rowIndex, colIndex)) {
      return null
    }

    const value = internals.safeGetValue(column, row, rowIndex)
    const cellProps = column.getCellProps?.(value, row, rowIndex) ?? {}

    let cellContent: ReactNode = value
    if (column.render) {
      cellContent = column.render(value, row, rowIndex)
    }

    let colSpan = 1
    let rowSpan = 1
    if (column.getSpanRect) {
      const spanRect = column.getSpanRect(value, row, rowIndex)
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

    const tdProps = {
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
      children: cellContent,
    }

    if (Cell != null && tbodyHtmlTag === 'tbody') {
      return <Cell key={colIndex} tdProps={tdProps} row={row} rowIndex={rowIndex} column={column} colIndex={colIndex} />
    } else {
      return <td key={colIndex} {...tdProps} />
    }
  }
}
