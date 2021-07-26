import * as fusion from '@alifd/next'
import { Button } from '@alifd/next'
import { ArtColumn, collectNodes, features, isLeafNode, useTablePipeline } from 'ali-react-table'
import {
  columns1,
  columns3,
  columns4,
  columns5,
  columns6,
  dataSource1,
  dataSource3,
  dataSource4,
  dataSource5,
  dataSource6,
  operationCol,
  randomPick,
} from 'assets/biz-assets'
import { getAppTrafficData } from 'assets/cdn-data'
import { ratio } from 'assets/format'
import { RadioButtonGroup } from 'assets/RadioButtonGroup'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default { title: 'pipeline 功能拓展' }

export function 树形表格() {
  const [openKeys, onChangeOpenKeys] = useState(['4', '4-2'])
  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource: dataSource4, columns: columns4 })
    .primaryKey('id')
    .use(features.treeMode({ openKeys, onChangeOpenKeys }))

  const allParentKeys = collectNodes(dataSource4, 'pre')
    .filter((row) => !isLeafNode(row))
    .map((row) => row.id)

  return (
    <div>
      <Button.Group>
        <Button onClick={() => onChangeOpenKeys(allParentKeys)}>展开全部</Button>
        <Button onClick={() => onChangeOpenKeys([])}>收拢全部</Button>
      </Button.Group>
      <p>
        openKeys: {openKeys.join(', ')} {openKeys.length === 0 && '[空]'}
      </p>
      <WebsiteBaseTable {...pipeline.getProps()} />
    </div>
  )
}

export function 行多选() {
  const [value, onChange] = useState(['1', '3'])

  // 实际使用时注意设置 ctx.components, 例如...
  //   import * as fusion from '@alifd/next'
  //   useTablePipeline({ components: fusion })
  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource: dataSource4, columns: columns4 })
    .primaryKey('id')
    .mapDataSource((dataSource) => collectNodes(dataSource, 'pre'))
    .snapshot('flat')
    .use(
      features.multiSelect({
        value,
        onChange,
        highlightRowWhenSelected: true,
        isDisabled(row: any) {
          return row.id.startsWith('4-')
        },
        checkboxPlacement: 'start',
        checkboxColumn: { lock: true },
        clickArea: 'row',
      }),
    )
    .mapColumns(([a, ...b]) => [a, { name: 'id', code: 'id', width: 80 }, ...b])

  return (
    <div>
      <p>注意：行单选依赖于 pipeline.ctx.components.Checkbox 组件，需要配合组件库使用。</p>
      <Button.Group>
        <Button onClick={() => onChange([])}>清空选中状态</Button>
        <Button
          onClick={() => {
            const flatData = pipeline.getDataSource('flat')
            const primaryKey = pipeline.ctx.primaryKey as string
            const allKeys = flatData.map((row) => row[primaryKey])
            onChange(allKeys.filter((key) => !value.includes(key)))
          }}
        >
          反转选中状态
        </Button>
        <Button
          onClick={() => {
            const flatData = pipeline.getDataSource('flat')
            const primaryKey = pipeline.ctx.primaryKey as string
            const allKeys = flatData.map((row) => row[primaryKey])
            onChange(allKeys.filter(() => Math.random() < 0.25))
          }}
        >
          随机设置
        </Button>
      </Button.Group>
      <WebsiteBaseTable style={{ marginTop: 16 }} {...pipeline.getProps()} />
    </div>
  )
}

