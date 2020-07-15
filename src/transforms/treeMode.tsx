import * as CarbonIcons from '@carbon/icons-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { isLeafNode as standardIsLeafNode } from '../utils'
import { safeRender } from '../internals'
import { ArtColumn, TableTransform } from '../interfaces'

const ExpansionCell = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 0 12px;

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

        const { depth, isLeaf, rowKey, expanded } = record[treeMetaSymbol]

        if (isLeaf) {
          return (
            <ExpansionCell className="expansion-cell leaf">
              <span style={{ marginLeft: BASE_INDENT + depth * indentSize }}>{content}</span>
            </ExpansionCell>
          )
        }

        const marginLeft = -ICON_WIDTH + BASE_INDENT + depth * indentSize
        if (expanded) {
          return (
            <ExpansionCell
              className="expansion-cell expanded"
              onClick={() => {
                onChangeOpenKeys(
                  openKeys.filter((key) => key !== rowKey),
                  rowKey,
                  'collapse',
                )
              }}
            >
              <CarbonIcons.CaretRight16 className="expansion-icon expanded" style={{ marginLeft }} />
              {content}
            </ExpansionCell>
          )
        } else {
          return (
            <ExpansionCell
              className="expansion-cell collapsed"
              onClick={() => {
                onChangeOpenKeys([...openKeys, rowKey], rowKey, 'expand')
              }}
            >
              <CarbonIcons.CaretRight16 className="expansion-icon collapsed" style={{ marginLeft }} />
              {content}
            </ExpansionCell>
          )
        }
      }

      const getCellProps = (value: any, record: any, rowIndex: number) => {
        if (firstCol.getCellProps) {
          const prevProps = firstCol.getCellProps(value, record, rowIndex)
          return {
            ...prevProps,
            style: { ...prevProps?.style, padding: 0 },
          }
        }
        return { style: { padding: 0 } }
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
