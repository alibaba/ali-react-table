import { Button } from '@alifd/next'
import { ArtColumn, collectNodes, features, isLeafNode } from 'ali-react-table'
import cx from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { getAppTrafficData } from '../assets/cdn-data'
import { amount, lfl, ratio } from '../assets/format'
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
} from '../assets/mock-table-data'
import { RadioButtonGroup } from '../assets/RadioButtonGroup'
import { BaseTable, useTablePipeline } from '../assets/theme-helpers'

export default {
  title: '表格 / pipeline 功能拓展',
  parameters: {
    docs: {
      page() {
        return (
          <div
            style={{
              margin: 'auto',
              background: 'rgba(0, 0, 0, 0.03)',
              borderRadius: 10,
              padding: 30,
            }}
          >
            示例过多，docs page 已在此处禁用，请在页面上方切换到「Canvas」模式
          </div>
        )
      },
    },
  },
}

export function 树形表格() {
  const [openKeys, onChangeOpenKeys] = useState(['4', '4-2'])
  const pipeline = useTablePipeline()
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
      <BaseTable {...pipeline.getProps()} />
    </div>
  )
}

export function 行多选() {
  const [value, onChange] = useState({ keys: ['1', '3'], lastKey: '' })

  // 实际使用时注意设置 ctx.components, 例如...
  //   import * as fusion from '@alifd/next'
  //   useTablePipeline({ components: fusion })
  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource4, columns: columns4 })
    .primaryKey('id')
    .mapDataSource((dataSource) => collectNodes(dataSource, 'pre'))
    .snapshot('flat')
    .use(features.multiSelect({ value, onChange, highlightRowWhenSelected: true }))

  return (
    <div>
      <p>注意：行单选依赖于 pipeline.ctx.components.Checkbox 组件，需要配合组件库使用。</p>
      <Button.Group>
        <Button onClick={() => onChange({ keys: [], lastKey: null })}>清空选中状态</Button>
        <Button
          onClick={() => {
            const flatData = pipeline.getDataSource('flat')
            const primaryKey = pipeline.ctx.primaryKey as string
            const allKeys = flatData.map((row) => row[primaryKey])
            onChange({
              keys: allKeys.filter((key) => !value.keys.includes(key)),
              lastKey: null,
            })
          }}
        >
          反转选中状态
        </Button>
        <Button
          onClick={() => {
            const flatData = pipeline.getDataSource('flat')
            const primaryKey = pipeline.ctx.primaryKey as string
            const allKeys = flatData.map((row) => row[primaryKey])
            onChange({ keys: allKeys.filter(() => Math.random() < 0.25), lastKey: null })
          }}
        >
          随机设置
        </Button>
      </Button.Group>
      <BaseTable style={{ marginTop: 16 }} {...pipeline.getProps()} />
    </div>
  )
}

export function 行单选() {
  const [value, onChange] = useState('1')
  const [clickArea, setClickArea] = useState<features.SingleSelectFeatureOptions['clickArea']>('checkbox')
  const [checkboxPlacement, setCheckboxPlacement] = useState<features.SingleSelectFeatureOptions['checkboxPlacement']>(
    'start',
  )
  const [highlightRowWhenSelected, setHighlightRowWhenSelected] = useState(true)

  // 实际使用时注意设置 ctx.components, 例如...
  //   import * as fusion from '@alifd/next'
  //   useTablePipeline({ components: fusion })
  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource1, columns: columns1 })
    .primaryKey('id')
    .use(features.singleSelect({ value, onChange, highlightRowWhenSelected, checkboxPlacement, clickArea }))

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
          value={checkboxPlacement}
          onChange={setCheckboxPlacement as any}
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

      <BaseTable {...pipeline.getProps()} />
    </div>
  )
}

export function 行展开() {
  const pipeline = useTablePipeline()
    .input({
      // dataSource 结构：
      //  [ { id: '1', title: '阿里巴巴网络技术有限公司', children: [...] },
      //    { id: '2', title: '蚂蚁金服有限公司', children: [...] },
      //    { id: '3', title: '其他', children: [...] }, ]
      dataSource: dataSource5,
      columns: columns5,
    })
    .primaryKey('id')
    // 受控用法：rowExpand({ openKeys, onChangeOpenKeys })
    .use(features.rowExpand({ defaultOpenKeys: ['1', '2'] }))

  return <BaseTable {...pipeline.getProps()} />
}

