import { Button, Checkbox, Dialog, Input, Overlay } from '@alifd/next'
import { DragVertical16, Filter16, Settings16 } from '@carbon/icons-react'
import { ArtColumn } from 'ali-react-table'
import { SortItem } from 'ali-react-table/biz'
import cx from 'classnames'
import produce, { Draft } from 'immer'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { useDeriveState } from './utils'

export interface PivotState {
  dimCodes: string[]
  indCodes: string[]
  filters: { [dimCode: string]: string[] }
  openKeys: string[]
  sorts: SortItem[]
}

export type Action =
  | { type: 'tree-open'; key: string; open: boolean }
  | { type: 'change-sorts'; sorts: SortItem[] }
  | { type: 'filter'; dimCode: string; value: any; checked: boolean }
  | { type: 'change-dim-codes'; dimCodes: string[]; filters?: PivotState['filters'] }
  | { type: 'batch-filter'; dimCode: string; values: string[]; checked: boolean }

export type Dispatch = (action: Action) => void

export function immerReducer(draft: Draft<PivotState>, action: Action, state: PivotState) {
  if (action.type === 'filter') {
    if (action.checked) {
      draft.filters[action.dimCode].push(action.value)
    } else {
      const values = draft.filters[action.dimCode]
      values.splice(values.indexOf(action.value), 1)
    }
  } else if (action.type === 'change-dim-codes') {
    draft.dimCodes = action.dimCodes
    if (action.filters) {
      draft.filters = action.filters
    }
  } else if (action.type === 'batch-filter') {
    if (action.checked) {
      const pre = state.filters[action.dimCode]
      draft.filters[action.dimCode] = Array.from(new Set(pre.concat(action.values)))
    } else {
      const removeSet = new Set(action.values)
      draft.filters[action.dimCode] = draft.filters[action.dimCode].filter((v) => !removeSet.has(v))
    }
  } else if (action.type === 'change-sorts') {
    draft.sorts = action.sorts
  }
}

export type PivotMeta = {
  indicators: Array<ArtColumn & { code: string; expression?: string }>
  dimensions: Array<{ code: string; name: string }>
  dimValues: { [dimCode: string]: string[] }
}

const PopupDiv = styled.div`
  padding: 12px;
  width: 350px;
  min-height: 200px;
  max-height: 400px;
  overflow: hidden;
  background: white;
  border: 1px solid #ccc;
  display: flex;
  flex-flow: column;
`

const ValueList = styled.ol`
  margin: 8px 0;

  > li {
    height: 24px;
    display: flex;
    align-items: center;
  }
`

const CheckedDimListDiv = styled.div`
  font-size: 14px;

  .tag-list {
    display: flex;
    user-select: none;
    margin-left: -8px;
  }

  .tag {
    padding: 4px 8px;
    border-radius: 3px;
    background: #eee;
    margin-left: 8px;
    display: flex;
    align-items: center;

    &.active {
      background: #5484ff;
      color: #fefeff;
    }
    &.empty {
      background: #eb4626;
    }

    .filter-icon {
      cursor: pointer;
      margin-left: 4px;
      fill: currentColor;
    }
  }
`

interface CheckDimListProps {
  meta: PivotMeta
  state: PivotState
  dispatch: Dispatch
  style?: React.CSSProperties
  className?: string
}

