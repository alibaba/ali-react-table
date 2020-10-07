import cx from 'classnames'
import React, { useState } from 'react'
import { ExpansionCell, icons } from '../common-views'
import { ArtColumn, TableTransform } from '../interfaces'
import { internals } from '../internals'
import { isLeafNode as standardIsLeafNode, mergeCellProps } from '../utils'

export const treeMetaSymbol = Symbol('treeMetaSymbol')

const ICON_WIDTH = 16

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
}

export function makeTreeModeTransform({
  onChangeOpenKeys,
  openKeys,
  primaryKey,
  iconIndent = -6,
  iconGap = 0,
  indentSize = 16,
  isLeafNode = standardIsLeafNode,
}: TreeModeOptions): TableTransform {
  const openKeySet = new Set(openKeys)

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
          result.push({ [treeMetaSymbol]: treeMeta, ...node })

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
        if (record[treeMetaSymbol] == null) {
          // 没有 treeMeta 信息的话，就返回原先的渲染结果
          return content
        }

        const { depth, isLeaf, expanded } = record[treeMetaSymbol]

        const indent = iconIndent + depth * indentSize

        if (isLeaf) {
          return (
            <ExpansionCell className="expansion-cell leaf">
              <span style={{ marginLeft: indent + ICON_WIDTH + iconGap }}>{content}</span>
            </ExpansionCell>
          )
        }

        const expandCls = expanded ? 'expanded' : 'collapsed'
        return (
          <ExpansionCell className={cx('expansion-cell', expandCls)}>
            <icons.CaretRight
              className={cx('expansion-icon', expandCls)}
              style={{ marginLeft: indent, marginRight: iconGap }}
            />
            {content}
          </ExpansionCell>
        )
      }

      const getCellProps = (value: any, record: any, rowIndex: number) => {
        if (record[treeMetaSymbol] == null) {
          // 没有 treeMeta 信息的话，就返回原先的 cellProps
          return internals.safeGetCellProps(firstCol, record, rowIndex)
        }

        const { isLeaf, rowKey, expanded } = record[treeMetaSymbol]

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
            <span style={{ marginLeft: iconIndent + ICON_WIDTH + iconGap }}>
              {internals.safeRenderHeader(firstCol)}
            </span>
          ),
          render,
          getCellProps,
        },
        ...others,
      ]
    }
  }
}

export function useTreeModeTransform({
  isLeafNode,
  indentSize,
  primaryKey,
  defaultOpenKeys = [],
  iconGap,
  iconIndent,
}: Omit<TreeModeOptions, 'openKeys' | 'onChangeOpenKeys'> & { defaultOpenKeys?: string[] }) {
  const [openKeys, onChangeOpenKeys] = useState(defaultOpenKeys)
  return makeTreeModeTransform({ indentSize, primaryKey, isLeafNode, iconGap, iconIndent, openKeys, onChangeOpenKeys })
}
