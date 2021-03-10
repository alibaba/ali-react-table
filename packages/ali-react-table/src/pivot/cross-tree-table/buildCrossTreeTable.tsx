import React from 'react'
import { noop } from 'rxjs'
import { BaseTableProps } from '../../base-table'
import { features, TablePipeline } from '../../pipeline'
import { isLeafNode as standardIsLeafNode } from '../../utils'
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
  node: LeftCrossTreeNode
  nodes: LeftCrossTreeNode[]
  children?: CrossTreeTableRenderRow[]
}

export type BuildCrossTreeTableOptions = Omit<
  BuildCrossTableOptions,
  'leftMetaColumns' | 'leftTotalNode' | 'topTotalNode'
> & {
  primaryColumn?: CrossTableLeftMetaColumn
  openKeys: string[]
  onChangeOpenKeys(nextOpenKeys: string[]): void
  indentSize?: number
  isLeafNode?(node: any, nodeMeta: { depth: number; expanded: boolean; rowKey: string }): boolean
}

export default function buildCrossTreeTable(
  options: BuildCrossTreeTableOptions,
): Pick<BaseTableProps, 'columns' | 'dataSource'> {
  const {
    primaryColumn = { name: '' },
    openKeys,
    onChangeOpenKeys,
    indentSize,
    isLeafNode: isLeafNodeOpt = standardIsLeafNode,
  } = options

  // 有的时候 leftTree/topTree 是通过 node.children 传入的
  // 此时 leftTree/topTree 等于 null 和等于空数组是等价的
  // 故在这里兼容 leftTree/topTree 为空的情况
  const leftTree = options.leftTree ?? []
  const topTree = options.topTree ?? []

  const pipeline = new TablePipeline({
    state: {},
    setState: noop,
    ctx: { primaryKey: ROW_KEY },
  })

  pipeline.input({ dataSource: getDataSource(), columns: getColumns() })
  pipeline.use(
    features.treeMode({
      openKeys,
      onChangeOpenKeys,
      indentSize,
      isLeafNode(row: CrossTreeTableRenderRow, nodeMeta) {
        // 调用上层 isLeafNodeOpt 时，会从 row.node 中读取该表格行对应的 leftTreeNode
        return isLeafNodeOpt(row.node, nodeMeta)
      },
    }),
  )

  return {
    dataSource: pipeline.getDataSource(),
    columns: pipeline.getColumns(),
  }

  /** 获取表格的列配置 */
  function getColumns(): ArtColumn[] {
    return [
      {
        ...primaryColumn,
        getValue(row: CrossTreeTableRenderRow) {
          return row.node.value
        },
        getCellProps(value: any, row: any) {
          if (primaryColumn.getCellProps) {
            return primaryColumn.getCellProps(row.node, row.nodes.length - 1)
          }
        },
        render(value: any, row: any) {
          if (primaryColumn.render) {
            return primaryColumn.render(row.node, row.nodes.length - 1)
          }
          return value
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
          if (standardIsLeafNode(node)) {
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
        const leftNode = row.node
        if (options.getValue) {
          return options.getValue(leftNode, topNode, leftDepth, topDepth)
        }
        return null
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
            const leftNode = row.node
            return options.render(value, leftNode, topNode, leftDepth, topDepth)
          }
          return value
        },
        getCellProps(value, row: CrossTreeTableRenderRow) {
          if (options.getCellProps) {
            const leftDepth = row.nodes.length - 1
            const leftNode = row.node
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

        if (standardIsLeafNode(node)) {
          result.push({
            [ROW_KEY]: node.key,
            node,
            nodes: [...ctx.nodes, node],
          })
        } else {
          const nodes = [...ctx.nodes, node]
          ctx.nodes.push(node)
          const children = dfs(node.children, ctx)
          result.push({ [ROW_KEY]: node.key, node, nodes, children })
          ctx.nodes.pop()
        }
      }

      return result
    }
  }
}
