import { ArtColumn, features, useTablePipeline } from 'ali-react-table'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import React, { useRef, useState } from 'react'
import { Button, Checkbox, Divider } from "@alifd/next";

export default { title: '滚动到指定位置' }

interface Node {
  id: string,
  pid: string,
  name?: string,
  value?: string,
  children?: Node[]
}

const ROOT_ID = '0'
const NODE = 10000 // 一级节点数量
const CHILDREN = 3 // 后代节点数量
const TEXT = 100   // 随机文本长度

const random = (count: number) => Math.ceil(Math.random() * count)

const buildData = function (depth: number, size: number, pid: string, parents: Node[]) {
  for (let i = 0; i < size; i++) {
    const id = [pid, i + 1].join('-')
    const node: Node = {
      id,
      pid: pid,
      name: `键-${id}`,
      value: new Array(random(TEXT)).fill('文本').join('-'),
      children: []
    }
    parents.push(node)
    depth > 0 && buildData(depth - 1, CHILDREN, node.id, node.children)
  }
}

const dataSource: Node[] = []
buildData(3, NODE, ROOT_ID, dataSource)

/**
 * 根据节点查找所有上级节点，返回完整层级的key集合
 * @param node
 * @param tree
 * @param idProp
 * @param pidProp
 */
function findParents (node: any, tree: any[], idProp = 'id', pidProp = 'pid'): string[] {
  const findParentById = (id: string, nodes: any[], parents: any[]) => {
    for (let i = 0; i < nodes.length; i++) {
      let item = nodes[i]
      if (item[idProp] === id) {
        return parents.push(item)
      }
      if (item.children && item.children.length) {
        findParentById(id, item.children, parents)
      }
    }
  }
  const findParentChainById = (id: string, nodes: any[], parents: any[] = [], index = 0) => {
    if (id === '0') return
    findParentById(id, nodes, parents)
    findParentChainById(parents[index][pidProp], nodes, parents, ++index)
    return parents
  }
  return findParentChainById(node[idProp], tree).map(item => item[idProp])
}

export function 基本用法 () {
  const columns: ArtColumn[] = [
    { code: 'index', name: '索引', width: 80, align: 'center', getValue: (row: any, rowIndex: number): any => rowIndex },
    { code: 'name', name: '键', width: 200 },
    { code: 'value', name: '值', width: 200 },
  ]

  const [useDiv, setUseDiv] = useState(true)
  const [openKeys, setOpenKeys] = useState([])
  const [rowIndex, setRowIndex] = useState(0)
  const [rowKey, setRowKey] = useState('?')

  const tableRef = useRef(null)

  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource, columns: columns })
    .primaryKey('id')
    .use(features.columnResize())
    .use(features.treeMode({
      openKeys,
      onChangeOpenKeys: setOpenKeys,
      treeColumnCode: 'name'
    }))

  return (
    <div>
      <div style={{ marginBottom: 16, position: 'sticky', top: 0, zIndex: 99999 }}>
        <Button.Group>
          <Button onClick={_ => setOpenKeys([])}>收起所有</Button>
          <Button onClick={_ => setOpenKeys(dataSource.map(node => node.id))}>展开一级</Button>
          <Button onClick={_ => {
            setOpenKeys(dataSource.map(node => (node.children || []).map(child => child.id).concat(node.id)).flat(1))
          }}>
            展开二级
          </Button>
          <Button onClick={_ => {
            const rowIndex = Math.round(Math.random() * NODE)
            setRowIndex(rowIndex)
            tableRef.current.scrollTo({ rowIndex, offset: -32 })
          }}>
            随机索引定位：{rowIndex}
          </Button>
          <Button onClick={_ => {
            // 生成一个范围内的父节点ID
            const rowKey = [ROOT_ID, random(NODE), random(CHILDREN), random(CHILDREN)].join('-')
            setRowKey(rowKey)
            setOpenKeys(openKeys.concat(findParents({ id: rowKey }, dataSource)))
            setTimeout(() => {
              tableRef.current.scrollTo({ rowKey, offset: -32 })
            })
          }}>
            随机主键定位：{rowKey}
          </Button>
          <Button onClick={_ => {
            setOpenKeys(['0-9999', '0-9999-9'])
            setTimeout(() => {
              tableRef.current.scrollTo({ rowKey: '9999-1-1', offset: -32 })
            })
          }}>
            跳转到 <span>9999-1-1</span> 节点
          </Button>
        </Button.Group>
        <Divider direction="ver" />
        <Checkbox defaultChecked={useDiv} onChange={v => setUseDiv(v)}>使用DIV作为容器</Checkbox>
      </div>

      <WebsiteBaseTable
        ref={tableRef}
        useOuterBorder={true}
        {...pipeline.getProps()}
        style={useDiv ? { width: '100%', height: 380, overflow: 'auto' } : {}}
      />
    </div>
  )
}
