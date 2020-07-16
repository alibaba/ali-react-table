import cx from 'classnames'
import React, { ComponentType, ReactNode } from 'react'
import styled from 'styled-components'
import { BaseTable, BaseTableProps, Classes } from '../../base-table'
import { CellProps } from '../../interfaces'
import buildCrossTable from './buildCrossTable'
import { CrossTableClasses, ROW_KEY } from './constants'
import { CrossTableLeftMetaColumn, LeftCrossTreeNode, TopCrossTreeNode } from './interfaces'

export const StyledBaseTableForCrossTable: ComponentType<BaseTableProps> = styled(BaseTable)`
  // 使 art-table 默认的 hover 效果失效
  .${Classes.tableBody} tr.hovered {
    background-color: inherit;
  }

  .${Classes.tableBody} td.${CrossTableClasses.leftHeaderCell} {
    vertical-align: center;
    padding-top: 16px;
  }

  .${CrossTableClasses.topHeaderCell} {
    min-height: 24px;
    display: flex;
    align-items: center;
  }

  &.compact {
    .${Classes.tableCell} {
      height: 36px;
    }
    .${Classes.tableBody} td.${CrossTableClasses.leftHeaderCell} {
      padding-top: 8px;
    }
  }
` as any

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
  className,
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

  return (
    <StyledBaseTableForCrossTable
      {...others}
      dataSource={dataSource}
      columns={columns}
      primaryKey={ROW_KEY}
      className={cx('compact', className)}
    />
  )
}