export function 表格排序() {
  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource3, columns: columns3 })
    .use(
      features.sort({
        mode: 'single',
        defaultSorts: [{ code: 'applier', order: 'asc' }],
        highlightColumnWhenActive: true,
      }),
    )

  return <BaseTable {...pipeline.getProps()} />
}

export function 多列排序() {
  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource3, columns: columns3 })
    .use(
      features.sort({
        mode: 'multiple',
        defaultSorts: [{ code: 'applier', order: 'asc' }],
        highlightColumnWhenActive: true,
      }),
    )

  return <BaseTable {...pipeline.getProps()} />
}

export function 树形可选择表格() {
  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource4, columns: columns4 })
    .primaryKey('id')
    .use(features.treeMode())
    .use(
      features.treeSelect({
        tree: dataSource4,
        rootKey: 'root',
        defaultValue: ['1', '3'],
        checkboxColumn: { lock: true },
        highlightRowWhenSelected: true,
      }),
    )

  return <BaseTable {...pipeline.getProps()} />
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

  const pipeline = useTablePipeline()
    .input({ columns, dataSource: state.data })
    .primaryKey('id')
    .use(features.buildTree('id', 'parent_id'))
    .use(features.sort({ mode: 'single', highlightColumnWhenActive: true }))
    .use(features.treeMode({ defaultOpenKeys: ['B2C'] }))

  return <BaseTable isLoading={state.isLoading} {...pipeline.getProps()} />
}

export function 表头分组与列高亮() {
  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource6, columns: columns6 })
    .use(features.columnRangeHover())

  return <BaseTable className="bordered" {...pipeline.getProps()} />
}

export function 多选与提示信息() {
  const columns = [
    { code: 'title', name: '标题', width: 200, features: { tips: '我是指标的详细信息~~' } },
    { code: 'dept', name: '部门名称', width: 180, features: { autoRowSpan: true } },
    { code: 'dest', name: '团建目的地', width: 160, features: { autoRowSpan: true } },
    { code: 'guide', name: '当地导游', width: 160, features: { autoRowSpan: true } },
    operationCol,
  ]

  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource4, columns })
    .primaryKey('id')
    .mapDataSource((dataSource) => collectNodes(dataSource, 'pre'))
    .use(
      features.multiSelect({
        defaultValue: ['1', '3'],
        highlightRowWhenSelected: true,
      }),
    )
    .use(features.tips())

  return <BaseTable {...pipeline.getProps()} />
}

