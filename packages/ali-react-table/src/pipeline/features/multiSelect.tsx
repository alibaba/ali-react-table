import React from 'react'
import { ArtColumn, ArtColumnStaticPart, CellProps } from '../../interfaces'
import { internals } from '../../internals'
import { always, arrayUtils } from '../../utils/others'
import { TablePipeline } from '../pipeline'

export interface MultiSelectFeatureOptions {
  /** 非受控用法：默认选中的值 */
  defaultValue?: string[]

  /** 非受控用法：默认 lastKey */
  defaultLastKey?: string

  /** 受控用法：当前选中的 keys */
  value?: string[]

  /** 受控用法：上一次操作对应的 rowKey */
  lastKey?: string

  /** 受控用法：状态改变回调  */
  onChange?: (
    nextValue: string[],
    key: string,
    keys: string[],
    action: 'check' | 'uncheck' | 'check-all' | 'uncheck-all',
  ) => void

  /** 复选框所在列的位置 */
  checkboxPlacement?: 'start' | 'end'

  /** 复选框所在列的 column 配置，可指定 width，lock, title, align, features 等属性 */
  checkboxColumn?: Partial<ArtColumnStaticPart>

  /** 是否高亮被选中的行 */
  highlightRowWhenSelected?: boolean

  /** 判断一行中的 checkbox 是否要禁用 */
  isDisabled?(row: any, rowIndex: number): boolean

  /** 点击事件的响应区域 */
  clickArea?: 'checkbox' | 'cell' | 'row'

  /** 是否对触发 onChange 的 click 事件调用 event.stopPropagation() */
  stopClickEventPropagation?: boolean
}

export function multiSelect(opts: MultiSelectFeatureOptions = {}) {
  return function multiSelectStep(pipeline: TablePipeline) {
    const stateKey = 'multiSelect'
    const Checkbox = pipeline.ctx.components.Checkbox
    if (Checkbox == null) {
      throw new Error('使用 multiSelect 之前需要设置 pipeline.ctx.components.Checkbox')
    }
    const primaryKey = pipeline.ensurePrimaryKey('multiSelect')

    const isDisabled = opts.isDisabled ?? always(false)
    const clickArea = opts.clickArea ?? 'checkbox'

    const value: string[] = opts.value ?? pipeline.getStateAtKey(stateKey)?.value ?? opts.defaultValue ?? []
    const lastKey: string = opts.lastKey ?? pipeline.getStateAtKey(stateKey)?.lastKey ?? opts.defaultLastKey ?? ''
    const onChange: MultiSelectFeatureOptions['onChange'] = (nextValue, key, keys, action) => {
      opts.onChange?.(nextValue, key, keys, action)
      pipeline.setStateAtKey(stateKey, { value: nextValue, lastKey: key }, { keys, action })
    }

    const dataSource = pipeline.getDataSource()

    /** dataSource 中包含的所有 keys */
    const fullKeySet = new Set<string>()

    /** 所有有效的 keys（disable 状态为 false） */
    const allKeys: string[] = []

    dataSource.forEach((row, rowIndex) => {
      const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)
      fullKeySet.add(rowKey)
      // 在 allKeys 中排除被禁用的 key
      if (!isDisabled(row, rowIndex)) {
        allKeys.push(rowKey)
      }
    })

    const set = new Set(value)
    const isAllChecked = allKeys.length > 0 && allKeys.every((key) => set.has(key))
    const isAnyChecked = allKeys.some((key) => set.has(key))

    const defaultCheckboxColumnTitle = (
      <Checkbox
        checked={isAllChecked}
        indeterminate={!isAllChecked && isAnyChecked}
        onChange={(_: any) => {
          if (isAllChecked) {
            onChange(arrayUtils.diff(value, allKeys), '', allKeys, 'uncheck-all')
          } else {
            onChange(arrayUtils.merge(value, allKeys), '', allKeys, 'check-all')
          }
        }}
      />
    )

    const checkboxColumn: ArtColumn = {
      name: '是否选中',
      title: defaultCheckboxColumnTitle,
      width: 50,
      align: 'center',
      ...opts.checkboxColumn,
      getCellProps(value: any, row: any, rowIndex: number): CellProps {
        const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)
        if (fullKeySet.has(rowKey) && clickArea === 'cell') {
          const prevChecked = set.has(rowKey)
          const disabled = isDisabled(row, rowIndex)
          return {
            style: { cursor: disabled ? 'not-allowed' : 'pointer' },
            onClick: disabled
              ? undefined
              : (e) => {
                  if (opts.stopClickEventPropagation) {
                    e.stopPropagation()
                  }
                  onCheckboxChange(prevChecked, rowKey, e.shiftKey)
                },
          }
        }
      },
      render(_: any, row: any, rowIndex: number) {
        const key = internals.safeGetRowKey(primaryKey, row, rowIndex)
        const checked = set.has(key)
        return (
          <Checkbox
            checked={checked}
            disabled={isDisabled(row, rowIndex)}
            onChange={
              clickArea === 'checkbox'
                ? (arg1: any, arg2: any) => {
                    // 这里要同时兼容 antd 和 fusion 的用法
                    // fusion: arg2?.nativeEvent
                    // antd: arg1.nativeEvent
                    const nativeEvent: MouseEvent = arg2?.nativeEvent ?? arg1.nativeEvent
                    if (nativeEvent) {
                      if (opts.stopClickEventPropagation) {
                        nativeEvent.stopPropagation()
                      }
                      onCheckboxChange(checked, key, nativeEvent.shiftKey)
                    }
                  }
                : undefined
            }
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

    pipeline.appendRowPropsGetter((row, rowIndex) => {
      const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)
      if (!fullKeySet.has(rowKey)) {
        // rowKey 不在 fullKeySet 中说明这一行是在 multiSelect 之后才生成的，multiSelect 不对之后生成的行进行处理
        return
      }

      let style: any = {}
      let className: string
      let onClick: any

      const checked = set.has(rowKey)
      if (opts.highlightRowWhenSelected && checked) {
        className = 'highlight'
      }

      if (clickArea === 'row') {
        const disabled = isDisabled(row, rowIndex)
        if (!disabled) {
          style.cursor = 'pointer'
          onClick = (e: MouseEvent) => {
            if (opts.stopClickEventPropagation) {
              e.stopPropagation()
            }
            onCheckboxChange(checked, rowKey, e.shiftKey)
          }
        }
      }

      return { className, style, onClick }
    })

    return pipeline

    function onCheckboxChange(prevChecked: boolean, key: string, batch: boolean) {
      let batchKeys = [key]

      if (batch && lastKey) {
        const lastIdx = allKeys.indexOf(lastKey)
        const cntIdx = allKeys.indexOf(key)
        const [start, end] = lastIdx < cntIdx ? [lastIdx, cntIdx] : [cntIdx, lastIdx]
        batchKeys = allKeys.slice(start, end + 1)
      }

      if (prevChecked) {
        onChange(arrayUtils.diff(value, batchKeys), key, batchKeys, 'uncheck')
      } else {
        onChange(arrayUtils.merge(value, batchKeys), key, batchKeys, 'check')
      }
    }
  }
}
