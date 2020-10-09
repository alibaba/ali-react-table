import React from 'react'
import { ArtColumn } from '../../interfaces'
import { internals } from '../../internals'
import { TablePipeline } from '../pipeline'

function diffArray(arr1: string[], arr2: string[]) {
  const set = new Set(arr2)
  return arr1.filter((x) => !set.has(x))
}

function mergeArray(arr1: string[], arr2: string[]) {
  const set = new Set(arr1)
  return arr1.concat(arr2.filter((x) => !set.has(x)))
}

export interface MultiSelectFeatureOptions {
  /** 是否高亮被选中的行 */
  highlightRowWhenSelected?: boolean

  /** 非受控用法：默认选中的 keys 与 lastKey */
  defaultValue?: string[] | { keys: string[]; lastKey?: string }

  /** 受控用法：当前选中的 keys 与上一次操作的 key */
  value?: string[] | { keys: string[]; lastKey?: string }

  /** 受控用法：状态改变回调  */
  onChange?: (next: { keys: string[]; lastKey: string }, keys: string[], action: 'check' | 'uncheck') => void

  /** 复选框所在列的位置 */
  checkboxPlacement?: 'start' | 'end'

  /** 复选框所在列的 column 配置，可指定 width，lock 等属性 */
  checkboxColumn?: Partial<ArtColumn>


  // todo isDisabled, clickArea: 'checkbox' | 'cell' | 'row'
}

export function multiSelect(opts: MultiSelectFeatureOptions = {}) {
  return function multiSelectStep<P extends TablePipeline>(pipeline: P) {
    const stateKey = 'multiSelect'
    const Checkbox = pipeline.ctx.components.Checkbox
    if (Checkbox == null) {
      throw new Error('使用 multiSelect 之前需要通过 pipeline context 设置 components.Checkbox')
    }
    const primaryKey = pipeline.ensurePrimaryKey('multiSelect')

    let value: { lastKey: string; keys: string[] } = opts.value ??
      pipeline.state[stateKey] ??
      opts.defaultValue ?? { lastKey: '', keys: [] }

    if (Array.isArray(value)) {
      // 兼容 value 直接为 string[] 的情况
      value = { keys: value, lastKey: '' }
    }

    const onChange: MultiSelectFeatureOptions['onChange'] = (nextValue, keys, action) => {
      opts.onChange?.(nextValue, keys, action)
      pipeline.setStateAtKey(stateKey, nextValue, { keys, action })
    }

    const dataSource = pipeline.getDataSource()

    const checkedKeySet = new Set(value.keys)
    const allKeys = dataSource.map((record, rowIndex) => {
      return internals.safeGetRowKey(primaryKey, record, rowIndex)
    })

    const set = new Set(value.keys)
    const isAllChecked = allKeys.every((key) => set.has(key))
    const isAnyChecked = allKeys.some((key) => set.has(key))

    const title = (
      <Checkbox
        checked={isAllChecked}
        indeterminate={!isAllChecked && isAnyChecked}
        onChange={(_: any) => {
          if (isAllChecked) {
            onChange({ keys: diffArray(value.keys, allKeys), lastKey: null }, allKeys, 'uncheck')
          } else {
            onChange({ keys: mergeArray(value.keys, allKeys), lastKey: null }, allKeys, 'check')
          }
        }}
      />
    )

    const checkboxColumn: ArtColumn = {
      name: '是否选中',
      title,
      width: 50,
      align: 'center',
      ...opts.checkboxColumn,
      render(_: any, record: any, rowIndex: number) {
        const key = internals.safeGetRowKey(primaryKey, record, rowIndex)
        const checked = checkedKeySet.has(key)
        return (
          <Checkbox
            checked={checked}
            onChange={(arg1: any, arg2: any) => {
              // fusion: arg2?.nativeEvent
              // antd: arg1.nativeEvent
              const nativeEvent: KeyboardEvent = arg2?.nativeEvent ?? arg1.nativeEvent
              // console.log(nativeEvent)
              // debugger
              if (nativeEvent) {
                onCheckboxChange(checked, key, nativeEvent.shiftKey)
              }
            }}
          />
        )
      },
    }

    const nextColumns = pipeline.getColumns().slice()
    const checkboxPlacement = opts.checkboxPlacement ?? 'start'
    if (checkboxPlacement === 'start') {
      nextColumns.unshift(checkboxColumn)
    } else {
      nextColumns.push(checkboxColumn)
    }
    pipeline.columns(nextColumns)

    if (opts.highlightRowWhenSelected) {
      pipeline.appendRowPropsGetter((row, rowIndex) => {
        const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)
        if (value.keys.includes(rowKey)) {
          return { className: 'highlight' }
        }
      })
    }

    return pipeline

    function onCheckboxChange(prevChecked: boolean, key: string, batch: boolean) {
      let batchKeys = [key]

      if (batch && value.lastKey) {
        const lastIdx = allKeys.indexOf(value.lastKey)
        const cntIdx = allKeys.indexOf(key)
        const [start, end] = lastIdx < cntIdx ? [lastIdx, cntIdx] : [cntIdx, lastIdx]
        batchKeys = allKeys.slice(start, end + 1)
      }

      if (prevChecked) {
        onChange({ keys: diffArray(value.keys, batchKeys), lastKey: key }, batchKeys, 'uncheck')
      } else {
        onChange({ keys: mergeArray(value.keys, batchKeys), lastKey: key }, batchKeys, 'check')
      }
    }
  }
}
