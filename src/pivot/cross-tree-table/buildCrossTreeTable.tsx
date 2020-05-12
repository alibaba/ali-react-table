import React from 'react'
import { BaseTableProps } from '../../base-table'
import { treeMode } from '../../biz/common-transforms'
import { isLeafNode } from '../../common-utils'
import { ArtColumn } from '../../interfaces'
import {
  BuildCrossTableOptions,
  CrossTableLeftMetaColumn,
  LeftCrossTreeNode,
  ROW_KEY,
  TopCrossTreeNode,
} from '../cross-table'

interface CrossTreeTableRenderRow {
  [ROW_KEY]: string
  nodes: LeftCrossTreeNode[]
  children?: CrossTreeTableRenderRow[]
}

export type BuildCrossTreeTableOptions = Omit<
  BuildCrossTableOptions,
  'leftMetaColumns' | 'leftTotalNode' | 'topTotalNode'
> & {
  primaryColumn: CrossTableLeftMetaColumn
  openKeys: string[]
  onChangeOpenKeys(nextOpenKeys: string[]): void
}

// TODO 根据 openKeys 来减少 dataSource 的计算量

export default function buildCrossTreeTable(
  options: BuildCrossTreeTableOptions,
): Pick<BaseTableProps, 'columns' | 'dataSource'> {
  const { leftTree, topTree, primaryColumn, openKeys, onChangeOpenKeys } = options

  return treeMode({ primaryKey: ROW_KEY, openKeys, onChangeOpenKeys })({
    columns: getColumns(),
    dataSource: getDataSource(),
  })

  /** 获取表格的列配置 */
  function getColumns(): ArtColumn[] {
    return [
      {
        ...primaryColumn,
        getValue(row: CrossTreeTableRenderRow) {
          return row.nodes[row.nodes.length - 1].value
        },
      },
      ...getDataPartColumns(),
    ]

    /** 获取表格数据部分的列配置 */
    function getDataPartColumns() {
      return dfs(topTree, { depth: 0 })

      function dfs(nodes: TopCrossTreeNode[], ctx: { depth: number }): ArtColumn[] {
        const result: ArtColumn[] = []

        for (const node of nodes) {
          if (isLeafNode(node)) {
            result.push(getDataColumn(node, ctx.depth))
          } else {
            const { key, value, children, ...others } = node
            result.push({
              ...others,
              name: value,
              children: dfs(children, { depth: ctx.depth + 1 }),
            })
          }
        }

        return result
      }
    }

    function getDataColumn(topNode: TopCrossTreeNode, topDepth: number): ArtColumn {
      const columnGetValue = (row: CrossTreeTableRenderRow) => {
        const leftDepth = row.nodes.length - 1
        const leftNode = row.nodes[leftDepth]
        return options.getValue(leftNode, topNode, leftDepth, topDepth)
      }
      const { key, value, children, ...others } = topNode
      return {
        ...others,
        getValue: columnGetValue,
        name: value,
        children: null,
        render(value: any, row: CrossTreeTableRenderRow) {
          if (options.render) {
            const leftDepth = row.nodes.length - 1
            const leftNode = row.nodes[leftDepth]
            return options.render(value, leftNode, topNode, leftDepth, topDepth)
          }
          return value
        },
        getCellProps(value, row: CrossTreeTableRenderRow) {
          if (options.getCellProps) {
            const leftDepth = row.nodes.length - 1
            const leftNode = row.nodes[leftDepth]
            return options.getCellProps(value, leftNode, topNode, leftDepth, topDepth)
          }
        },
      }
    }
  }

  function getDataSource(): CrossTreeTableRenderRow[] {
    return dfs(leftTree, { nodes: [] })

    function dfs(nodes: LeftCrossTreeNode[], ctx: { nodes: LeftCrossTreeNode[] }): CrossTreeTableRenderRow[] {
      const result: CrossTreeTableRenderRow[] = []

      for (const node of nodes) {
        if (node.hidden) {
          // 跳过被隐藏的节点
          continue
        }

        if (isLeafNode(node)) {
          result.push({
            [ROW_KEY]: node.key,
            nodes: [...ctx.nodes, node],
          })
        } else {
          const nodes = [...ctx.nodes, node]
          ctx.nodes.push(node)
          const children = dfs(node.children, ctx)
          result.push({ [ROW_KEY]: node.key, nodes, children })
          ctx.nodes.pop()
        }
      }

      return result
    }
  }
}