export function CheckedDimList({ style, className, meta, state, dispatch }: CheckDimListProps) {
  const dimMap = new Map(meta.dimensions.map((dim) => [dim.code, dim]))

  return (
    <CheckedDimListDiv style={style} className={className}>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) {
            return
          }
          const i = result.source.index
          const j = result.destination.index
          const nextCodes = state.dimCodes.slice()
          const [code] = nextCodes.splice(i, 1)
          nextCodes.splice(j, 0, code)
          dispatch({ type: 'change-dim-codes', dimCodes: nextCodes })
        }}
      >
        <Droppable droppableId="dimension-list" direction="horizontal">
          {(dropProvided, snapshot) => (
            <div className="tag-list" ref={dropProvided.innerRef}>
              {state.dimCodes.map((dimCode, index) => {
                const allValues = meta.dimValues[dimCode]
                const values = state.filters[dimCode]

                return (
                  <Draggable key={dimCode} draggableId={dimCode} index={index}>
                    {(dragProvided, snapshot) => (
                      <Overlay.Popup
                        key={dimCode}
                        trigger={
                          <div
                            key={dimCode}
                            ref={dragProvided.innerRef}
                            {...dragProvided.draggableProps}
                            {...dragProvided.dragHandleProps}
                            className={cx('tag', {
                              active: values.length < allValues.length,
                              empty: allValues.length > 0 && values.length === 0,
                            })}
                          >
                            {dimMap.get(dimCode).name}
                            <Filter16 className="filter-icon" />
                          </div>
                        }
                        triggerType="click"
                      >
                        <CheckedDimFilterPopup
                          dispatch={dispatch}
                          allValues={allValues}
                          values={values}
                          dimCode={dimCode}
                        />
                      </Overlay.Popup>
                    )}
                  </Draggable>
                )
              })}
              {dropProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </CheckedDimListDiv>
  )
}

function CheckedDimFilterPopup({
  allValues,
  values,
  dispatch,
  dimCode,
}: {
  dimCode: string
  allValues: string[]
  values: string[]
  dispatch: Dispatch
}) {
  const set = new Set(values)

  const [rawSearch, setRawSearch] = useState('')

  const search = rawSearch.trim()

  const filtered = allValues
    .map((value) => {
      if (search === '') {
        return { value, title: value }
      }
      const i = value.indexOf(search)
      if (i === -1) {
        return null
      }
      return {
        value,
        title: (
          <span>
            <span>{value.slice(0, i)}</span>
            <span style={{ color: 'blue' }}>{search}</span>
            <span>{value.slice(i + search.length)}</span>
          </span>
        ),
      }
    })
    .filter(Boolean)

  return (
    <PopupDiv>
      <div>
        <Input placeholder="搜索" style={{ width: '100%' }} hasClear value={rawSearch} onChange={setRawSearch} />
      </div>
      <div style={{ overflow: 'auto' }}>
        {allValues.length > 0 && filtered.length === 0 && (
          <div style={{ margin: 16, textAlign: 'center' }}>没有符合查询条件的数据</div>
        )}
        <ValueList>
          {filtered.map(({ value, title }) => (
            <li key={value}>
              <Checkbox
                checked={set.has(value)}
                onChange={(checked) => dispatch({ type: 'filter', dimCode, value, checked })}
              >
                {title}
              </Checkbox>
            </li>
          ))}
        </ValueList>
      </div>

      <div style={{ marginTop: 'auto', textAlign: 'center' }}>
        <Button
          size="small"
          onClick={() => {
            dispatch({
              type: 'batch-filter',
              dimCode,
              values: filtered.map((v) => v.value),
              checked: true,
            })
          }}
        >
          {search ? '添加到选中' : '全选'}
        </Button>
        <Button
          size="small"
          style={{ marginLeft: 8 }}
          onClick={() => {
            dispatch({
              type: 'batch-filter',
              dimCode,
              values: filtered.map((v) => v.value),
              checked: false,
            })
          }}
        >
          {search ? '从选中中移除' : '全不选'}
        </Button>
      </div>
    </PopupDiv>
  )
}

const IndicatorChooseDiv = styled.div`
  --border-color: #edeff2;

  display: flex;
  border: 1px solid var(--border-color);
`

const IndicatorsPartDiv = styled.div`
  width: 300px;

  .title {
    background: #eaedf2;
    color: #7f8a9c;
    padding-left: 8px;
    height: 32px;
    line-height: 32px;
  }

  .ind-list {
    height: 300px;
    overflow: auto;

    > li {
      height: 28px;
      display: flex;
      align-items: center;
    }

    .ind-item {
      padding: 0 8px;
      flex: 1 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .clickable-ind-item {
      cursor: pointer;
    }

    .draggable-ind-item {
      border-bottom: 1px solid var(--border-color);
      background: white;
      transition: box-shadow 300ms;

      &.dragging {
        border: 1px solid var(--border-color);
        box-shadow: #adadad54 0 0 5px 0.5px;
      }
    }
  }
`

export function DataDimColumnTitle({
  meta,
  state: stateProp,
  dispatch,
}: {
  meta: PivotMeta
  state: PivotState
  dispatch: Dispatch
}) {
  const [visible, setVisible] = useState(false)
  const onClose = () => setVisible(false)

  const [state, setState] = useDeriveState<PivotState>(stateProp, [visible], ([visible], prevState) => {
    if (visible) {
      return stateProp
    }
    return prevState
  })

  const dimMap = new Map(meta.dimensions.map((dim) => [dim.code, dim]))

  const onOk = () => {
    dispatch({
      type: 'change-dim-codes',
      dimCodes: state.dimCodes,
      filters: meta.dimValues,
    })
    onClose()
  }

  useEffect(() => {
    if (visible) {
    }
  }, [visible])

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <b>数据维度</b>
      <div
        style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setVisible(true)}
      >
        <Settings16 style={{ fill: 'currentColor' }} />
        <span style={{ marginLeft: 4 }}>设置</span>
        <Dialog closeable={false} title="数据维度配置" visible={visible} onOk={onOk} onCancel={onClose}>
          {/*<div> TODO 预设的维度</div>*/}

          <IndicatorChooseDiv>
            <IndicatorsPartDiv>
              <div className="title">
                选择维度（{state.dimCodes.length}/{meta.dimensions.length}）
              </div>
              <ul className="ind-list">
                {meta.dimensions.map((dim) => (
                  <li key={dim.code}>
                    <Checkbox
                      className="ind-item clickable-ind-item"
                      checked={state.dimCodes.includes(dim.code)}
                      onChange={(checked) => {
                        setState((prev) =>
                          produce(prev, (draft) => {
                            if (checked) {
                              draft.dimCodes.push(dim.code)
                            } else {
                              draft.dimCodes.splice(draft.dimCodes.indexOf(dim.code), 1)
                            }
                          }),
                        )
                      }}
                    >
                      {dim.name}
                    </Checkbox>
                  </li>
                ))}
              </ul>
            </IndicatorsPartDiv>

            <IndicatorsPartDiv style={{ borderLeft: '1px solid var(--border-color)' }}>
              <div className="title">已选（{state.dimCodes.length}）</div>
              <DragDropContext
                onDragEnd={(result) => {
                  if (result.destination == null) {
                    return
                  }
                  setState((prev) =>
                    produce(prev, (draft) => {
                      const i = result.source.index
                      const j = result.destination.index
                      const [code] = draft.dimCodes.splice(i, 1)
                      draft.dimCodes.splice(j, 0, code)
                    }),
                  )
                }}
              >
                <Droppable droppableId="selected-dimensions" direction="vertical">
                  {(dropProvided, snapshot) => (
                    <ul className="ind-list" ref={dropProvided.innerRef}>
                      {state.dimCodes.map((dimCode, index) => (
                        <Draggable key={dimCode} index={index} draggableId={dimCode}>
                          {(dragProvided, snapshot) => {
                            return (
                              <li ref={dragProvided.innerRef} {...dragProvided.draggableProps}>
                                <div className={cx('ind-item draggable-ind-item', { dragging: snapshot.isDragging })}>
                                  {dimMap.get(dimCode).name}
                                  <div {...dragProvided.dragHandleProps} style={{ marginLeft: 'auto' }}>
                                    <DragVertical16 style={{ fill: 'currentColor' }} />
                                  </div>
                                </div>
                              </li>
                            )
                          }}
                        </Draggable>
                      ))}
                      {dropProvided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </IndicatorsPartDiv>
          </IndicatorChooseDiv>
        </Dialog>
      </div>
    </div>
  )
}