export function 行单选() {
  const [value, onChange] = useState('1')
  const [clickArea, setClickArea] = useState<features.SingleSelectFeatureOptions['clickArea']>('radio')
  const [radioPlacement, setRadioPlacement] = useState<features.SingleSelectFeatureOptions['radioPlacement']>('start')
  const [highlightRowWhenSelected, setHighlightRowWhenSelected] = useState(true)

  // 实际使用时注意设置 ctx.components, 例如...
  //   import * as fusion from '@alifd/next'
  //   useTablePipeline({ components: fusion })
  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource: dataSource1, columns: columns1 })
    .primaryKey('id')
    .use(features.singleSelect({ value, onChange, highlightRowWhenSelected, radioPlacement, clickArea }))

  return (
    <div>
      <p>注意：行单选依赖于 pipeline.ctx.components.Radio 组件，需要配合组件库使用。</p>
      <div>
        <span>复选框摆放位置(checkboxPlacement): </span>
        <RadioButtonGroup
          dataSource={[
            { value: 'start', label: '左侧' },
            { value: 'end', label: '右侧' },
          ]}
          value={radioPlacement}
          onChange={setRadioPlacement as any}
        />
      </div>

      <div style={{ marginTop: 8 }}>
        <span>是否高亮选中行(highlightRowWhenSelected): </span>
        <RadioButtonGroup
          dataSource={[
            { value: 'true', label: '开启' },
            { value: 'false', label: '关闭' },
          ]}
          value={String(highlightRowWhenSelected)}
          onChange={(v) => setHighlightRowWhenSelected(v === 'true')}
        />
      </div>

      <div style={{ marginTop: 8 }}>
        <span>点击触发范围(clickArea): </span>
        <RadioButtonGroup
          dataSource={[
            { value: 'checkbox', label: '控件' },
            { value: 'cell', label: '单元格' },
            { value: 'row', label: '整行' },
          ]}
          value={clickArea}
          onChange={setClickArea as any}
        />
      </div>

      <div style={{ margin: '12px 0' }}>
        <Button.Group>
          <Button onClick={() => onChange(randomPick(dataSource1.map((row) => row.id)))}>随机选择</Button>
          <Button onClick={() => onChange('')}>取消选中</Button>
        </Button.Group>
        <p>当前选中的 key： {value || '[空]'}</p>
      </div>

      <WebsiteBaseTable {...pipeline.getProps()} />
    </div>
  )
}

export function 行展开() {
  const pipeline = useTablePipeline({ components: fusion as any })
    .input({
      // dataSource 结构：
      //  [ { id: '1', title: '阿里巴巴网络技术有限公司', children: [...] },
      //    { id: '2', title: '蚂蚁金服有限公司', children: [...] },
      //    { id: '3', title: '其他', children: [...] }, ]
      dataSource: dataSource5,
      columns: columns5,
    })
    .primaryKey('id')
    // 受控用法：rowGrouping({ openKeys, onChangeOpenKeys })
    .use(features.rowGrouping({ defaultOpenKeys: ['1', '2'] }))

  return <WebsiteBaseTable {...pipeline.getProps()} />
}

export function 表格排序() {
  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource: dataSource3, columns: columns3 })
    .use(
      features.sort({
        mode: 'single',
        defaultSorts: [{ code: 'applier', order: 'asc' }],
        highlightColumnWhenActive: true,
      }),
    )

  return <WebsiteBaseTable {...pipeline.getProps()} />
}

export function 多列排序() {
  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource: dataSource3, columns: columns3 })
    .use(
      features.sort({
        mode: 'multiple',
        defaultSorts: [{ code: 'applier', order: 'asc' }],
        highlightColumnWhenActive: true,
      }),
    )

  return <WebsiteBaseTable {...pipeline.getProps()} />
}