const DetailDiv = styled.div`
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
  const pipeline = useTablePipeline()
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

  return <BaseTable {...pipeline.getProps()} />
}

export function 表格嵌套() {
  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource1, columns: columns1.slice(0, 4) })
    .primaryKey('id')
    .use(
      features.rowDetail({
        defaultOpenKeys: ['2'],
        renderDetail() {
          return (
            <BaseTable
              style={{ boxShadow: '0 0 4px 1px #33333333' }}
              hasHeader={false}
              className="bordered compact"
              dataSource={dataSource1}
              columns={columns1.slice(0, 4)}
            />
          )
        },
      }),
    )

  return <BaseTable {...pipeline.getProps()} />
}

export function 表格套娃({ depth = 0 }: { depth: number }) {
  function renderDetail() {
    let msg: string
    if (depth < 2) {
    } else if (depth <= 4) {
      msg = '加油，马上就到底了'
    } else if (depth <= 6) {
      msg = '还剩最后几层了'
    } else if (depth <= 8) {
      msg = '加油，还差一点点'
    } else {
      return <div>到底了~</div>
    }

    return (
      <div>
        {msg}
        <表格套娃 depth={depth + 1} />
      </div>
    )
  }

  const pipeline = useTablePipeline()
    .input({ dataSource: dataSource1.slice(0, 3), columns: columns1.slice(0, 4) })
    .primaryKey('id')
    .use(features.rowDetail({ renderDetail }))

  return (
    <BaseTable className={cx('compact', { bordered: depth % 2 === 1 })} isStickyHead={false} {...pipeline.getProps()} />
  )
}

const fullData = [
  {
    key: 'key:@total@',
    parentKey: null,
    name: '总计',
    childCount: 1,
    a: 126434.47,
    b: 90437.96,
    c: 86279.48,
    d: 59811.81,
    lfl: 0.31,
    rate: 0.66,
  },
  ...makeSubData('杭州'),
  ...makeSubData('上海'),
  ...makeSubData('北京'),
  ...makeSubData('武汉'),
  ...makeSubData('成都'),
]

function makeSubData(prefix: string) {
  // prettier-ignore
  return [
    { key: `key:${prefix}`, parentKey: 'key:@total@', name: prefix, childCount: 1, a: 69665.75, b: 46072.06, c: 43819.82, d: 30336.13, lfl: 0.37, rate: 0.65 },
    { key: `key:${prefix} 一季度`, parentKey: `key:${prefix}`, name: '一季度', childCount: 3, a: 14438.76, b: 9822.21, c: 8724.7, d: 5929.93, lfl: 0.39, rate: 0.6 },
    { key: `key:${prefix} 一季度 2022-01`, parentKey: `key:${prefix} 一季度`, name: '2022-01', childCount: 0, a: 4349.64, b: 3072.48, c: 2412.92, d: 1840.75, lfl: 0.44, rate: 0.59 },
    { key: `key:${prefix} 一季度 2022-02`, parentKey: `key:${prefix} 一季度`, name: '2022-02', childCount: 0, a: 4873.01, b: 3239.29, c: 3072.48, d: 1931.65, lfl: 0.36, rate: 0.59 },
    { key: `key:${prefix} 一季度 2022-03`, parentKey: `key:${prefix} 一季度`, name: '2022-03', childCount: 0, a: 5216.1, b: 3510.44, c: 3239.29, d: 2157.52, lfl: 0.37, rate: 0.61 },
    { key: `key:${prefix} 二季度`, parentKey: `key:${prefix}`, name: '二季度', childCount: 3, a: 16870.42, b: 10983.12, c: 10585.88, d: 7037.24, lfl: 0.37, rate: 0.64 },
    { key: `key:${prefix} 二季度 2022-04`, parentKey: `key:${prefix} 二季度`, name: '2022-04', childCount: 0, a: 5214.15, b: 3411.93, c: 3510.44, d: 2110.52, lfl: 0.32, rate: 0.61 },
    { key: `key:${prefix} 二季度 2022-05`, parentKey: `key:${prefix} 二季度`, name: '2022-05', childCount: 0, a: 5749.32, b: 3663.5, c: 3411.93, d: 2376.51, lfl: 0.4, rate: 0.64 },
    { key: `key:${prefix} 二季度 2022-06`, parentKey: `key:${prefix} 二季度`, name: '2022-06', childCount: 0, a: 5906.94, b: 3907.68, c: 3663.5, d: 2550.21, lfl: 0.37, rate: 0.65 },
  ]
}

function delay<T>(ms: number, resolvedValue: T) {
  return new Promise<T>((resolve) => {
    setTimeout(resolve, ms, resolvedValue)
  })
}

/** 一个 mock 的树状数据服务，实际使用时要替换为相应的真实接口 */
class MockTreeDataService {
  count = 0

  // 加载根节点的数据
  async loadRootNodeData(): Promise<any> {
    const rootDataNode = fullData.find((d) => d.parentKey == null)
    return delay(1000, rootDataNode)
  }

  // 加载父节点的 key 加载子节点数据
  async loadNodeDataByParentKey(parentKey: string): Promise<any[]> {
    const slice = fullData.filter((d) => d.parentKey == parentKey)
    return delay([500, 500, 2000, 5000, 1000, 800, 3000][this.count++ % 7], slice)
  }
}

export function 异步树状表格() {
  const [state, setState] = useState({ isLoading: true, data: [] as any[] })

  const dataServiceRef = useRef<MockTreeDataService>()

  useEffect(() => {
    dataServiceRef.current = new MockTreeDataService()

    dataServiceRef.current.loadRootNodeData().then((rootNodeData) => {
      setState({ data: [rootNodeData], isLoading: false })
    })
  }, [])

  function loadNodeDataByParentKey(parentKey: string) {
    setState((prev) => ({ isLoading: true, data: prev.data }))
    dataServiceRef.current.loadNodeDataByParentKey(parentKey).then((newData) => {
      setState((prev) => {
        return {
          isLoading: false,
          data: prev.data.concat(newData),
        }
      })
    })
  }

  const [openKeys, onChangeOpenKeys] = useState<string[]>([])

  const pipeline = useTablePipeline()
    .input({
      dataSource: state.data,
      columns: [
        { name: '名称', code: 'name', width: 180, lock: true },
        { code: 'a', name: '目标收入', render: amount, align: 'right' },
        { code: 'b', name: '实际收入', render: amount, align: 'right' },
        { code: 'd', name: '重点商品收入', render: amount, align: 'right' },
        { code: 'lfl', name: '收入月环比', render: lfl, align: 'right' },
        { code: 'rate', name: '重点商品收入占比', render: ratio, align: 'right' },
      ],
    })
    .primaryKey('key')
    .mapColumns(([firstCol, ...rest]) => [
      firstCol,
      // 重复几次 columns，看起来更加丰满
      ...rest,
      ...rest,
      ...rest,
      ...rest,
    ])
    .use(features.buildTree('key', 'parentKey'))
    .use(
      features.treeMode({
        openKeys,

        onChangeOpenKeys(nextKeys, key, action) {
          if (state.isLoading) {
            return
          }
          onChangeOpenKeys(nextKeys)

          const needLoadData = state.data.every((d) => d.parentKey !== key)
          if (action === 'expand' && needLoadData) {
            // 如果当前展开了某一个节点，且该节点的子节点数据尚未加载，
            //  则调用 loadNodeDataByParentKey 加载更多数据
            loadNodeDataByParentKey(key)
          }
        },

        // 提供一个自定义的 isLeafNode 方法，使得表格为父节点正确渲染收拢/展开按钮
        isLeafNode(node) {
          return node.childCount === 0
        },
      }),
    )

  return <BaseTable defaultColumnWidth={120} isLoading={state.isLoading} {...pipeline.getProps()} />
}

const StyledBaseTable = styled(BaseTable)`
  tr.last-open {
    --bgcolor: rgba(128, 243, 87, 0.32);
    --hover-bgcolor: rgba(128, 243, 87, 0.32);

    .expansion-icon {
      fill: #4de247;
    }
  }

  tr.last-collapse {
    --bgcolor: rgba(253, 32, 32, 0.32);
    --hover-bgcolor: rgba(253, 32, 32, 0.32);

    .expansion-icon {
      fill: #e54950;
    }
  }
