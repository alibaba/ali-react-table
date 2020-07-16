import { Button, Checkbox, Drawer } from '@alifd/next'
import { Column16, Download16 } from '@carbon/icons-react'
import { ArtColumn, collectNodes, isLeafNode, makeVisibleTransform, TableTransform } from 'ali-react-table'
import React, { CSSProperties, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const TreeDiv = styled.div`
  .group {
    margin: 8px 0;
    .group {
      margin: 4px 0;
    }
  }

  .line {
    height: 28px;
    display: flex;
    align-items: center;

    .checkbox {
      flex: 0 0 50%;
    }
  }

  .group-header {
    height: 32px;
    display: flex;
    align-items: center;
  }

  .group-content {
    margin-left: 16px;
  }
`

const Header = styled.header`
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--bd-color);
  padding: 0 20px;

  .actions {
    margin-left: auto;
    margin-right: 20px;
    > .action {
      margin-left: 8px;
      color: var(--action-color);
      cursor: pointer;
      font-size: 14px;
    }
  }
`

const Footer = styled.footer`
  flex: 0 0 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--bd-color);
  margin-top: auto;
`

export interface CustomColumnsDialogProps {
  defaultVisible?: boolean
  trigger(onOpen: () => void): ReactNode
  defaultCheckedCodes?: string[]
  enforceCheckedCodes?: string[]
  checkedCodes: string[]
  onChangeCheckedCodes(cols: string[]): void
  columns: ArtColumn[]
  drawerProps?: any

  style?: CSSProperties
  className?: string

  showCheckAll: boolean
  showUncheckAll: boolean
  drawerComponent?: any
}

CustomColumnsDialog.defaultProps = {
  showCheckAll: true,
  showUncheckAll: true,
}

function makeStyledDrawer(Drawer: any) {
  return styled(Drawer)`
    --action-color: #5584ff;
    --bd-color: #e8e8e8;

    .hippo-drawer-header,
    .next-dialog-header {
      display: none;
    }

    .next-drawer-body,
    .hippo-drawer-body,
    .next-dialog-body {
      padding: 0;
      display: flex;
      flex-flow: column;
      height: 100%;

      > main {
        overflow: auto;
        padding: 20px;
      }
    }
  `
}

const StyledDiv = makeStyledDrawer('div')

export function CustomColumnsDialog({
  trigger,
  defaultVisible,
  defaultCheckedCodes,
  enforceCheckedCodes,
  checkedCodes,
  onChangeCheckedCodes,
  columns,
  style,
  className,
  showCheckAll,
  showUncheckAll,
  drawerProps,
  drawerComponent: drawerComponentProp,
}: CustomColumnsDialogProps) {
  const DrawerComponent = Drawer

  const [visible, setVisible] = useState(Boolean(defaultVisible))
  const onOpen = () => setVisible(true)
  const onClose = () => setVisible(false)

  const [editingCheckedCodes, updateEditingCheckedCodes] = useState(checkedCodes)
  const editingCheckedCodeSet = new Set(editingCheckedCodes)

  useEffect(() => {
    if (visible) {
      updateEditingCheckedCodes(checkedCodes)
    }
  }, [visible])

  const onOk = () => {
    onChangeCheckedCodes(editingCheckedCodes)
    onClose()
  }

  const onCheck = (targetCodes: string[], action: 'check' | 'uncheck') => {
    if (action === 'check') {
      updateEditingCheckedCodes(
        editingCheckedCodes.concat(targetCodes.filter((code) => !editingCheckedCodeSet.has(code))),
      )
    } else {
      const targetCodeSet = new Set(targetCodes)
      updateEditingCheckedCodes(editingCheckedCodes.filter((code) => !targetCodeSet.has(code)))
    }
  }

  function dfs(columns: ArtColumn[]) {
    let lineCount = 0
    let tempLine: ReactNode[] = []
    const nodes: ReactNode[] = []
    const codes: string[] = []
    let allCheck = true
    let anyCheck = false

    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
      const col = columns[colIndex]
      if (isLeafNode(col)) {
        if (col.code) {
          const enforce = enforceCheckedCodes && enforceCheckedCodes.includes(col.code)
          const checked = editingCheckedCodeSet.has(col.code)

          if (!enforce) {
            codes.push(col.code)

            if (checked) {
              anyCheck = true
            } else {
              allCheck = false
            }
          }

          addToTempLine(
            <Checkbox
              key={colIndex}
              className="checkbox"
              checked={checked || enforce}
              disabled={enforce}
              onChange={() => onCheck([col.code], checked ? 'uncheck' : 'check')}
            >
              {col.name}
            </Checkbox>,
          )
        } // else 忽略 col.code 为空的 column
      } else {
        const sub = dfs(col.children)
        if (!sub.allCheck) {
          allCheck = false
        }
        if (sub.anyCheck) {
          anyCheck = true
        }
        codes.push(...sub.codes)
        flushTempLine(true)
        nodes.push(
          <div className="group" key={colIndex}>
            <div className="group-header">
              <Checkbox
                className="checkbox"
                checked={sub.allCheck}
                indeterminate={!sub.allCheck && sub.anyCheck}
                onChange={() => onCheck(sub.codes, sub.allCheck ? 'uncheck' : 'check')}
              >
                {col.name}
              </Checkbox>
            </div>
            <div className="group-content">{sub.nodes}</div>
          </div>,
        )
      }
    }

    flushTempLine(true)

    return { nodes, allCheck, anyCheck, codes }

    function addToTempLine(node: ReactNode) {
      flushTempLine(false)
      tempLine.push(node)
    }

    function flushTempLine(force: boolean) {
      const FLAT_COUNT = 2
      if ((force && tempLine.length > 0) || tempLine.length >= FLAT_COUNT) {
        nodes.push(
          <div className="line" key={`line-${lineCount}`}>
            {tempLine}
          </div>,
        )
        lineCount += 1
        tempLine = []
      }
    }
  }

  const dfsResult = dfs(columns)

  const props = {
    title: null,
    footer: null,
    visible,
    onClose,
    className,
    style: { width: 500, ...style },
    ...drawerProps,
  }
  const content = (
    <>
      <Header>
        <span style={{ fontSize: 14 }}>自定义显示列</span>
        <div className="actions">
          {defaultCheckedCodes && (
            <span className="action" onClick={() => updateEditingCheckedCodes(defaultCheckedCodes)}>
              恢复默认
            </span>
          )}
          {showCheckAll && (
            <span className="action" onClick={() => onCheck(dfsResult.codes, 'check')}>
              全选
            </span>
          )}
          {showUncheckAll && (
            <span className="action" onClick={() => onCheck(dfsResult.codes, 'uncheck')}>
              全不选
            </span>
          )}
        </div>
      </Header>

      <main>
        <TreeDiv>{dfsResult.nodes}</TreeDiv>
      </main>

      <Footer>
        <Button type="primary" onClick={onOk}>
          确认
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={onClose}>
          取消
        </Button>
      </Footer>
    </>
  )

  return (
    <>
      {trigger(onOpen)}
      {drawerComponentProp
        ? React.createElement(drawerComponentProp, props, content)
        : React.createElement(StyledDiv, { as: DrawerComponent, ...props }, content)}
    </>
  )
}

