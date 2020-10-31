import { Button, Checkbox, Input, Overlay, Range } from '@alifd/next'
import { Filter16 } from '@carbon/icons-react'
import {
  applyTransforms,
  ArtColumn,
  BaseTable,
  collectNodes,
  internals,
  proto,
  TableTransform,
  traverseColumn,
} from 'ali-react-table'
import { cols, useCityDataSource } from 'assets/ncov19-assets'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import * as d3 from 'd3'
import _ from 'lodash'
import React, { ReactNode, useRef, useState } from 'react'

export default { title: '其他 / 筛选' }

type FilterState = { [code: string]: any }

function NormalFilter({
  code,
  valueList,
  selectedValues,
  filterState,
  onChangeFilterState,
  fitFilterValues,
}: {
  code: string
  valueList: (string | number)[]
  selectedValues: (string | number)[]
  filterState: FilterState
  onChangeFilterState(nextValue: FilterState): void
  fitFilterValues: (string | number)[]
}) {
  return (
    <div style={{ background: 'white', minHeight: 150, minWidth: 150, border: '1px solid #ccc' }}>
      <div style={{ maxHeight: 300, overflow: 'auto', padding: 16 }}>
        {valueList.map((v) => {
          const checked = selectedValues.includes(v)
          return (
            <div key={v} style={{ height: 24, display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={checked}
                onChange={() => {
                  onChangeFilterState({
                    ...filterState,
                    [code]: checked ? selectedValues.filter((x) => x !== v) : selectedValues.concat([v]),
                  })
                }}
              >
                {v}
              </Checkbox>
            </div>
          )
        })}
      </div>
      <div style={{ padding: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button.Group size="small">
          <Button
            size="small"
            type="primary"
            onClick={() => {
              onChangeFilterState({ ...filterState, [code]: null })
            }}
          >
            重置
          </Button>
          <Button
            size="small"
            onClick={() => {
              onChangeFilterState({ ...filterState, [code]: fitFilterValues })
            }}
          >
            自适应匹配
          </Button>
          <Button
            size="small"
            onClick={() => {
              const selectedValueSet = new Set(selectedValues)
              onChangeFilterState({ ...filterState, [code]: valueList.filter((v) => !selectedValueSet.has(v)) })
            }}
          >
            反选
          </Button>
        </Button.Group>
      </div>
    </div>
  )
}

function RangeFilter({
  code,
  extent,
  selectedRange,
  filterState,
  onChangeFilterState,
}: {
  code: string
  extent: [number, number]
  selectedRange: [number, number]
  filterState: FilterState
  onChangeFilterState(nextValue: FilterState): void
}) {
  return (
    <div style={{ background: 'white', minHeight: 100, minWidth: 250, border: '1px solid #ccc' }}>
      <div style={{ padding: '8px 20px' }}>
        <Range
          slider="double"
          min={extent[0]}
          max={extent[1]}
          marks={extent}
          value={selectedRange}
          onChange={(r) => {
            onChangeFilterState({ ...filterState, [code]: r })
          }}
        />
      </div>
      <div style={{ padding: 4 }}>
        <div>
          最小值：
          <Input
            type="number"
            size="small"
            value={selectedRange[0]}
            onChange={(min) => {
              const minNum = Number(min)
              if (isNaN(minNum)) {
                return
              }
              onChangeFilterState({ ...filterState, [code]: [minNum, selectedRange[1]] })
            }}
          />
        </div>
        <div>
          最大值：
          <Input
            type="number"
            size="small"
            value={selectedRange[1]}
            onChange={(max) => {
              const maxNum = Number(max)
              if (isNaN(maxNum)) {
                return
              }
              onChangeFilterState({ ...filterState, [code]: [selectedRange[0], maxNum] })
            }}
          />
        </div>
      </div>

      <div style={{ padding: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          size="small"
          onClick={() => {
            onChangeFilterState({ ...filterState, [code]: null })
          }}
        >
          重置
        </Button>
      </div>
    </div>
  )
}

function makeFilterTransform({
  filterState,
  onChangeFilterState,
}: {
  filterState: FilterState
  onChangeFilterState(nextValue: FilterState): void
}): TableTransform {
  return (input) =>
    applyTransforms(
      input,
      ({ dataSource, columns }) => {
        const filterCols = collectNodes(columns, 'leaf-only').filter((col) => col.code != null && col.features?.filter)
        const cache = new Map<string, Set<number>>()
        for (const col of filterCols) {
          if (col.features.filter === 'range') {
            // RangeFilter 不需要 cache
            continue
          }
          if (filterState[col.code] == null) {
            continue
          }
          cache.set(col.code, new Set(filterState[col.code]))
        }

        return {
          dataSource: dataSource.filter((record, rowIndex) => {
            return filterCols.every((col) => {
              if (filterState[col.code] == null) {
                return true
              }
              if (col.features.filter === 'range') {
                const selectedRange = filterState[col.code]
                const v = internals.safeGetValue(col, record, rowIndex)
                return selectedRange[0] <= v && v <= selectedRange[1]
              } else {
                return cache.get(col.code).has(internals.safeGetValue(col, record, rowIndex))
              }
            })
          }),
          columns,
        }
      },
      traverseColumn((col, { dataSource }) => {
        if (col.code == null || !col.features?.filter) {
          return col
        }

        const justifyContent = col.align === 'right' ? 'flex-end' : col.align === 'center' ? 'center' : 'flex-start'

        const prevTitle = internals.safeRenderHeader(col)
        const valueList = _.uniq(
          input.dataSource.map((record, rowIndex) => internals.safeGetValue(col, record, rowIndex)),
        )

        let align: string
        let isActiveFilter: boolean
        let filterView: ReactNode

        if (col.features.filter === 'range') {
          const extent = d3.extent(valueList)
          const selectedRange = (filterState[col.code] ?? extent) as [number, number]
          isActiveFilter = !(selectedRange[0] === extent[0] && selectedRange[1] === extent[1])
          align = 'tc bc'
          filterView = (
            <RangeFilter
              code={col.code}
              extent={extent}
              filterState={filterState}
              onChangeFilterState={onChangeFilterState}
              selectedRange={selectedRange}
            />
          )
        } else {
          const selectedValues = filterState[col.code] ?? valueList
          isActiveFilter = selectedValues.length !== valueList.length

          const fitFilterValues = _.uniq(
            dataSource.map((record, rowIndex) => internals.safeGetValue(col, record, rowIndex)),
          )

          filterView = (
            <NormalFilter
              code={col.code}
              filterState={filterState}
              onChangeFilterState={onChangeFilterState}
              selectedValues={selectedValues}
              valueList={valueList}
              fitFilterValues={fitFilterValues}
            />
          )
        }

        return {
          ...col,
          title: (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent }}>
              <Overlay.Popup
                triggerType="click"
                align={align}
                trigger={
                  <div
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      color: isActiveFilter ? 'blue' : undefined,
                      fontWeight: isActiveFilter ? 'bold' : 'normal',
                    }}
                  >
                    {prevTitle}
                    <Filter16 style={{ marginLeft: 2 }} />
                  </div>
                }
              >
                {filterView}
              </Overlay.Popup>
            </div>
          ),
        }
      }),
    )
}

export function 筛选() {
  const { dataSource, isLoading } = useCityDataSource()
  const [filterState, onChangeFilterState] = useState<FilterState>({})
  const tableRef = useRef<BaseTable>()

  const colProto = proto.array<ArtColumn>({
    features: proto.object({ filter: true }),
  })

  const columns = colProto([
    { lock: true, width: 80, name: '', code: 'order', features: { filter: false } },
    cols.provinceName,
    cols.cityName,
    { ...cols.confirmedCount, features: { filter: 'range' } },
    { ...cols.curedCount, features: { filter: 'range' } },
    { ...cols.deadCount, features: { filter: 'range' } },
    cols.updateTime,
  ])

  const renderData = applyTransforms(
    {
      dataSource: dataSource
        .slice(0, 15)
        .flatMap((prov) => prov.children)
        .map((row, i) => ({ ...row, order: i + 1 })),
      columns,
    },
    makeFilterTransform({ filterState, onChangeFilterState }),
  )

  return (
    <div>
      <p>tips: 自适应匹配 —— 根据其他列的筛选条件缩小当前列的筛选范围</p>
      <div>
        <Button onClick={() => onChangeFilterState({})}>重置筛选</Button>
      </div>
      <WebsiteBaseTable
        ref={tableRef}
        style={{ marginTop: 8 }}
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
      />
    </div>
  )
}