export function 树状模式与层级排序() {
  const columns: ArtColumn[] = [
    { code: 'name', name: '数据维度', lock: true, width: 200 },
    { code: 'shop_name', name: '门店', features: { sortable: true } },
    { code: 'imp_uv_dau_pct', name: '曝光UV占DAU比例', render: ratio, align: 'right', features: { sortable: true } },
    { code: 'app_qty_pbt', name: 'APP件单价', align: 'right', features: { sortable: true } },
    { code: 'all_app_trd_amt_1d', name: 'APP成交金额汇总', align: 'right', features: { sortable: true } },
  ]

  const [state, setState] = useState({ isLoading: true, data: [] as any[] })

  useEffect(() => {
    getAppTrafficData().then((data) => {
      setState({ isLoading: false, data })
    })
  }, [])

  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ columns, dataSource: state.data })
    .primaryKey('id')
    .use(features.buildTree('id', 'parent_id'))
    .use(features.sort({ mode: 'single', highlightColumnWhenActive: true }))
    .use(features.treeMode({ defaultOpenKeys: ['B2C'] }))

  return <WebsiteBaseTable isLoading={state.isLoading} {...pipeline.getProps()} />
}

export function 表头分组与列高亮() {
  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource: dataSource6, columns: columns6 })
    .use(features.columnRangeHover())

  return <WebsiteBaseTable className="bordered" {...pipeline.getProps()} />
}

export function 多选与提示信息() {
  const columns = [
    { code: 'title', name: '标题', width: 200, features: { tips: '我是指标的详细信息~~' } },
    { code: 'dept', name: '部门名称', width: 180 },
    { code: 'dest', name: '团建目的地', width: 160 },
    { code: 'guide', name: '当地导游', width: 160 },
    operationCol,
  ]

  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource: dataSource4, columns })
    .primaryKey('id')
    .mapDataSource((dataSource) => collectNodes(dataSource, 'pre'))
    .use(
      features.multiSelect({
        defaultValue: ['1', '3'],
        highlightRowWhenSelected: true,
        clickArea: 'cell',
      }),
    )
    .use(features.tips())

  return <WebsiteBaseTable {...pipeline.getProps()} />
}

const DetailDiv = styled.div`
  margin: 16px;
  display: flex;
  min-width: 800px;

  p:first-child {
    margin-top: 0;
  }
  p {
    margin: 0;
    line-height: 20px;
  }

  .right {
    margin-left: 48px;
  }
`

export function 行详情() {
  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource: dataSource1, columns: columns1.slice(0, 4) })
    .primaryKey('id')
    .use(
      features.rowDetail({
        defaultOpenKeys: ['2'],
        renderDetail(row: any) {
          return (
            <DetailDiv>
              <div className="left">
                <p>最近工作：高级经理｜{row.dept}｜2009-07-01 至今</p>
                <p>工作职责：巴拉巴拉小魔仙</p>
                <p>联系方式：67676767｜1212121@163.con</p>
              </div>
              <div className="right">
                <p>教育经理：北京大学｜工商管理｜2007-09-01 至 2006-06-01</p>
                <p>中央财经大学｜2004-09-01 至 2007-06-01</p>
              </div>
            </DetailDiv>
          )
        },
      }),
    )

  return <WebsiteBaseTable {...pipeline.getProps()} />
}

export function 树形可选择表格() {
  const dataSource = dataSource4
  const columns = [
    { lock: true, code: 'id', name: 'id', width: 100 },
    { code: 'title', name: '标题', width: 200 },
    { code: 'dept', name: '部门名称', width: 180 },
    { code: 'dest', name: '团建目的地', width: 160 },
    { code: 'guide', name: '当地导游', width: 160 },
  ]

  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource, columns })
    .primaryKey('id')
    .use(features.treeMode())
    .use(
      features.treeSelect({
        tree: dataSource,
        rootKey: 'root',
        defaultValue: ['1', '2', '3'],
        onChange(v) {
          console.log('TreeSelect onChange', v)
        },
        checkboxColumn: { lock: true },
        highlightRowWhenSelected: true,
        clickArea: 'cell',
        checkedStrategy: 'parent',
        isDisabled(row: any): boolean {
          return row.id === '2'
        },
      }),
    )

  return (
    <div>
      <p>注意 id=2 的行 detached 属性为 true，选中状态不与其父节点关联</p>
      <WebsiteBaseTable {...pipeline.getProps()} />
    </div>
  )
}
