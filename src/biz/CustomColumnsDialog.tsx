import React, { CSSProperties, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { STYLED_VERSION } from '../base-table/utils'
import { isLeafNode } from '../common-utils'
import { ArtColumn } from '../interfaces'

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
  components: any
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

/** 自定义列对话框，支持 hippo（已经完成） / fusion（开发中） 两种组件体系 */
function CustomColumnsDialog({
  trigger,
  defaultVisible,
  defaultCheckedCodes,
  enforceCheckedCodes,
  checkedCodes,
  onChangeCheckedCodes,
  columns,
  components,
  style,
  className,
  showCheckAll,
  showUncheckAll,
  drawerProps,
  drawerComponent: drawerComponentProp,
}: CustomColumnsDialogProps) {
  const { Button, Checkbox, PageDialog, Drawer } = components

  if (process.env.NODE_ENV !== 'production' && STYLED_VERSION === 'v3' && drawerComponentProp == null) {
    console.warn(
      'ali-react-table 自定义列对话框组件在配合 styled-components@3 使用时，' +
        '请从上层传入 drawerComponent 以提供经过样式处理的 Drawer 组件\n' +
        '\n' +
        'const StyledDrawer = CustomColumnsDialog.makeStyledDrawer(Drawer)\n' +
        '// 或是 const StyledDrawer = CustomColumnsDialog.makeStyledDrawer(PageDialog)\n' +
        '\n' +
        '// 然后将 StyledDrawer 传递给 CustomColumnsDialog 组件：\n' +
        '<CustomColumnsDialog drawerComponent={StyledDrawer} {...othersProps} />\n' +
        '\n' +
        '如果你是通过表格操作栏使用自定义列对话框组件，那么要在 feature 中设置 drawerComponent：\n' +
        "features: [ { type: 'custom-columns', drawerComponent: StyledDrawer } ]",
    )
  }

  const DrawerComponent = Drawer ?? PageDialog

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

CustomColumnsDialog.makeStyledDrawer = makeStyledDrawer

export default CustomColumnsDialog
