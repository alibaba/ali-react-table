import cx from 'classnames'
import React, { ReactNode } from 'react'
import { Classes } from './styles'

const defaultEmptyContent = (
  <>
    <img alt="empty-image" className="empty-image" src="//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg" />
    <div className="empty-tips">
      没有符合查询条件的数据
      <br />
      请修改条件后重新查询
    </div>
  </>
)

export interface EmptyContentConfig {
  visible: 'auto' | boolean
  content?: ReactNode
  height?: number
}

export interface EmptyTableProps {
  colgroup: React.ReactNode
  colSpan: number
  isLoading: boolean
  config: EmptyContentConfig
}

export default function EmptyTable({ colgroup, colSpan, isLoading, config }: EmptyTableProps) {
  const show = config.visible === true || (config.visible == 'auto' && !isLoading)

  return (
    <table>
      {colgroup}
      <tbody>
        <tr className={cx(Classes.tableRow, 'first', 'last', 'no-hover')} data-rowindex={0}>
          <td
            className={cx(Classes.tableCell, 'first', 'last')}
            colSpan={colSpan}
            style={{ height: config.height ?? 200 }}
          >
            {show && <div className={Classes.emptyWrapper}>{config.content ?? defaultEmptyContent}</div>}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
