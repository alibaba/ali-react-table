import React, { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'
import { ArtColumn, SortItem, SortOrder } from '../../interfaces'
import { internals } from '../../internals'
import { collectNodes, isLeafNode, layeredSort, mergeCellProps, smartCompare } from '../../utils'
import { TablePipeline } from '../pipeline'

interface SortIconProps {
  style?: CSSProperties
  className?: string
  size?: number
  order?: SortOrder
  onClick?(e: React.MouseEvent): void
}

function SortIcon({ size = 32, style, className, order, onClick }: SortIconProps) {
  return (
    <svg
      style={style}
      className={className}
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      onClick={onClick}
    >
      <path fill={order === 'asc' ? '#23A3FF' : '#bfbfbf'} transform="translate(0, 4)" d="M8 8L16 0 24 8z" />
      <path fill={order === 'desc' ? '#23A3FF' : '#bfbfbf'} transform="translate(0, -4)" d="M24 24L16 32 8 24z " />
    </svg>
  )
}

function DefaultSortHeaderCell({
  children,
  column,
  onToggle,
  sortOrder,
  sortIndex,
  sortOptions,
  clickArea,
}: SortHeaderCellProps) {
  // 通过 justify-content 来与 col.align 保持对齐方向一致
  const justifyContent = column.align === 'right' ? 'flex-end' : column.align === 'center' ? 'center' : 'flex-start'

  return (
    <TableHeaderCell
      onClick={clickArea === 'content' ? onToggle : undefined}
      style={{
        justifyContent,
        cursor: clickArea === 'content' ? 'pointer' : undefined,
      }}
    >
      {children}
      <SortIcon
        onClick={clickArea === 'icon' ? onToggle : undefined}
        style={{
          userSelect: 'none',
          marginLeft: 2,
          flexShrink: 0,
          cursor: clickArea === 'icon' ? 'pointer' : undefined,
        }}
        size={16}
        order={sortOrder}
      />
      {sortOptions.mode === 'multiple' && sortIndex != -1 && (
        <div
          style={{
            userSelect: 'none',
            marginLeft: 2,
            color: '#666',
            flex: '0 0 auto',
            fontSize: 10,
            fontFamily: 'monospace',
          }}
        >
          {sortIndex + 1}
        </div>
      )}
    </TableHeaderCell>
  )
}

function hasAnySortableColumns(cols: ArtColumn[]): boolean {
  return cols.some(
    (col) => Boolean(col.features?.sortable) || (!isLeafNode(col) && hasAnySortableColumns(col.children)),
  )
}

const TableHeaderCell = styled.div`
  display: flex;
  align-items: center;
`

export interface SortHeaderCellProps {
  /** 调用 makeSortTransform(...) 时的参数 */
  sortOptions: Required<Omit<SortFeatureOptions, 'SortHeaderCell' | 'defaultSorts'>>

  /** 在添加排序相关的内容之前 表头原有的渲染内容 */
  children: ReactNode

  /** 当前排序 */
  sortOrder: SortOrder

  /** 多列排序下，sortIndex 指明了当前排序字段起作用的顺序. 当 sortOrder 为 none 时，sortIndex 固定为 -1 */
  sortIndex: number

  /** 当前列的配置 */
  column: ArtColumn

  /** 切换排序的回调 */
  onToggle(e: React.MouseEvent): void

  /** 点击事件的响应区域 */
  clickArea: 'content' | 'icon'
}

export interface SortFeatureOptions {
  /** (非受控用法) 默认的排序字段列表 */
  defaultSorts?: SortItem[]

  /** (受控用法) 排序字段列表 */
  sorts?: SortItem[]

  /** 更新排序字段列表的回调函数 */
  onChangeSorts?(nextSorts: SortItem[]): void

  /** 排序切换顺序 */
  orders?: SortOrder[]

  /** 排序模式。单选 single，多选 multiple，默认为多选 */
  mode?: 'single' | 'multiple'

  /** 自定义排序表头 */
  SortHeaderCell?: React.ComponentType<SortHeaderCellProps>

  /** 是否保持 dataSource 不变 */
  keepDataSource?: boolean

  /** 排序激活时 是否高亮这一列的单元格 */
  highlightColumnWhenActive?: boolean

  /** 是否对触发 onChangeOpenKeys 的 click 事件调用 event.stopPropagation() */
  stopClickEventPropagation?: boolean

  /** 点击事件的响应区域，默认为 content */
  clickArea?: 'content' | 'icon'
}

const stateKey = 'sort'

export function sort(opts: SortFeatureOptions = {}) {
  return function sortStep(pipeline: TablePipeline) {
    const {
      orders = ['desc', 'asc', 'none'],
      mode = 'multiple',
      SortHeaderCell = DefaultSortHeaderCell,
      keepDataSource,
      highlightColumnWhenActive,
      stopClickEventPropagation,
      clickArea = 'content',
    } = opts

    const inputSorts = opts.sorts ?? pipeline.getStateAtKey(stateKey) ?? opts.defaultSorts ?? []
    const activeSorts = inputSorts.filter((s) => s.order !== 'none')
    // 单字段排序的情况下 sorts 中只有第一个排序字段才会生效
    const sorts = mode === 'multiple' ? activeSorts : activeSorts.slice(0, 1)

    const onChangeSortsInMultipleMode = (nextSorts: SortItem[]) => {
      opts.onChangeSorts?.(nextSorts)
      pipeline.setStateAtKey(stateKey, nextSorts)
    }
    const onChangeSorts =
      mode === 'multiple'
        ? onChangeSortsInMultipleMode
        : (nextSorts: SortItem[]) => {
            // 单字段排序的情况下，nextSorts 中只有最后一个排序字段才会生效
            const len = nextSorts.length
            onChangeSortsInMultipleMode(nextSorts.slice(len - 1))
          }

    const sortOptions: SortHeaderCellProps['sortOptions'] = {
      sorts,
      onChangeSorts,
      orders,
      mode,
      keepDataSource,
      highlightColumnWhenActive,
      stopClickEventPropagation,
      clickArea,
    }

    const sortMap = new Map(sorts.map((sort, index) => [sort.code, { index, ...sort }]))

    const dataSource = pipeline.getDataSource()
    const columns = pipeline.getColumns()

    if (process.env.NODE_ENV !== 'production') {
      if (!hasAnySortableColumns(columns)) {
        console.warn(
          '[ali-react-table] commonTransform.sort 缺少可排序的列，请通过 column.features.sortable 来指定哪些列可排序',
          columns,
        )
      }
    }

    pipeline.dataSource(processDataSource(dataSource))
    pipeline.columns(processColumns(columns))

    return pipeline

    function processDataSource(dataSource: any[]) {
      if (keepDataSource) {
        return dataSource
      }

      const sortColumnsMap = new Map(
        collectNodes(columns, 'leaf-only')
          .filter((col) => col.features?.sortable !== false && col.features?.sortable != null)
          .map((col) => [col.code, col]),
      )

      return layeredSort(dataSource, (x, y) => {
        for (const { code, order } of sorts) {
          const column = sortColumnsMap.get(code)
          // 如果 code 对应的 column 不可排序，我们跳过该 code
          if (column == null) {
            continue
          }
          const sortable = column.features.sortable
          const compareFn = typeof sortable === 'function' ? sortable : smartCompare
          const xValue = internals.safeGetValue(column, x, -1)
          const yValue = internals.safeGetValue(column, y, -1)
          const cmp = compareFn(xValue, yValue, x, y)
          if (cmp !== 0) {
            return cmp * (order === 'asc' ? 1 : -1)
          }
        }
        return 0
      })
    }

    // 在「升序 - 降序 - 不排序」之间不断切换
    function toggle(code: string) {
      const sort = sortMap.get(code)
      if (sort == null) {
        onChangeSorts(sorts.concat([{ code, order: orders[0] }]))
      } else {
        const index = sorts.findIndex((s) => s.code === code)
        const nextSorts = sorts.slice(0, index + 1)
        const nextOrder = getNextOrder(sort.order)
        if (nextOrder === 'none') {
          nextSorts.pop()
        } else {
          nextSorts[index] = { ...nextSorts[index], order: nextOrder }
        }
        onChangeSorts(nextSorts)
      }
    }

    function processColumns(columns: ArtColumn[]) {
      return columns.map(dfs)

      function dfs(col: ArtColumn): ArtColumn {
        const result = { ...col }

        const sortable = col.code && (col.features?.sortable || sortMap.has(col.code))
        const active = sortable && sortMap.has(col.code)

        if (sortable) {
          let sortIndex = -1
          let sortOrder: SortOrder = 'none'

          if (active) {
            const { order, index } = sortMap.get(col.code)
            sortOrder = order
            sortIndex = index

            if (highlightColumnWhenActive) {
              result.headerCellProps = mergeCellProps(col.headerCellProps, {
                style: { background: 'var(--header-highlight-bgcolor)' } as any,
              })
              result.getCellProps = (value, row, rowIndex) => {
                const prevCellProps = internals.safeGetCellProps(col, row, rowIndex)
                return mergeCellProps(prevCellProps, {
                  style: { background: 'var(--highlight-bgcolor)' } as any,
                })
              }
            }
          }

          result.title = (
            <SortHeaderCell
              clickArea={clickArea}
              onToggle={(e) => {
                if (stopClickEventPropagation) {
                  e.stopPropagation()
                }
                toggle(col.code)
              }}
              sortOrder={sortOrder}
              column={col}
              sortIndex={sortIndex}
              sortOptions={sortOptions}
            >
              {internals.safeRenderHeader(col)}
            </SortHeaderCell>
          )
        }

        if (!isLeafNode(col)) {
          result.children = col.children.map(dfs)
        }

        return result
      }
    }

    function getNextOrder(order: SortOrder) {
      const idx = orders.indexOf(order)
      return orders[idx === orders.length - 1 ? 0 : idx + 1]
    }
  }
}
