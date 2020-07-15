import cx from 'classnames'
import React from 'react'
import { BaseTableProps } from '../../base-table'
import { getTreeDepth, isLeafNode } from '../../utils'
import { ArtColumn, SpanRect } from '../../interfaces'
import { CrossTableClasses, ROW_KEY } from './constants'
import { CrossTableProps } from './cross-table'
import { CrossTableLeftMetaColumn, LeftCrossTreeNode, TopCrossTreeNode } from './interfaces'
import {
  CrossTableDataColumn,
  CrossTableDataParentColumn,
  CrossTableLeftColumn,
  CrossTableRenderColumn,
} from './internals'

interface CrossTableRenderRow {
  [ROW_KEY]: string

  /** 行上所有左侧单元格 的合并信息 */
  rects: SpanRect[]

  /** 行上所有左侧单元格 上的树节点 */
  nodes: LeftCrossTreeNode[]
}

export interface BuildCrossTableOptions {
  leftTree: LeftCrossTreeNode[]
  topTree: TopCrossTreeNode[]
  leftTotalNode?: LeftCrossTreeNode
  topTotalNode?: TopCrossTreeNode
  leftMetaColumns: CrossTableLeftMetaColumn[]
  getValue: CrossTableProps['getValue']
  render?: CrossTableProps['render']
  getCellProps?: CrossTableProps['getCellProps']
}

