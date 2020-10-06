import React from 'react'
import { ArtColumn } from '../../interfaces'
import { makeTreeDataHelper } from '../../utils'
import { TablePipeline } from '../pipeline'

export interface TreeSelectFeatureOptions {
  tree: any[]
  rootKey?: string
  checkedStrategy?: 'all' | 'parent' | 'child'
  checkStrictly?: boolean
  checkboxColumn?: Partial<ArtColumn>
  value?: string[]
  defaultValue?: string[]
  onChange?(nextValue: string[]): void
  highlightRowWhenSelected?: boolean
}

const STATE_KEY = 'treeSelect'

export function treeSelect(opts: TreeSelectFeatureOptions) {
  return function treeSelectStep<P extends TablePipeline>(pipeline: P) {
    const Checkbox = pipeline.ctx.components.Checkbox
    if (Checkbox == null) {
      throw new Error('使用 treeSelect 之前需要通过 pipeline context 设置 components.Checkbox')
    }
    const primaryKey = pipeline.ensurePrimaryKey('treeSelect') as string
    if (typeof primaryKey !== 'string') {
      throw new Error('treeSelect 仅支持字符串作为 primaryKey')
    }
    const value = opts.value ?? pipeline.state[STATE_KEY] ?? opts.defaultValue ?? []

    const treeDataHelper = makeTreeDataHelper<any>({
      tree: opts.rootKey != null ? [{ [primaryKey]: opts.rootKey, children: opts.tree }] : opts.tree,
      getNodeValue: (node) => node[primaryKey],
      value,
      checkedStrategy: opts.checkedStrategy,
      checkStrictly: opts.checkStrictly,
    })

    const makeCheckbox = (key: string) => (
      <Checkbox
        checked={treeDataHelper.isChecked(key)}
        indeterminate={treeDataHelper.isIndeterminate(key)}
        onChange={() => {
          const nextValue = treeDataHelper.getValueAfterToggle(key)
          pipeline.setStateAtKey(STATE_KEY, nextValue)
          opts.onChange?.(nextValue)
        }}
      />
    )

    const columns = pipeline.getColumns()
    pipeline.columns([
      // 在左侧添加一列用于渲染 checkbox
      {
        name: '',
        width: 50,
        align: 'center',
        ...opts.checkboxColumn,
        title: opts.rootKey != null ? makeCheckbox(opts.rootKey) : undefined,
        render(value, record) {
          return makeCheckbox(record[primaryKey])
        },
      },
      ...columns,
    ])

    if (opts.highlightRowWhenSelected) {
      pipeline.appendRowPropsGetter((row) => {
        const rowKey = row[primaryKey]

        let style: any = {}

        if (treeDataHelper.isChecked(rowKey)) {
          style['--bgcolor'] = 'var(--highlight-bgcolor)'
        }

        return { style }
      })
    }

    return pipeline
  }
}
