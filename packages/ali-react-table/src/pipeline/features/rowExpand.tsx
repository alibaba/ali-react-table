import cx from 'classnames'
import React from 'react'
import { ExpansionCell, icons } from '../../common-views'
import { ArtColumn } from '../../interfaces'
import { internals } from '../../internals'
import { collectNodes, isLeafNode, mergeCellProps } from '../../utils'
import { flatMap } from '../../utils/others'
import { TablePipeline } from '../pipeline'

const rowExpandMeta = Symbol('row-expand-meta')

type ExpandMeta = {
  depth: 0 | 1
  isLeaf: boolean
  expanded?: boolean
}

function rowExpandRowPropsGetter(row: any) {
  const meta = row[rowExpandMeta]
  if (meta.depth === 0) {
    return { className: 'alternative' }
  }
  return {}
}

export interface RowExpandFeatureOptions {
  /** 非受控用法：默认展开的 keys */
  defaultOpenKeys?: string[]

  /** 受控用法：当前展开的 keys */
  openKeys?: string[]

  /** 受控用法：当前展开 keys 改变回调 */
  onChangeOpenKeys?(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void
}

export function rowExpand(opts: RowExpandFeatureOptions = {}) {
  return <P extends TablePipeline>(pipeline: P) => {
    const stateKey = 'rowExpand'
    const indents = pipeline.ctx.indents
    const textOffset = indents.iconIndent + indents.iconWidth + indents.iconGap

    const primaryKey = pipeline.ensurePrimaryKey('rowExpand') as string
    if (typeof primaryKey !== 'string') {
      throw new Error('rowExpand 仅支持字符串作为 primaryKey')
    }
    const openKeys: string[] = opts.openKeys ?? pipeline.state[stateKey] ?? opts.defaultOpenKeys ?? []
    const openKeySet = new Set(openKeys)

    const onChangeOpenKeys: RowExpandFeatureOptions['onChangeOpenKeys'] = (nextKeys, key, action) => {
      opts.onChangeOpenKeys?.(nextKeys, key, action)
      pipeline.setStateAtKey(stateKey, nextKeys, { key, action })
    }

    return pipeline
      .mapDataSource(processDataSource)
      .mapColumns(processColumns)
      .appendRowPropsGetter(rowExpandRowPropsGetter)

    function processDataSource(input: any[]) {
      return flatMap(input, (row) => {
        const isLeaf = isLeafNode(row)
        const expanded = openKeySet.has(row[primaryKey])

        const parentMeta: ExpandMeta = { depth: 0, isLeaf, expanded }
        if (isLeaf || !expanded) {
          return [{ [rowExpandMeta]: parentMeta, ...row }]
        } else {
          return [
            { [rowExpandMeta]: parentMeta, ...row },
            ...row.children.map((child: any) => ({
              [rowExpandMeta]: { depth: 1, isLeaf: true },
              ...child,
            })),
          ]
        }
      })
    }

    function processColumns(columns: ArtColumn[]) {
      if (columns.length === 0) {
        return columns
      }
      const columnFlatCount = collectNodes(columns, 'leaf-only').length
      const [firstCol, ...others] = columns

      const render = (value: any, record: any, recordIndex: number) => {
        const content = internals.safeRender(firstCol, record, recordIndex)
        if (record[rowExpandMeta] == null) {
          // 没有 meta 信息的话，就返回原先的渲染结果
          return content
        }

        const { depth, isLeaf, expanded } = record[rowExpandMeta] as ExpandMeta

        if (isLeaf) {
          return (
            <ExpansionCell className="expansion-cell leaf">
              <span style={{ marginLeft: textOffset }}>{content}</span>
            </ExpansionCell>
          )
        }

        const marginLeft = indents.iconIndent + depth * indents.indentSize
        const expandCls = expanded ? 'expanded' : 'collapsed'
        return (
          <ExpansionCell className={cx('expansion-cell', expandCls)}>
            <icons.CaretRight
              className={cx('expansion-icon', expandCls)}
              style={{ marginLeft, marginRight: indents.iconGap }}
            />
            {content}
          </ExpansionCell>
        )
      }

      const getCellProps = (value: any, record: any, rowIndex: number) => {
        const { isLeaf, expanded } = record[rowExpandMeta] as ExpandMeta
        const rowKey = record[primaryKey]

        let onClick: any
        if (!isLeaf) {
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
        }

        const prevProps = firstCol.getCellProps?.(value, record, rowIndex)
        return mergeCellProps(prevProps, {
          onClick,
          style: { cursor: isLeaf ? undefined : 'pointer' },
        })
      }

      return [
        {
          ...firstCol,
          title: (
            <div style={{ display: 'inline-block', marginLeft: textOffset }}>
              {internals.safeRenderHeader(firstCol)}
            </div>
          ),
          render,
          getCellProps,
          getSpanRect(value: any, record: any, rowIndex: number) {
            if (record[rowExpandMeta].depth === 0) {
              return { top: rowIndex, bottom: rowIndex + 1, left: 0, right: columnFlatCount }
            }
          },
        },
        ...others,
      ]
    }
  }
}
