import { Column16, Download16 } from '@carbon/icons-react'
import React, { ReactNode, useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { collectNodes } from '../utils'
import { ArtColumn, TableTransform } from '../interfaces'
import { makeVisibleTransform } from '../transforms'
import CustomColumnsDialog from './CustomColumnsDialog'

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
  components,
  actionColor = '#23a3ff',
}: {
  features: TableOperationFeature[]
  columns: ArtColumn[]
  components: any
  actionColor?: string
}) {
  const { Checkbox } = components

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
          components={components}
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
