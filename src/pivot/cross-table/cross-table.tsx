import React, { ReactNode } from 'react'
import { BaseTable, BaseTableProps } from '../../base-table'
import { CellProps } from '../../interfaces'
import buildCrossTable from './buildCrossTable'
import { ROW_KEY } from './constants'
import { CrossTableLeftMetaColumn, LeftCrossTreeNode, TopCrossTreeNode } from './interfaces'

export interface CrossTableProps extends Omit<BaseTableProps, 'dataSource' | 'columns' | 'primaryKey'> {
  leftTree: LeftCrossTreeNode[]
  topTree: TopCrossTreeNode[]

  leftTotalNode?: LeftCrossTreeNode
  topTotalNode?: TopCrossTreeNode
  leftMetaColumns?: CrossTableLeftMetaColumn[]

  getValue(leftNode: LeftCrossTreeNode, topNode: TopCrossTreeNode, leftDepth: number, topDepth: number): any
  render?(
    value: any,
    leftNode: LeftCrossTreeNode,
    topNode: TopCrossTreeNode,
    leftDepth: number,
    topDepth: number,
  ): ReactNode
  getCellProps?(
    value: any,
    leftNode: LeftCrossTreeNode,
    topNode: TopCrossTreeNode,
    leftDepth: number,
    topDepth: number,
  ): CellProps
}

CrossTable.defaultProps = {
  leftMetaColumns: [] as CrossTableLeftMetaColumn[],
}

export default function CrossTable({
  leftTree,
  leftTotalNode,
  topTree,
  topTotalNode,
  getValue,
  getCellProps,
  leftMetaColumns,
  render,
  ...others
}: CrossTableProps) {
  const { dataSource, columns } = buildCrossTable({
    // 有的时候 leftTree/topTree 是通过 node.children 传入的
    // 此时 leftTree/topTree 等于 null 和等于空数组是等价的
    // 故在这里兼容 leftTree/topTree 为空的情况
    leftTree: leftTree ?? [],
    topTree: topTree ?? [],
    leftTotalNode,
    topTotalNode,
    getValue,
    getCellProps,
    render,
    leftMetaColumns,
  })

  return <BaseTable {...others} primaryKey={ROW_KEY} dataSource={dataSource} columns={columns} />
}
