import * as CarbonIcons from '@carbon/icons-react'
import React from 'react'
import styled from 'styled-components'
import { isLeafNode } from '../../common-utils'
import { safeRender } from '../../common-utils/internals'
import { DvtTableColumn, TableTransform } from '../../interfaces'

const ExpansionCell = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
`

export const treeMetaSymbol = Symbol('treeMetaSymbol')

const ICON_WIDTH = 16
const BASE_INDENT = 10

export default function treeMode({
  onChangeOpenKeys,
  openKeys,
  primaryKey,
  indentSize = 16,
}: {
  primaryKey: string
  openKeys: string[]
  onChangeOpenKeys(nextKeys: string[]): void
  indentSize?: number
}): TableTransform {
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
        for (const node of nodes) {
          const rowKey = node[primaryKey]
          if (isLeafNode(node)) {
            const treeMeta = { depth, isLeaf: true, expanded: false, rowKey }
            result.push({ [treeMetaSymbol]: treeMeta, ...node })
          } else {
            const expanded = openKeySet.has(rowKey)
            const treeMeta = { depth, isLeaf: false, expanded, rowKey }
            result.push({ [treeMetaSymbol]: treeMeta, ...node })
            if (expanded) {
              dfs(node.children, depth + 1)
            }
          }
        }
      }
      return result
    }

    function processColumns(columns: DvtTableColumn[]) {
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
          return <span style={{ marginLeft: BASE_INDENT + depth * indentSize }}>{content}</span>
        }

        const marginLeft = -ICON_WIDTH + BASE_INDENT + depth * indentSize
        if (expanded) {
          return (
            <ExpansionCell
              style={{ marginLeft }}
              onClick={() => onChangeOpenKeys(openKeys.filter(key => key !== rowKey))}
            >
              <CarbonIcons.CaretDown16 style={{ fill: '#999999', flex: '0 0 16px' }} />
              {content}
            </ExpansionCell>
          )
        } else {
          return (
            <ExpansionCell style={{ marginLeft }} onClick={() => onChangeOpenKeys([...openKeys, rowKey])}>
              <CarbonIcons.CaretRight16 style={{ fill: '#999999', flex: '0 0 16px' }} />
              {content}
            </ExpansionCell>
          )
        }
      }

      const getCellProps = () => ({ style: { paddingTop: 0, paddingBottom: 0 } })

      return [{ ...firstCol, render, getCellProps }, ...others]
    }
  }
}
