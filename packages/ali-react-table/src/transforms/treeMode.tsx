import cx from 'classnames'
import React, { useState } from 'react'
import { ExpansionCell, icons, InlineFlexCell } from '../common-views'
import { ArtColumn, TableTransform } from '../interfaces'
import { internals } from '../internals'
import { treeMetaSymbol } from '../pipeline/features'
import { isLeafNode as standardIsLeafNode, mergeCellProps } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

const ICON_WIDTH = 16

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export interface TreeModeOptions {
  primaryKey: string
  openKeys: string[]
  onChangeOpenKeys(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void
  isLeafNode?(node: any, nodeMeta: { depth: number; expanded: boolean; rowKey: string }): boolean

  /** icon 的缩进值，一般为负数，此时 icon 将向左偏移. 默认为 -6 */
  iconIndent?: number
  /** icon 与右侧文本的距离，默认为 0 */
  iconGap?: number
  /** 每一级缩进产生的距离，默认为 16 */
  indentSize?: number

  clickArea?: 'cell' | 'content' | 'icon'
  treeMetaKey?: string | symbol
  stopClickEventPropagation?: boolean
}

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeTreeModeTransform({
  onChangeOpenKeys,
  openKeys,
  primaryKey,
  iconIndent = -6,
  iconGap = 0,
  indentSize = 16,
  isLeafNode = standardIsLeafNode,
  clickArea = 'cell',
  treeMetaKey = treeMetaSymbol,
  stopClickEventPropagation,
}: TreeModeOptions): TableTransform {
  warnTransformsDeprecated('makeTreeModeTransform')

  const openKeySet = new Set(openKeys)

  const toggle = (rowKey: string) => {
    const expanded = openKeySet.has(rowKey)
    if (expanded) {
      onChangeOpenKeys(
        openKeys.filter((key) => key !== rowKey),
        rowKey,
        'collapse',
      )
    } else {
      onChangeOpenKeys([...openKeys, rowKey], rowKey, 'expand')
    }
  }

  return ({ columns, dataSource }) => {
    return {
      columns: processColumns(columns),
      dataSource: processDataSource(dataSource),
    }

    function processDataSource(input: any[]) {
      const result: any[] = []
      dfs(input, 0)

      function dfs(nodes: any[], depth: number) {
        if (nodes == null) {
          return
        }
        for (const node of nodes) {
          const rowKey = node[primaryKey]
          const expanded = openKeySet.has(rowKey)

          const isLeaf = isLeafNode(node, { depth, expanded, rowKey })
          const treeMeta = { depth, isLeaf, expanded, rowKey }
          result.push({ [treeMetaKey]: treeMeta, ...node })

          if (!isLeaf && expanded) {
            dfs(node.children, depth + 1)
          }
        }
      }
      return result
    }

    function processColumns(columns: ArtColumn[]) {
      if (columns.length === 0) {
        return columns
      }
      const [firstCol, ...others] = columns

      const render = (value: any, record: any, recordIndex: number) => {
        const content = internals.safeRender(firstCol, record, recordIndex)
        if (record[treeMetaKey] == null) {
          // 没有 treeMeta 信息的话，就返回原先的渲染结果
          return content
        }

        const { rowKey, depth, isLeaf, expanded } = record[treeMetaKey]

        const indent = iconIndent + depth * indentSize

        if (isLeaf) {
          return (
            <InlineFlexCell className="expansion-cell leaf">
              <span style={{ marginLeft: indent + ICON_WIDTH + iconGap }}>{content}</span>
            </InlineFlexCell>
          )
        }

        const onClick = (e: React.MouseEvent) => {
          if (stopClickEventPropagation) {
            e.stopPropagation()
          }
          toggle(rowKey)
        }

        const expandCls = expanded ? 'expanded' : 'collapsed'
        return (
          <ExpansionCell
            className={cx('expansion-cell', expandCls)}
            style={{
              cursor: clickArea === 'content' ? 'pointer' : undefined,
            }}
            onClick={clickArea === 'content' ? onClick : undefined}
          >
            <icons.CaretRight
              className={cx('expansion-icon', expandCls)}
              style={{
                cursor: clickArea === 'icon' ? 'pointer' : undefined,
                marginLeft: indent,
                marginRight: iconGap,
              }}
              onClick={clickArea === 'icon' ? onClick : undefined}
            />
            {content}
          </ExpansionCell>
        )
      }

      const getCellProps = (value: any, record: any, rowIndex: number) => {
        const prevProps = internals.safeGetCellProps(firstCol, record, rowIndex)
        if (record[treeMetaKey] == null) {
          // 没有 treeMeta 信息的话，就返回原先的 cellProps
          return prevProps
        }

        const { isLeaf, rowKey } = record[treeMetaKey]
        if (isLeaf) {
          return prevProps
        }

        return mergeCellProps(prevProps, {
          onClick(e) {
            if (stopClickEventPropagation) {
              e.stopPropagation()
            }
            toggle(rowKey)
          },
          style: { cursor: 'pointer' },
        })
      }

      return [
        {
          ...firstCol,
          title: (
            <span style={{ marginLeft: iconIndent + ICON_WIDTH + iconGap }}>
              {internals.safeRenderHeader(firstCol)}
            </span>
          ),
          render,
          getCellProps: clickArea === 'cell' ? getCellProps : firstCol.getCellProps,
        },
        ...others,
      ]
    }
  }
}

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function useTreeModeTransform({
  defaultOpenKeys = [],
  ...others
}: Omit<TreeModeOptions, 'openKeys' | 'onChangeOpenKeys'> & { defaultOpenKeys?: string[] }) {
  const [openKeys, onChangeOpenKeys] = useState(defaultOpenKeys)
  return makeTreeModeTransform({
    openKeys,
    onChangeOpenKeys,
    ...others,
  })
}
