import { Button, Checkbox, Dialog, Input, Overlay } from '@alifd/next'
import { DragVertical16, Filter16, Settings16 } from '@carbon/icons-react'
import cx from 'classnames'
import produce from 'immer'
import { toJS } from 'mobx'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Pivot } from './models'

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
  padding: 0;
  list-style: none;
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
    color: var(--ifm-color-gray-1000);
    background: var(--ifm-color-gray-200);
    margin-left: 8px;
    display: flex;
    align-items: center;

    &.active {
      background: #5484ff;
      color: var(--ifm-color-gray-100);
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
  pivot: Pivot
  style?: React.CSSProperties
  className?: string
}

export function CheckedDimList({ style, className, pivot }: CheckDimListProps) {
  const dimMap = new Map(pivot.allDimensions.map((dim) => [dim.code, dim]))

  return (
    <CheckedDimListDiv style={style} className={className}>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) {
            return
          }
          const i = result.source.index
          const j = result.destination.index
          const nextCodes = pivot.dimCodes.slice()
          const [code] = nextCodes.splice(i, 1)
          nextCodes.splice(j, 0, code)
          pivot.changeDimCodes(nextCodes)
        }}
      >
        <Droppable droppableId="dimension-list" direction="horizontal">
          {(dropProvided, snapshot) => (
            <div className="tag-list" ref={dropProvided.innerRef}>
              {pivot.dimCodes.map((dimCode, index) => {
                const allValues = pivot.dimValues[dimCode]
                const values = pivot.filters[dimCode]

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
                        <CheckedDimFilterPopup pivot={pivot} allValues={allValues} values={values} dimCode={dimCode} />
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
  pivot,
  dimCode,
}: {
  dimCode: string
  allValues: string[]
  values: string[]
  pivot: Pivot
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
              <Checkbox checked={set.has(value)} onChange={(checked) => pivot.filter(dimCode, value, checked)}>
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
            pivot.batchFilter(
              dimCode,
              filtered.map((v) => v.value),
              true,
            )
          }}
        >
          {search ? '添加到选中' : '全选'}
        </Button>
        <Button
          size="small"
          style={{ marginLeft: 8 }}
          onClick={() => {
            pivot.batchFilter(
              dimCode,
              filtered.map((v) => v.value),
              false,
            )
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
    padding: 0;
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

export function PrimaryColumnTitle({ pivot }: { pivot: Pivot }) {
  const [visible, setVisible] = useState(false)
  const onClose = () => setVisible(false)

  const [state, setState] = useState(() => toJS(pivot))
  useEffect(() => {
    if (visible) {
      setState(toJS(pivot))
    }
  }, [visible])

  const dimMap = new Map(pivot.allDimensions.map((dim) => [dim.code, dim]))

  const onOk = () => {
    pivot.changeDimCodes(state.dimCodes, pivot.dimValues)
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
          <IndicatorChooseDiv>
            <IndicatorsPartDiv>
              <div className="title">
                选择维度（{state.dimCodes.length}/{pivot.allDimensions.length}）
              </div>
              <ul className="ind-list">
                {pivot.allDimensions.map((dim) => (
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
