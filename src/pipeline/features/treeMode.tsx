import React from 'react'
import { makeTreeModeTransform } from '../../transforms'
import { TablePipeline } from '../pipeline'

export interface TreeModeFeatureOptions {
  defaultOpenKeys?: string[]
  openKeys?: string[]
  onChangeOpenKeys?(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void
  isLeafNode?(node: any, nodeMeta: { depth: number; expanded: boolean; rowKey: string }): boolean
}

export function treeMode(opts: TreeModeFeatureOptions = {}) {
  return function treeModeStep<P extends TablePipeline>(pipeline: P) {
    const stateKey = 'treeMode'
    const indents = pipeline.ctx.indents

    const primaryKey = pipeline.ensurePrimaryKey('treeMode') as string
    if (typeof primaryKey !== 'string') {
      throw new Error('treeMode 仅支持字符串作为 primaryKey')
    }

    return pipeline.useTransform(
      makeTreeModeTransform({
        ...indents,
        isLeafNode: opts.isLeafNode,
        primaryKey,
        openKeys: opts.openKeys ?? pipeline.state[stateKey] ?? opts.defaultOpenKeys ?? [],
        onChangeOpenKeys: (nextKeys: string[], key, action) => {
          opts.onChangeOpenKeys?.(nextKeys, key, action)
          pipeline.setStateAtKey(stateKey, nextKeys, { key, action })
        },
      }),
    )
  }
}
