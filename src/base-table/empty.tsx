import React, { ReactNode } from 'react'
import { Classes, Styled } from './styles'

EmptyTable.defaultProps = {
  emptyContent: (
    <>
      <img
        alt="empty-image"
        className={Classes.emptyImage}
        src="//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"
      />
      <div className={Classes.emptyTips}>
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
        <tr>
          <Styled.EmptyTableCell className={Classes.emptyTableCell} colSpan={colSpan}>
            {!isLoading && <Styled.EmptyWrapper className={Classes.emptyWrapper}>{emptyContent}</Styled.EmptyWrapper>}
          </Styled.EmptyTableCell>
        </tr>
      </tbody>
    </table>
  )
}
