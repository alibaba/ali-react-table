import { Button, Checkbox, Pagination, Radio } from '@alifd/next'
import {
  applyTransforms,
  ArtColumn,
  BaseTable,
  BaseTableProps,
  internals,
  makeTreeDataHelper,
  TableTransform,
  useTreeModeTransform,
} from 'ali-react-table'
import React, { useState } from 'react'
import { multiSelect } from '../../../src/pipeline/features'
import { dataSource1, repeat } from '../../assets/mock-table-data'
import { cols, testProvColumns, useCityDataSource, useProvinceDataSource } from '../../assets/ncov19-assets'
import { useTablePipeline } from '../../assets/ThemedBaseTable'

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

function makeMultiSelectTransform({
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
    makeMultiSelectTransform({ primaryKey: 'provinceName', value, onChange }),
  )

  return (
    <>
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

type CheckedStrategy = 'all' | 'parent' | 'child'

function makeTreeSelectTransform({
  checkedStrategy,
  value,
  onChange,
  rootKey,
  primaryKey,
  checkStrictly,
  checkboxColumn,
  tree,
}: {
  value: string[]
  onChange(nextValue: string[]): void
  tree: any[]
  rootKey?: string
  checkedStrategy?: CheckedStrategy
  checkStrictly?: boolean
  primaryKey: string
  checkboxColumn?: Partial<ArtColumn>
}): TableTransform {
  return ({ dataSource, columns }) => {
    const treeDataHelper = makeTreeDataHelper<any>({
      tree: rootKey != null ? [{ [primaryKey]: rootKey, children: tree }] : tree,
      getNodeValue: (node) => node[primaryKey],
      value,
      checkedStrategy,
      checkStrictly,
    })

    const makeCheckbox = (key: string) => (
      <Checkbox
        checked={treeDataHelper.isChecked(key)}
        indeterminate={treeDataHelper.isIndeterminate(key)}
        onChange={(_, e) => {
          e.stopPropagation()
          onChange(treeDataHelper.getValueAfterToggle(key))
        }}
      />
    )

    return {
      dataSource,
      columns: [
        // 在左侧添加一列用于渲染 checkbox
        {
          name: '',
          ...checkboxColumn,
          title: rootKey != null ? makeCheckbox(rootKey) : undefined,
          render(value, record) {
            return makeCheckbox(record[primaryKey])
          },
        },
        ...columns,
      ],
    }
  }
}

export function 树形选择() {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])

  const { dataSource: rawDataSource, isLoading } = useCityDataSource()

  // 处理数据： 选取前 4 个省份，每个省份下选取 3 个城市
  //  为每一行设置 name 作为展示名称；
  //  为每一行数据设置 key，作为该行的主键；注意在相应的地方配置 primaryKey="key"
  const dataSource = rawDataSource.slice(0, 4).map((prov) => ({
    ...prov,
    name: prov.provinceName,
    key: `prov:${prov.provinceName}`,
    children: prov.children.slice(0, 3).map((city) => ({
      ...city,
      name: city.cityName,
      key: `city:${city.cityName}`,
    })),
  }))

  const columns = [{ name: '省份/城市', code: 'name', width: 160 }, ...cols.indCols, cols.updateTime]

  const renderData = applyTransforms(
    { dataSource, columns },
    useTreeModeTransform({ primaryKey: 'key' }),
    makeTreeSelectTransform({
      // treeModeTransform 会对 dataSource 进行过滤，导致树不完整
      // 这里要将 dataSource 传给 makeTreeSelectTransform，传递的树是完整的
      tree: dataSource,
      primaryKey: 'key',
      value: checkedKeys,
      onChange: setCheckedKeys,
      checkboxColumn: { width: 48, lock: true },

      // 可以省略 rootKey，此时将不会出现全选的 checkbox
      rootKey: 'all',
      // checkStrictly 可以设置为 true，此时父子节点的选中状态不再关联
      checkStrictly: false,
      // checkedStrategy 也可以设置为 all / child
      checkedStrategy: 'parent',
    }),
  )

  return (
    <div>
      <p>
        当前选中的 key 值：<code>{JSON.stringify(checkedKeys)}</code>
      </p>
      <BaseTable
        primaryKey="key"
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
      />
    </div>
  )
}

export function 跨页多选() {
  const columns: ArtColumn[] = [
    { name: '序号', width: 70, align: 'right', lock: true, code: 'order' },
    { lock: true, code: 'name', width: 200, name: '公司名称' },
    { code: 'amount', width: 160, align: 'right', name: '金额' },
    { code: 'dept', width: 160, name: '金融机构' },
    { code: 'applier', width: 120, name: '申请人' },
  ]

  const pageSize = 10
  const [current, setCurrent] = useState(1)
  const [value, onChange] = useState({ keys: ['1', '2'], lastKey: '' })

  const pipeline = useTablePipeline()
    .input({ dataSource: repeat(dataSource1, 20), columns })
    .mapDataSource((ds) => ds.map((row, i) => ({ ...row, order: String(i + 1) })))
    .snapshot('rows')
    .primaryKey('order')
    .mapDataSource((ds) => ds.slice((current - 1) * pageSize, current * pageSize)) // 分页
    .use(
      multiSelect({
        value,
        onChange,
        highlightRowWhenSelected: true,
        checkboxColumn: { lock: true },
      }),
    )

  return (
    <div>
      <Button.Group>
        <Button
          onClick={() => {
            onChange({
              keys: pipeline.getDataSource('rows').map((row) => row.order),
              lastKey: null,
            })
          }}
        >
          选择全部（所有页面）
        </Button>
        <Button
          type="primary"
          warning
          onClick={() => {
            onChange({ keys: [], lastKey: null })
          }}
        >
          清空选择
        </Button>
      </Button.Group>
      <span style={{ marginLeft: 8 }}>
        已选择 {value.keys.length} / {pipeline.getDataSource('rows').length}
      </span>

      <BaseTable style={{ marginTop: 12 }} {...pipeline.getProps()} />

      <Pagination
        // @ts-ignore
        style={{ marginTop: 12, textAlign: 'right' }}
        defaultCurrent={1}
        current={current}
        onChange={setCurrent}
        pageSize={pageSize}
        total={pipeline.getDataSource('rows').length}
      />
    </div>
  )
}
