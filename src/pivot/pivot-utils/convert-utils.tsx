import { AddAlt16, SubtractAlt16 } from '@carbon/icons-react'
import React from 'react'
import { noop } from 'rxjs'
import styled from 'styled-components'
import { isLeafNode } from '../../common-utils'
import { CrossTableIndicator, CrossTreeNode } from '../cross-table'
import { DrillNode } from './interfaces'
import simpleEncode from './simpleEncode'

const ExpandSpan = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 4px;
  cursor: pointer;

  :hover {
    outline: 1px dashed #ccc;
  }

  .icon {
    fill: currentColor;
    margin-right: 4px;
  }
`

type ConvertOptions<T extends CrossTreeNode = CrossTreeNode> = {
  /** 需要在子节点处附加的 指标节点 */
  indicators?: CrossTableIndicator[]

  /** 自定义的编码函数，用于根据下钻的值序列生成唯一的字符串.
   * 该参数留空 表示使用默认的编码方式 */
  encode?(valuePath: string[]): string

  /** 为一个值序列生成小计（sub-total）节点.
   * 针对每一个父节点，该函数都将被调用一次；
   * * 函数返回 null, 表示对应父节点不需要小计节点；
   * * 返回 `{ position: 'start' | 'end', value: string; data?: any }`
   *  表明所要生成的小计节点的摆放位置、文本、附加的数据
   *
   * 该参数留空 表示所有节点均不需要生成小计节点 */
  generateSubtotalNode?(
    drillNode: DrillNode,
  ): null | {
    position: 'start' | 'end'
    value: string
  }

  /** 是否支持节点的展开与收拢，默认为 false。
   * 当该选项为 true 时，展开/收拢才会开启，相关的按钮也才会被渲染 */
  supportsExpand?: boolean

  /** 展开的节点的 key 数组 */
  expandKeys?: string[]

  /** 展开节点发生变化时的回调 */
  onChangeExpandKeys?(nextKeys: string[], targetNode: DrillNode, action: 'collapse' | 'expand'): void

  /** 是否强制展开总计节点，默认为 true */
  enforceExpandTotalNode?: boolean
}

export function convertDrillTreeToCrossTree<T extends CrossTreeNode = CrossTreeNode>(
  drillTree: DrillNode[],
  {
    indicators,
    encode = simpleEncode,
    generateSubtotalNode,
    enforceExpandTotalNode = true,
    expandKeys,
    onChangeExpandKeys = noop,
    supportsExpand,
  }: ConvertOptions<T> = {},
): T[] {
  const totalKey = encode([])
  // fixme 如果 expandKeys 没传的，应该认为所有的节点都是展开的
  const expandKeySet = new Set(expandKeys ?? [])

  return dfs(drillTree, 0)

  /** 在 indicators 非空的情况下获取指标对应的 CrossTreeNode */
  function getIndicators(node: DrillNode, nodeData: any) {
    return indicators.map((indicator) => ({
      key: encode(node.path.concat([indicator.code])),
      value: indicator.name,
      data: { ...nodeData, indicator },
      ...indicator,
    }))
  }

  function drillNodeToTreeNode(node: DrillNode, nodeData: any): T {
    if (indicators != null) {
      return ({
        key: node.key,
        value: node.value,
        data: nodeData,
        children: getIndicators(node, nodeData),
      } as unknown) as T
    } else {
      return {
        key: node.key,
        value: node.value,
        data: nodeData,
      } as T
    }
  }

  function dfs(drillNodes: DrillNode[], depth: number): T[] {
    const result: T[] = []

    for (const node of drillNodes) {
      const nodeData = { dataKey: node.key, dataPath: node.path }

      if (isLeafNode(node) && !node.hasChild) {
        result.push(drillNodeToTreeNode(node, nodeData))
      } else {
        let needProcessChildren = true
        let crossTreeNode: T = {
          key: node.key,
          value: node.value,
          data: nodeData,
        } as any

        if (!supportsExpand || (enforceExpandTotalNode && node.key === totalKey)) {
          // 不支持展开功能 或是强制展开
          crossTreeNode.children = dfs(node.children, depth + 1)
        } else if (expandKeySet.has(node.key)) {
          // 展开的父节点
          crossTreeNode.title = (
            <ExpandSpan
              onClick={() => {
                onChangeExpandKeys(
                  expandKeys.filter((k) => k !== node.key),
                  node,
                  'collapse',
                )
              }}
            >
              <SubtractAlt16 className="icon" />
              {node.value}
            </ExpandSpan>
          )
          crossTreeNode.children = dfs(node.children, depth + 1)
        } else {
          // 收拢的父节点
          needProcessChildren = false
          crossTreeNode.title = (
            <ExpandSpan
              onClick={() => {
                onChangeExpandKeys(expandKeys.concat([node.key]), node, 'expand')
              }}
            >
              <AddAlt16 className="icon" />
              {node.value}
            </ExpandSpan>
          )
          if (indicators != null) {
            crossTreeNode.children = getIndicators(node, nodeData)
          }
        }

        if (needProcessChildren) {
          const subtotalNodeData = generateSubtotalNode?.(node)
          if (subtotalNodeData) {
            const { position = 'start', value } = subtotalNodeData
            const subtotalPath = node.path.concat([value])
            const subtotalDrillNode: DrillNode = {
              key: encode(subtotalPath),
              path: subtotalPath,
              value,
            }
            const subtotalTreeNode: T = drillNodeToTreeNode(subtotalDrillNode, nodeData)

            if (position === 'start') {
              crossTreeNode.children.unshift(subtotalTreeNode)
            } else {
              crossTreeNode.children.push(subtotalTreeNode)
            }
          }
        }

        result.push(crossTreeNode)
      }
    }
    return result
  }
}
