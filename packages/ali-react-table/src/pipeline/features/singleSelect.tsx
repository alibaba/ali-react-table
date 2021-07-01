import React from 'react'
import { ArtColumn, ArtColumnStaticPart, CellProps } from '../../interfaces'
import { internals } from '../../internals'
import { always } from '../../utils/others'
import { TablePipeline } from '../pipeline'

function getFirstDefinedValue<T>(...values: T[]): T {
  for (let i = 0; i < values.length; i++) {
    const v = values[i]
    if (v !== undefined) {
      return v
    }
  }
}

export interface SingleSelectFeatureOptions {
  /** 是否高亮被选中的行 */
  highlightRowWhenSelected?: boolean

  /** 非受控用法：默认选中的值 */
  defaultValue?: string

  /** 受控用法：当前选中的值 */
  value?: string

  /** 受控用法：选中值改变回调 */
  onChange?: (next: string) => void

  /** 判断一行是否禁用 */
  isDisabled?(row: any, rowIndex: number): boolean

  /** 点击事件的响应区域 */
  clickArea?: 'radio' | 'cell' | 'row'

  /** 单选框所在列的 column 配置，可指定 width，lock 等属性 */
  radioColumn?: Partial<ArtColumnStaticPart>

  /** 单选框所在列的位置 */
  radioPlacement?: 'start' | 'end'

  /** 是否对触发 onChange 的 click 事件调用 event.stopPropagation() */
  stopClickEventPropagation?: boolean
}

export function singleSelect(opts: SingleSelectFeatureOptions = {}) {
  return function singleSelectStep(pipeline: TablePipeline) {
    const Radio = pipeline.ctx.components.Radio
    if (Radio == null) {
      throw new Error('使用 singleSelect 之前需要通过 pipeline context 设置 components.Radio')
    }

    const stateKey = 'singleSelect'
    const clickArea = opts.clickArea ?? 'radio'
    const isDisabled = opts.isDisabled ?? always(false)

    const primaryKey = pipeline.ensurePrimaryKey('singleSelect')
    const value = getFirstDefinedValue(opts.value, pipeline.getStateAtKey(stateKey), opts.defaultValue)
    const onChange = (rowKey: string) => {
      opts.onChange?.(rowKey)
      pipeline.setStateAtKey(stateKey, rowKey)
    }

    const radioColumn: ArtColumn = {
      name: '',
      width: 50,
      align: 'center',
      ...opts.radioColumn,
      getCellProps(value: any, row: any, rowIndex: number): CellProps {
        if (clickArea === 'cell') {
          const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)
          const disabled = isDisabled(row, rowIndex)
          return {
            style: { cursor: disabled ? 'not-allowed' : 'pointer' },
            onClick: disabled
              ? undefined
              : (e) => {
                  if (opts.stopClickEventPropagation) {
                    e.stopPropagation()
                  }
                  onChange(rowKey)
                },
          }
        }
      },
      render: (_: any, row: any, rowIndex: number) => {
        const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)
        return (
          <Radio
            checked={value === rowKey}
            disabled={isDisabled(row, rowIndex)}
            onChange={
              clickArea === 'radio'
                ? (arg1: any, arg2: any) => {
                    const nativeEvent: MouseEvent = arg2?.nativeEvent ?? arg1?.nativeEvent
                    if (nativeEvent && opts.stopClickEventPropagation) {
                      nativeEvent.stopPropagation()
                    }
                    onChange(rowKey)
                  }
                : undefined
            }
          />
        )
      },
    }

    const nextColumns = pipeline.getColumns().slice()

    const radioPlacement = opts.radioPlacement ?? 'start'
    if (radioPlacement === 'start') {
      nextColumns.unshift(radioColumn)
    } else {
      nextColumns.push(radioColumn)
    }

    pipeline.columns(nextColumns)

    pipeline.appendRowPropsGetter((row, rowIndex) => {
      const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)

      let style: any = {}
      let className: string
      let onClick: any

      if (opts.highlightRowWhenSelected) {
        if (value === rowKey) {
          className = 'highlight'
        }
      }
      if (clickArea === 'row' && !isDisabled(row, rowIndex)) {
        style.cursor = 'pointer'
        onClick = (e: React.MouseEvent) => {
          if (opts.stopClickEventPropagation) {
            e.stopPropagation()
          }
          onChange(rowKey)
        }
      }

      return { className, style, onClick }
    })

    return pipeline
  }
}
