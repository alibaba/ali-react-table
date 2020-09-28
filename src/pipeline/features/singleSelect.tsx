import React from 'react'
import { ArtColumn, CellProps } from '../../interfaces'
import { internals } from '../../internals'
import { TablePipeline } from '../pipeline'

export interface SingleSelectFeatureOptions {
  highlightRowWhenSelected?: boolean
  defaultValue?: string
  value?: string
  onChange?: (next: string) => void
  isDisabled?(row: any): boolean
  clickArea?: 'checkbox' | 'cell' | 'row'
  checkboxColumn?: Partial<ArtColumn>
  checkboxPlacement?: 'start' | 'end'
}

export function singleSelect(opts: SingleSelectFeatureOptions = {}) {
  return function singleSelectStep<T extends TablePipeline>(pipeline: T) {
    const Radio = pipeline.ctx.components.Radio
    if (Radio == null) {
      throw new Error('使用 singleSelect 之前需要通过 pipeline context 设置 components.Radio')
    }

    const stateKey = 'singleSelect'
    const clickArea = opts.clickArea ?? 'checkbox'
    const isDisabled = opts.isDisabled ?? (() => false)

    const primaryKey = pipeline.ensurePrimaryKey('singleSelect')
    const value = opts.value ?? pipeline.state[stateKey] ?? opts.defaultValue
    const onChange = (rowKey: string) => {
      opts.onChange?.(rowKey)
      pipeline.setStateAtKey(stateKey, rowKey)
    }

    const checkboxColumn: ArtColumn = {
      name: '',
      width: 50,
      align: 'center',
      ...opts.checkboxColumn,
      getCellProps(value: any, row: any, rowIndex: number): CellProps {
        if (clickArea === 'cell') {
          const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)
          return {
            style: { cursor: 'pointer' },
            onClick: () => onChange(rowKey),
          }
        }
      },
      render: (_: any, row: any, rowIndex: number) => {
        const rowKey = internals.safeGetRowKey(primaryKey, row, rowIndex)
        return (
          <Radio
            checked={value === rowKey}
            disabled={isDisabled(row)}
            onChange={clickArea === 'checkbox' ? () => onChange(rowKey) : undefined}
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

        let style: any = {}
        let onClick: any

        if (value === rowKey) {
          style['--bgcolor'] = '#e1e7f5'
          style['--cell-border-horizontal'] = '1px solid #92acea'
        }
        if (clickArea === 'row') {
          style.cursor = 'pointer'
          onClick = () => {
            opts.onChange?.(rowKey)
            pipeline.setStateAtKey(stateKey, rowKey)
          }
        }

        return { style, onClick }
      })
    }

    return pipeline
  }
}