`

export function 树状表格中的最近展开标记() {
  const columns: ArtColumn[] = [
    { code: 'name', name: '数据维度', width: 200 },
    { code: 'shop_name', name: '门店' },
    { code: 'imp_uv_dau_pct', name: '曝光UV占DAU比例', render: ratio, align: 'right' },
    { code: 'app_qty_pbt', name: 'APP件单价', align: 'right' },
    { code: 'all_app_trd_amt_1d', name: 'APP成交金额汇总', align: 'right' },
  ]

  const [state, setState] = useState({
    isLoading: true,
    data: [] as any[],
    lastOpenKey: '',
    lastCollapseKey: '',
  })

  useEffect(() => {
    getAppTrafficData().then((data) => {
      setState({ isLoading: false, data, lastOpenKey: '', lastCollapseKey: '' })
    })
  }, [])

  const [openKeys, onChangeOpenKeys] = useState([])

  const pipeline = useTablePipeline()
    .input({ columns: columns, dataSource: state.data })
    .primaryKey('id')
    .use(features.buildTree('id', 'parent_id'))
    .use(
      features.treeMode({
        openKeys,
        onChangeOpenKeys(nextKeys, key, action) {
          onChangeOpenKeys(nextKeys)
          if (action === 'expand') {
            setState({ ...state, lastOpenKey: key, lastCollapseKey: '' })
          } else {
            setState({ ...state, lastOpenKey: '', lastCollapseKey: key })
          }
        },
      }),
    )
    .appendRowPropsGetter((record) => {
      if (record.id === state.lastOpenKey) {
        return { className: 'last-open' }
      } else if (record.id === state.lastCollapseKey) {
        return { className: 'last-collapse' }
      }
    })

  return <StyledBaseTable defaultColumnWidth={150} isLoading={state.isLoading} {...pipeline.getProps()} />
}
