import { ArtColumn, ArtColumnAlign, BaseTableProps } from 'ali-react-table'
import React from 'react'
import { safeGetRowKey } from '../../common-utils/internals'
import { TableTransform } from '../interfaces'

export interface SelectOptions {
  width?: number
  Checkbox: any
  align?: ArtColumnAlign
  primaryKey: BaseTableProps['primaryKey']

  value: { keys: string[]; lastKey: string }
  onChange(next: { keys: string[]; lastKey: string }, keys: string[], action: 'check' | 'uncheck'): void
}

export default function select({
  Checkbox,
  width = 60,
  align = 'center',
  primaryKey,
  value,
  onChange,
}: SelectOptions): TableTransform {
  return ({ columns, dataSource }) => {
    const checkedKeySet = new Set(value.keys)

    const allKeys = dataSource.map((record, rowIndex) => {
      return safeGetRowKey(primaryKey, record, rowIndex)
    })

    const isAllChecked = allKeys.length === value.keys.length

    const title = (
      <Checkbox
        checked={isAllChecked}
        indeterminate={0 < value.keys.length && value.keys.length < allKeys.length}
        onChange={(_: any, e: React.MouseEvent) => {
          if (isAllChecked) {
            onChange({ keys: [], lastKey: null }, value.keys, 'uncheck')
          } else {
            onChange({ keys: allKeys, lastKey: null }, allKeys, 'check')
          }
        }}
      />
    )

    const checkboxColumn: ArtColumn = {
      name: '是否选中',
      title,
      width,
      align,

      getValue(record, rowIndex) {
        const key = safeGetRowKey(primaryKey, record, rowIndex)
        return checkedKeySet.has(key) ? '选中' : '未选中'
      },

      render(_: any, record: any, rowIndex: number) {
        const key = safeGetRowKey(primaryKey, record, rowIndex)
        const checked = checkedKeySet.has(key)
        return (
          <Checkbox
            checked={checked}
            onChange={(_: any, e: React.MouseEvent) => {
              onCheckboxChange(checked, key, e.nativeEvent.shiftKey)
            }}
          />
        )
      },
    }

    return { columns: [checkboxColumn].concat(columns), dataSource }

    function onCheckboxChange(prevChecked: boolean, key: string, batch: boolean) {
      let batchKeys = [key]

      if (batch && value.lastKey) {
        const lastIdx = allKeys.indexOf(value.lastKey)
        const cntIdx = allKeys.indexOf(key)
        const [start, end] = lastIdx < cntIdx ? [lastIdx, cntIdx] : [cntIdx, lastIdx]
        batchKeys = allKeys.slice(start, end + 1)
      }

      if (prevChecked) {
        const batchKeySet = new Set(batchKeys)
        onChange(
          {
            keys: value.keys.filter((v) => !batchKeySet.has(v)),
            lastKey: key,
          },
          batchKeys,
          'uncheck',
        )
      } else {
        onChange(
          {
            keys: value.keys.concat(batchKeys.filter((k) => !checkedKeySet.has(k))),
            lastKey: key,
          },
          batchKeys,
          'check',
        )
      }
    }
  }
}
