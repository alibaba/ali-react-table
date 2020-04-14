import { ArtColumn, ArtColumnAlign, BaseTableProps } from 'ali-react-table'
import React from 'react'
import { safeGetRowKey } from '../../common-utils/internals'
import { TableTransform } from '../interfaces'

export interface SingleSelectOptions {
  Radio: any
  primaryKey: BaseTableProps['primaryKey']
  value: string
  onChange(nextKey: string): void
  width?: number
  align?: ArtColumnAlign
}

export default function singleSelect({
  Radio,
  width = 60,
  align = 'center',
  primaryKey,
  value,
  onChange,
}: SingleSelectOptions): TableTransform {
  return ({ columns, dataSource }) => {
    const checkboxColumn: ArtColumn = {
      name: '是否选中',
      title: '',
      width,
      align,

      getValue(record, rowIndex) {
        const key = safeGetRowKey(primaryKey, record, rowIndex)
        return key === value ? '选中' : '未选中'
      },

      render(_: any, record: any, rowIndex: number) {
        const key = safeGetRowKey(primaryKey, record, rowIndex)
        const checked = value === key
        return (
          <Radio
            checked={checked}
            onChange={() => {
              onChange(key)
            }}
          />
        )
      },
    }

    return { columns: [checkboxColumn].concat(columns), dataSource }
  }
}
