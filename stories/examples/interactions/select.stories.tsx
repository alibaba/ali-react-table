import { Checkbox, Radio } from '@alifd/next'
import { applyTransforms, ArtColumn, BaseTable, BaseTableProps, internals, TableTransform } from 'ali-react-table'
import React, { useState } from 'react'
import { FusionStyles } from '../../assets/fusion-style'
import { testProvColumns, useProvinceDataSource } from '../../assets/ncov19-assets'

const { safeGetRowKey } = internals

export default {
  title: '示例 / 表格交互 / 单选与多选',
}

export function 单选() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const [value, onChange] = useState('')

  const singleSelectColumn: ArtColumn = {
    name: '',
    width: 60,
    align: 'center',
    render(_: any, record: any) {
      const key = record.provinceName
      return <Radio checked={value === key} onChange={() => onChange(key)} />
    },
  }

  const renderData = applyTransforms({
    dataSource: dataSource.slice(0, 10),
    columns: [singleSelectColumn, ...testProvColumns],
  })

  return (
    <>
      <FusionStyles />
      <div style={{ lineHeight: '24px' }}>当前选中的 value 为 {value || '[空]'}</div>
      <BaseTable
        primaryKey="provinceName"
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
        getRowProps={(record) => {
          const key = record.provinceName
          return {
            style: {
              backgroundColor: key === value ? '#f5f5f5' : undefined,
              cursor: 'pointer',
            },
            onClick() {
              onChange(key)
            },
          }
        }}
      />
    </>
  )
}

function multiSelect({
  primaryKey,
  value,
  onChange,
}: {
  primaryKey: BaseTableProps['primaryKey']
  value: { keys: string[]; lastKey: string }
  onChange(next: { keys: string[]; lastKey: string }, keys: string[], action: 'check' | 'uncheck'): void
}): TableTransform {
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
        onChange={(_: any) => {
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
      width: 60,
      align: 'center',

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

export function 多选() {
  const [value, onChange] = useState({ keys: [] as string[], lastKey: '' })

  const { isLoading, dataSource } = useProvinceDataSource()

  const renderData = applyTransforms(
    { dataSource: dataSource.slice(0, 10), columns: testProvColumns },
    multiSelect({ primaryKey: 'provinceName', value, onChange }),
  )

  return (
    <>
      <FusionStyles />
      <div style={{ lineHeight: '24px' }}>交互提示：按住 shift 键来来批量选中多行</div>
      <div style={{ lineHeight: '24px' }}>当前选中的 value 为 {value.keys.join(',') || '[空]'}</div>
      <BaseTable
        primaryKey="provinceName"
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
      />
    </>
  )
}
