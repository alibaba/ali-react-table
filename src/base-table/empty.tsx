import cx from 'classnames'
import React, { ReactNode } from 'react'
import { Classes, Styled } from './styles'

EmptyTable.defaultProps = {
  emptyContent: (
    <>
      <img alt="empty-image" className="empty-image" src="//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg" />
      <div className="empty-tips">
        没有符合查询条件的数据
        <br />
        请修改条件后重新查询
      </div>
    </>
  ),
}

export default function EmptyTable({
  colgroup,
  colSpan,
  isLoading,
  emptyContent,
}: {
  colgroup: React.ReactNode
  colSpan: number
  isLoading: boolean
  emptyContent: ReactNode
}) {
  return (
    <table>
      {colgroup}
      <tbody>
        <tr className={cx(Classes.tableRow, 'first', 'last')} data-rowindex={0}>
          <td
            className={cx(Classes.tableCell, 'first', 'last')}
            colSpan={colSpan}
            style={{ height: 200, background: 'var(--bgcolor)' }}
          >
            {!isLoading && <Styled.EmptyWrapper className={Classes.emptyWrapper}>{emptyContent}</Styled.EmptyWrapper>}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