const OperationBarDiv: any = styled.div`
  z-index: 50;
  height: 32px;
  display: flex;
  align-items: center;
  background-color: white;

  .item {
    margin-left: 16px;
    &:first-child {
      margin-left: 0;
    }
  }

  .group {
    display: flex;
    align-items: center;
  }

  .separator {
    margin-left: auto;
    margin-right: auto;
  }

  .action {
    display: flex;
    align-items: center;
    color: var(--action-color);
    cursor: pointer;
    padding: 4px;

    > .icon {
      fill: currentColor;
      margin-right: 2px;
    }
  }
`

export type TableOperationFeature =
  | { type: 'separator' }
  | { type: 'custom-columns'; drawerComponent?: any }
  | { type: 'export'; onExport(): void }
  | { type: 'toggle'; key: string; title: ReactNode; transform?(checked: boolean): TableTransform }
  | { type: 'custom'; node?: ReactNode; transform?: TableTransform }
  | { type: 'click'; title: ReactNode; onClick?(): void }

type HTMLDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function useOperationBar({
  features,
  columns,
  actionColor = '#23a3ff',
}: {
  features: TableOperationFeature[]
  columns: ArtColumn[]
  actionColor?: string
}) {
  const codeGroups = useMemo(() => {
    const leafColumns = collectNodes(columns, 'leaf-only')
    const defaultVisible = leafColumns.filter((col) => col.features?.defaultVisible).map((col) => col.code)
    const enforceVisible = leafColumns.filter((col) => col.features?.enforceVisible).map((col) => col.code)
    return { defaultVisible, enforceVisible }
  }, [columns])

  const [visibleCodes, onChangeVisibleCodes] = useState(codeGroups.defaultVisible)
  const [map, setMap] = useState<{ [key: string]: any }>({})

  const transforms: TableTransform[] = []
  const nodes: ReactNode[] = []

  for (let index = 0; index < features.length; index++) {
    const feat = features[index]
    if (feat.type === 'separator') {
      nodes.push(<span className="item separator" key={index} />)
    } else if (feat.type === 'custom-columns') {
      if (process.env.NODE_ENV !== 'production') {
        if (codeGroups.enforceVisible.length === 0 && codeGroups.defaultVisible.length === 0) {
          console.warn(
            'ali-react-table <CustomColumnsDialog /> 表格缺少默认可见列，请通过 column.features.defaultVisible ' +
              '或 column.features.enforceVisible 来设置默认可见的列',
            columns,
          )
        }
      }

      nodes.push(
        <CustomColumnsDialog
          key={index}
          columns={columns}
          drawerComponent={feat.drawerComponent}
          checkedCodes={visibleCodes}
          onChangeCheckedCodes={onChangeVisibleCodes}
          defaultCheckedCodes={codeGroups.defaultVisible}
          enforceCheckedCodes={codeGroups.enforceVisible}
          trigger={(onOpen) => (
            <span className="item action" onClick={onOpen}>
              <Column16 className="icon" />
              自定义列
            </span>
          )}
          style={{ '--action-color': actionColor } as any}
        />,
      )
      transforms.push(makeVisibleTransform(visibleCodes.concat(codeGroups.enforceVisible)))
    } else if (feat.type === 'export') {
      nodes.push(
        <span key={index} className="item action" onClick={feat.onExport}>
          <Download16 className="icon" />
          导出
        </span>,
      )
    } else if (feat.type === 'click') {
      nodes.push(
        <span key={index} className="item action" onClick={feat.onClick}>
          {feat.title}
        </span>,
      )
    } else if (feat.type === 'toggle') {
      const checked = map[feat.key] ?? false
      nodes.push(
        <Checkbox
          key={index}
          className="item"
          checked={checked}
          onChange={() => setMap({ ...map, [feat.key]: !map[feat.key] })}
        >
          {feat.title}
        </Checkbox>,
      )
      if (feat.transform) {
        transforms.push(feat.transform(checked))
      }
    } else if (feat.type === 'custom') {
      if (feat.node) {
        nodes.push(
          <span className="item" key={index}>
            {feat.node}
          </span>,
        )
      }
      if (feat.transform) {
        transforms.push(feat.transform)
      }
    } else {
      throw new Error('Unsupported action')
    }
  }

  const view = useCallback(
    (props: HTMLDivProps) => (
      <OperationBarDiv
        {...props}
        style={
          {
            '--action-color': actionColor,
            ...props.style,
          } as any
        }
      />
    ),
    [OperationBarDiv, actionColor],
  )

  return { transforms, nodes, view }
}
