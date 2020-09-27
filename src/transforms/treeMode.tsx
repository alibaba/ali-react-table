import * as CarbonIcons from '@carbon/icons-react'
import cx from 'classnames'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ArtColumn, TableTransform } from '../interfaces'
import { safeRender } from '../internals'
import { isLeafNode as standardIsLeafNode, mergeCellProps } from '../utils'

const ExpansionCell = styled.div`
  display: flex;
  align-items: center;

  &.leaf {
    cursor: default;
  }

  .expansion-icon {
    fill: #999;
    flex: 0 0 16px;
    transition: transform 200ms;

    &.expanded {
      transform-origin: center center;
      transform: rotate(90deg);
    }
  }
`

export const treeMetaSymbol = Symbol('treeMetaSymbol')

const ICON_WIDTH = 16
const BASE_INDENT = 10

export interface TreeModeOptions {
  primaryKey: string
  openKeys: string[]
  onChangeOpenKeys(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void
  indentSize?: number
  isLeafNode?(node: any, nodeMeta: { depth: number; expanded: boolean; rowKey: string }): boolean
}

export function makeTreeModeTransform({
  onChangeOpenKeys,
  openKeys,
  primaryKey,
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
        const content = safeRender(firstCol, record, recordIndex)
        if (record[treeMetaSymbol] == null) {
          // 没有 treeMeta 信息的话，就返回原先的渲染结果
          return content
        }

        const { depth, isLeaf, expanded } = record[treeMetaSymbol]

        if (isLeaf) {
          return (
            <ExpansionCell className="expansion-cell leaf">
              <span style={{ marginLeft: BASE_INDENT + depth * indentSize }}>{content}</span>
            </ExpansionCell>
          )
        }

        const marginLeft = -ICON_WIDTH + BASE_INDENT + depth * indentSize
        const expandCls = expanded ? 'expanded' : 'collapsed'
        return (
          <ExpansionCell className={cx('expansion-cell', expandCls)}>
            <CarbonIcons.CaretRight16 className={cx('expansion-icon', expandCls)} style={{ marginLeft }} />
            {content}
          </ExpansionCell>
        )
      }

      const getCellProps = (value: any, record: any, rowIndex: number) => {
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

      return [{ ...firstCol, render, getCellProps }, ...others]
    }
  }
}

export function useTreeModeTransform({
  isLeafNode,
  indentSize,
  primaryKey,
  defaultOpenKeys = [],
}: Omit<TreeModeOptions, 'openKeys' | 'onChangeOpenKeys'> & { defaultOpenKeys?: string[] }) {
  const [openKeys, onChangeOpenKeys] = useState(defaultOpenKeys)
  return makeTreeModeTransform({ indentSize, primaryKey, isLeafNode, openKeys, onChangeOpenKeys })
}