export default function buildCrossTable(
  options: BuildCrossTableOptions,
): Pick<BaseTableProps, 'columns' | 'dataSource'> {
  const { leftTree, topTree, leftTotalNode, topTotalNode, leftMetaColumns } = options

  const leftHeaderWidth = Math.max(leftMetaColumns.length, getTreeDepth(leftTree) + 1)

  return {
    columns: getColumns(),
    dataSource: getDataSource(),
  }

  /** 获取表格的列配置 */
  function getColumns(): CrossTableRenderColumn[] {
    return [...getLeftPartColumns(), ...getDataPartColumns()]

    function getLeftPartColumns(): CrossTableRenderColumn[] {
      const leftPartColumns: CrossTableLeftColumn[] = []
      for (let index = 0; index < leftHeaderWidth; index++) {
        const metaCol = leftMetaColumns[index] ?? ({} as CrossTableLeftMetaColumn)
        const { getCellProps, render, ...staticMetaColConfig } = metaCol
        leftPartColumns.push({
          columnType: 'left',
          lock: true,
          ...staticMetaColConfig,
          getCellProps: leftHeaderGetCellPropsFactory(metaCol, index),
          getSpanRect: leftHeaderGetSpanRectFactory(metaCol, index),
          getValue: leftHeaderGetValueFactory(metaCol, index),
          render: leftHeaderRenderFactory(metaCol, index),
        })
      }
      return leftPartColumns

      function leftHeaderGetCellPropsFactory(
        metaCol: CrossTableLeftMetaColumn,
        colIndex: number,
      ): ArtColumn['getCellProps'] {
        return (_value: any, row: CrossTableRenderRow, rowIndex: number) => {
          const node = row.nodes[colIndex]
          const customProps = metaCol.getCellProps?.(node, colIndex)

          return {
            className: cx(CrossTableClasses.leftHeaderCell, customProps?.className),
            ...customProps,
          }
        }
      }

      function leftHeaderGetSpanRectFactory(
        metaCol: CrossTableLeftMetaColumn,
        colIndex: number,
      ): ArtColumn['getSpanRect'] {
        return (_value: any, row: CrossTableRenderRow) => row.rects[colIndex]
      }

      function leftHeaderGetValueFactory(metaCol: CrossTableLeftMetaColumn, colIndex: number) {
        return (row: CrossTableRenderRow, rowIndex: number) => {
          const node = row.nodes[colIndex]
          return node.value
        }
      }

      function leftHeaderRenderFactory(metaCol: CrossTableLeftMetaColumn, colIndex: number) {
        return (v: any, row: CrossTableRenderRow, rowIndex: number) => {
          const node = row.nodes[colIndex]
          if (metaCol.render) {
            return metaCol.render(node, colIndex)
          }
          return node.title ?? node.value
        }
      }
    }

    /** 获取表格数据部分的列配置 */
    function getDataPartColumns() {
      type Ctx = { valuePath: string[]; depth: number }

      if (topTree.length > 0) {
        return dfs(topTree, { valuePath: [], depth: 0 })
      } else if (topTotalNode) {
        return dfs([topTotalNode], { valuePath: [], depth: 0 })
      } else {
        return []
      }

      function dfs(nodes: TopCrossTreeNode[], ctx: Ctx): (CrossTableDataColumn | CrossTableDataParentColumn)[] {
        const result: (CrossTableDataColumn | CrossTableDataParentColumn)[] = []

        for (const node of nodes) {
          ctx.valuePath.push(node.value)

          if (isLeafNode(node)) {
            // 叶子节点
            result.push(getDataColumn(node, ctx.depth))
          } else {
            const { key, value, children, ...others } = node
            // 强制展开的节点
            result.push({
              columnType: 'data-parent',
              ...others,
              name: value,
              children: dfs(children, { valuePath: ctx.valuePath, depth: ctx.depth + 1 }),
            })
          }

          ctx.valuePath.pop()
        }

        return result
      }
    }

    function getDataColumn(topNode: TopCrossTreeNode, topDepth: number): CrossTableDataColumn {
      const columnGetValue = (row: CrossTableRenderRow) => {
        const leftDepth = row.nodes.length - 1
        const leftNode = row.nodes[leftDepth]
        return options.getValue(leftNode, topNode, leftDepth, topDepth)
      }
      const { key, value, children, ...others } = topNode
      return {
        columnType: 'data',
        ...others,
        getValue: columnGetValue,
        name: value,
        children: null,
        render(value: any, row: CrossTableRenderRow) {
          if (options.render) {
            const leftDepth = row.nodes.length - 1
            const leftNode = row.nodes[leftDepth]
            return options.render(value, leftNode, topNode, leftDepth, topDepth)
          }
          return value
        },
        getCellProps(value, row: CrossTableRenderRow) {
          if (options.getCellProps) {
            const leftDepth = row.nodes.length - 1
            const leftNode = row.nodes[leftDepth]
            return options.getCellProps(value, leftNode, topNode, leftDepth, topDepth)
          }
        },
      }
    }
  }

  function getDataSource(): CrossTableRenderRow[] {
    type DfsCtx = {
      depth: number
      rects: SpanRect[]
      nodes: LeftCrossTreeNode[]
      rowIndex: number
    }

    const flatRows: CrossTableRenderRow[] = []
    const ctx: DfsCtx = { depth: 0, nodes: [], rects: [], rowIndex: 0 }

    if (leftTree.length > 0) {
      dfs(leftTree, ctx)
    } else if (leftTotalNode) {
      dfs([leftTotalNode], ctx)
    } // else 表格没有行，展示空表格

    return flatRows

    function dfs(nodes: LeftCrossTreeNode[], ctx: DfsCtx): { count: number } {
      let count = 0

      for (const node of nodes) {
        if (node.hidden) {
          // 跳过被隐藏的节点
          continue
        }

        const rect: SpanRect = {
          top: ctx.rowIndex + count,
          bottom: -1, // 会在 dfs 之后算出结果
          left: ctx.depth,
          right: -1, // 会在 dfs 之后算出结果
        }
        const row: CrossTableRenderRow = {
          [ROW_KEY]: node.key,
          rects: [...ctx.rects, rect],
          nodes: [...ctx.nodes, node],
        }

        if (isLeafNode(node)) {
          rect.right = leftHeaderWidth
          rect.bottom = rect.top + 1
          flatRows.push(row)
          count += 1
        } else {
          ctx.rects.push(rect)
          ctx.nodes.push(node)
          const ret = dfs(node.children, {
            nodes: ctx.nodes,
            rects: ctx.rects,
            depth: ctx.depth + 1,
            rowIndex: ctx.rowIndex + count,
          })
          ctx.rects.pop()
          ctx.nodes.pop()

          count += ret.count

          rect.right = rect.left + 1
          rect.bottom = rect.top + ret.count
        }
      }

      return { count }
    }
  }
}
