import React, { ReactNode } from 'react'
import { noop } from 'rxjs'
import { BaseTable, BaseTableProps } from '../../base-table'
import { CellProps } from '../../interfaces'
import { CrossTableLeftMetaColumn, LeftCrossTreeNode, ROW_KEY, TopCrossTreeNode } from '../cross-table'
import buildCrossTreeTable from './buildCrossTreeTable'

export interface CrossTreeTableProps extends Omit<BaseTableProps, 'dataSource' | 'columns' | 'primaryKey'> {
  primaryColumn: CrossTableLeftMetaColumn
  leftTree: LeftCrossTreeNode[]
  topTree: TopCrossTreeNode[]

  defaultOpenKeys?: string[]
  openKeys?: string[]
  onChangeOpenKeys?(nextOpenKeys: string[]): void
  indentSize?: number
  isLeafNode?(node: any, nodeMeta: { depth: number; expanded: boolean; rowKey: string }): boolean

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

export default class CrossTreeTable extends React.Component<CrossTreeTableProps, { openKeys: string[] }> {
  static defaultProps = {
    defaultOpenKeys: [] as string[],
    onChangeOpenKeys: noop,
  }

  static getDerivedStateFromProps(nextProps: Readonly<CrossTreeTableProps>) {
    if ('openKeys' in nextProps) {
      return { openKeys: nextProps.openKeys }
    }
    return null
  }

  constructor(props: Readonly<CrossTreeTableProps>) {
    super(props)
    this.state = {
      openKeys: props.defaultOpenKeys,
    }
  }

  onChangeOpenKeys = (nextOpenKeys: string[]) => {
    this.props.onChangeOpenKeys(nextOpenKeys)
    if (!('openKeys' in this.props)) {
      this.setState({ openKeys: nextOpenKeys })
    }
  }

  render() {
    const {
      leftTree,
      topTree,
      getValue,
      getCellProps,
      primaryColumn,
      render,

      openKeys: openKeysProp,
      defaultOpenKeys,
      onChangeOpenKeys,
      indentSize,
      isLeafNode,

      ...others // 透传其他 BaseTable 的 props
    } = this.props

    const openKeys = openKeysProp ?? this.state.openKeys

    const { dataSource, columns } = buildCrossTreeTable({
      // 有的时候 leftTree/topTree 是通过 node.children 传入的
      // 此时 leftTree/topTree 等于 null 和等于空数组是等价的
      // 故在这里兼容 leftTree/topTree 为空的情况
      leftTree: leftTree ?? [],
      topTree: topTree ?? [],
      getValue,
      getCellProps,
      render,
      primaryColumn,

      openKeys,
      onChangeOpenKeys: this.onChangeOpenKeys,
      indentSize,
      isLeafNode,
    })

    return <BaseTable {...others} primaryKey={ROW_KEY} dataSource={dataSource} columns={columns} />
  }
}
