import cx from 'classnames'
import React, { ReactNode } from 'react'
import { ExpansionCell, icons } from '../../common-views'
import { ArtColumn } from '../../interfaces'
import { internals } from '../../internals'
import { collectNodes, mergeCellProps } from '../../utils'
import { flatMap } from '../../utils/others'
import { TablePipeline } from '../pipeline'

export interface RowDetailFeatureOptions {
  defaultOpenKeys?: string[]
  openKeys?: string[]
  onChangeOpenKeys?(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void
  renderDetail?(record: any): ReactNode
  getDetailKey?(record: any): string
  detailCellStyle?: React.CSSProperties
}

const rowDetailSymbol = Symbol('row-detail')

const fallbackRenderDetail = (row: any) => (
  <div>
    <b style={{ color: 'indianred' }}>
      设置 <code>rowDetail.renderDetail</code> 来自定义详情内容
    </b>
    <br />
    <span style={{ wordBreak: 'break-all' }}>ROW DETAIL of {JSON.stringify(row)}</span>
  </div>
)

export function rowDetail(opts: RowDetailFeatureOptions = {}) {
  return function rowDetailStep<P extends TablePipeline>(pipeline: P) {
    const stateKey = 'rowDetail'

    const hippoIndents = pipeline.ctx.indents

    const openKeys: string[] = opts.openKeys ?? pipeline.state[stateKey] ?? opts.defaultOpenKeys ?? []
    const onChangeOpenKeys: RowDetailFeatureOptions['onChangeOpenKeys'] = (nextKeys, key, action) => {
      opts.onChangeOpenKeys?.(nextKeys, key, action)
      pipeline.setStateAtKey(stateKey, nextKeys, { key, action })
    }

    const openKeySet = new Set(openKeys)
    const primaryKey = pipeline.ensurePrimaryKey('rowDetail') as string
    if (typeof primaryKey !== 'string') {
      throw new Error('rowDetail 仅支持字符串作为 primaryKey')
    }

    const getDetailKey = opts.getDetailKey ?? ((row) => row[primaryKey] + '_detail')
    const renderDetail = opts.renderDetail ?? fallbackRenderDetail

    return pipeline
      .dataSource(
        flatMap(pipeline.getDataSource(), (row) => {
          const expanded = openKeySet.has(row[primaryKey])
          return expanded ? [row, { ...row, [primaryKey]: getDetailKey(row), [rowDetailSymbol]: true }] : [row]
        }),
      )
      .columns(processColumns(pipeline.getColumns()))

    function processColumns(columns: ArtColumn[]) {
      if (columns.length === 0) {
        return columns
      }
      const columnFlatCount = collectNodes(columns, 'leaf-only').length
      const [firstCol, ...others] = columns

      const render = (value: any, record: any, recordIndex: number) => {
        if (record[rowDetailSymbol]) {
          return renderDetail(record)
        }

        const content = internals.safeRender(firstCol, record, recordIndex)
        const expanded = openKeySet.has(record[primaryKey])

        const expandCls = expanded ? 'expanded' : 'collapsed'
        return (
          <ExpansionCell className={cx('expansion-cell', expandCls)}>
            <icons.CaretRight
              className={cx('expansion-icon', expandCls)}
              style={{
                marginLeft: hippoIndents.iconIndent,
                marginRight: hippoIndents.iconGap,
              }}
            />
            {content}
          </ExpansionCell>
        )
      }

      const getCellProps = (value: any, record: any, recordIndex: number) => {
        if (record[rowDetailSymbol]) {
          return {
            style: {
              '--bgcolor': '#fbfbfb',
              '--cell-padding': `8px ${hippoIndents.textOffset}px`,
              overflow: 'hidden',
              ...opts.detailCellStyle,
            } as any,
          }
        }

        const rowKey = record[primaryKey]
        const expanded = openKeySet.has(rowKey)

        let onClick: any
        if (expanded) {
          onClick = () => {
            onChangeOpenKeys(
              openKeys.filter((key) => key !== rowKey),
              rowKey,
              'collapse',
            )
          }
        } else {
          onClick = () => {
            onChangeOpenKeys([...openKeys, rowKey], rowKey, 'expand')
          }
        }
        const prevProps = firstCol.getCellProps?.(value, record, recordIndex)
        return mergeCellProps(prevProps, { onClick, style: { cursor: 'pointer' } })
      }

      return [
        {
          ...firstCol,
          title: (
            <div
              style={{
                display: 'inline-block',
                marginLeft: hippoIndents.iconIndent + hippoIndents.iconWidth + hippoIndents.iconGap,
              }}
            >
              {internals.safeRenderHeader(firstCol)}
            </div>
          ),
          render,
          getCellProps,
          getSpanRect(value: any, record: any, rowIndex: number) {
            if (record[rowDetailSymbol]) {
              // detail 总是成一行
              return { top: rowIndex, bottom: rowIndex + 1, left: 0, right: columnFlatCount }
            }
          },
        },
        ...others,
      ]
    }
  }
}
