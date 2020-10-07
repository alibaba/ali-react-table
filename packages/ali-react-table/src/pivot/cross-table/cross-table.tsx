import React from 'react'
import { BaseTable, BaseTableProps } from '../../base-table'
import { CellProps } from '../../interfaces'
import buildCrossTable from './buildCrossTable'
import { ROW_KEY } from './constants'
import { CrossTableLeftMetaColumn, LeftCrossTreeNode, TopCrossTreeNode } from './interfaces'

export interface CrossTableProps extends Omit<BaseTableProps, 'dataSource' | 'columns' | 'primaryKey'> {
  baseTableRef?: React.Ref<BaseTable>
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
  ): React.ReactNode
  getCellProps?(
    value: any,
    leftNode: LeftCrossTreeNode,
    topNode: TopCrossTreeNode,
    leftDepth: number,
    topDepth: number,
  ): CellProps
}

export default (function CrossTable({
  leftTree,
  leftTotalNode,
  topTree,
  topTotalNode,
  getValue,
  getCellProps,
  leftMetaColumns,
  render,
  baseTableRef,
  ...others
}: CrossTableProps) {
  const { dataSource, columns } = buildCrossTable({
    leftTree,
    topTree,
    leftTotalNode,
    topTotalNode,
    getValue,
    getCellProps,
    render,
    leftMetaColumns,
  })

  return <BaseTable ref={baseTableRef} {...others} primaryKey={ROW_KEY} dataSource={dataSource} columns={columns} />
})
