import * as fusion from '@alifd/next'
import { Balloon, Button, Checkbox, Radio } from '@alifd/next'
import { EarthFilled16 } from '@carbon/icons-react'
import { ArtColumn, BaseTable, collectNodes } from 'ali-react-table'
import {
  applyTransforms,
  commonTransforms,
  CustomColumnsDialog,
  exportTableAsExcel,
  proto,
  SortItem,
  useOperationBar,
} from 'ali-react-table/biz'
import React, { useEffect, useState } from 'react'
import ReactJson from 'react-json-view'
import { getAppTrafficData } from '../../assets/cdn-data'
import { amount, ratio, time } from '../../assets/format'
import { FusionStyles } from '../../assets/fusion-style'
import { cols, testProvColumns, useCityDataSource, useProvinceDataSource } from '../../assets/ncov19-assets'

export default { title: '表格功能拓展 / 基本示例' }

export function 树状表格() {
  const columns: ArtColumn[] = [
    {
      name: '数据维度',
      lock: true,
      width: 200,
      getValue(record: any) {
        const meta = record[commonTransforms.treeMetaSymbol]
        if (meta == null) {
          return <span style={{ color: 'darkred' }}>无法获取树状模式元信息</span>
        }
        return meta.depth === 0 ? record.subsidiary_name : meta.depth === 1 ? record.city_name : record.shop_name
      },
    },
    { code: 'shop_name', name: '门店' },
    { code: 'imp_uv_dau_pct', name: '曝光UV占DAU比例', render: ratio, align: 'right' },
    { code: 'app_qty_pbt', name: 'APP件单价', align: 'right' },
    { code: 'all_app_trd_amt_1d', name: 'APP成交金额汇总', align: 'right' },
  ]

  const [state, setState] = useState({ isLoading: true, data: [] as any[] })

  useEffect(() => {
    getAppTrafficData().then((data) => {
      setState({ isLoading: false, data })
    })
  }, [])

  const [openKeys, onChangeOpenKeys] = useState(['B2C'])

  const renderData = applyTransforms(
    // 原始数据，在测试数据中去掉「B2C北京冷冻」，叶子节点和非叶节点并列展示的效果
    { columns: columns, dataSource: state.data.filter((r) => r.shop_name !== 'B2C北京冷冻') },
    // 从平铺的数据中，根据 id/parent_id 字段构建出树状结构
    commonTransforms.buildTree('id', 'parent_id'),
    commonTransforms.treeMode({ primaryKey: 'id', openKeys, onChangeOpenKeys, indentSize: 20 }),
  )

  return <BaseTable dataSource={renderData.dataSource} columns={renderData.columns} isLoading={state.isLoading} />
}

export function 多列排序() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const columns: ArtColumn[] = [
    { code: 'provinceName', name: '省份', width: 150, features: { sortable: true } },
    { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'updateTime', name: '最后更新时间', width: 180, render: time },
  ]

  const [sorts, onChangeSorts] = useState<SortItem[]>([
    { code: 'deadCount', order: 'asc' },
    { code: 'confirmedCount', order: 'desc' },
  ])

  const renderData = applyTransforms(
    { columns, dataSource },
    commonTransforms.sort({
      sorts,
      onChangeSorts,
    }),
  )

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
        <div style={{ marginLeft: 8 }}>点击表头的排序图标对表格数据进行排序</div>
        <button style={{ marginLeft: 16 }} onClick={() => onChangeSorts([])}>
          清除排序
        </button>
      </div>
      <BaseTable isLoading={isLoading} dataSource={renderData.dataSource} columns={renderData.columns} />
    </div>
  )
}

export function 表格排序_单列() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const columns: ArtColumn[] = [
    { code: 'provinceName', name: '省份', width: 150, features: { sortable: true } },
    { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'updateTime', name: '最后更新时间', width: 180, render: time },
  ]

  const [sorts, onChangeSorts] = useState<SortItem[]>([{ code: 'deadCount', order: 'desc' }])

  const renderData = applyTransforms(
    { columns, dataSource },
    commonTransforms.sort({
      sorts,
      onChangeSorts,
      mode: 'single', // 改为 multiple 可以使用多列排序
    }),
  )

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
        <div style={{ marginLeft: 8 }}>点击表头的排序图标对表格数据进行排序</div>
      </div>
      <BaseTable isLoading={isLoading} dataSource={renderData.dataSource} columns={renderData.columns} />
    </div>
  )
}

export function 表格操作栏() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const columns = testProvColumns.map((col, i) => ({
    ...col,
    features: {
      enforceVisible: i === 0,
      defaultVisible: true,
    },
  }))

  const operationBar = useOperationBar({
    features: [
      { type: 'custom', node: '自定义文本' },
      {
        type: 'click',
        title: (
          <>
            <EarthFilled16 style={{ fill: 'currentColor', marginRight: 2 }} />
            自定义点击区域
          </>
        ),
      },
      { type: 'separator' },
      {
        type: 'export',
        onExport() {
          exportTableAsExcel(require('xlsx'), dataSource, columns, 'export.xlsx')
        },
      },
      { type: 'custom-columns' },
    ],
    columns,
    components: fusion,
    actionColor: '#5e85f7',
  })

  const renderData = applyTransforms({ columns, dataSource }, ...operationBar.transforms)

  return (
    <div>
      <FusionStyles />
      <operationBar.view>{operationBar.nodes}</operationBar.view>
      <BaseTable isLoading={isLoading} dataSource={renderData.dataSource} columns={renderData.columns} />
    </div>
  )
}

export function 列高亮() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const [hoverColIndex, onChangeHoverColIndex] = useState(-1)

  const renderData = applyTransforms(
    { columns: testProvColumns, dataSource },
    commonTransforms.columnHover({
      hoverColIndex,
      onChangeHoverColIndex,
    }),
  )

  return (
    <div>
      <FusionStyles />
      <BaseTable isLoading={isLoading} dataSource={renderData.dataSource} columns={renderData.columns} />
    </div>
  )
}

export function 列气泡提示() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const [sorts, onChangeSorts] = useState<SortItem[]>([])

  const columns: ArtColumn[] = [
    {
      code: 'provinceName',
      name: '省份',
      features: {
        tips:
          '省份，即我国的省级行政区，是行政地位与省相同行政区的总称，为一级行政区，包括省、自治区、直辖市、特别行政区。' +
          '中国共计34个省级行政区，包括23个省、5个自治区、4个直辖市、2个特别行政区。',
      },
    },
    {
      code: 'curedCount',
      name: '治愈',
      render: amount,
      align: 'right',
      features: {
        sortable: true,
        tips: (
          <div>
            治愈是汉字词语，英文cure; heal，注音zhì yù，使恢复健康。如：在骨折完全治愈之前不要上班。
            治愈指动漫中温暖人心，净化心灵，悲伤时看能得到安慰，治愈自己心灵中的创伤、修补自己心灵上缺陷的作品。
            也可以指动漫中人物，拥有对主角内心抚慰、平复内心创伤的能力。可以分为行动上和语言上的。
          </div>
        ),
      },
    },
    {
      code: 'updateTime',
      name: '最后更新时间',
      render: time,
      features: {
        tips: (
          <div>
            时间，是物质的运动、变化的持续性、顺序性的表现，包含时刻和时段两个概念。
            时间是人类用以描述物质运动过程或事件发生过程的一个参数，确定时间，是靠不受外界影响的物质周期变化的规律。以地球自转为基础的时间计量系统称为世界时系统。日、月、年、世纪的时间计量属天文学中的历法范畴。
            以地球自转运动为基础的时间单位称为“日”，以月球绕地球公转运动为基础的时间单位称为“月”，以地球绕太阳公转运动为基础的时间单位称为“年”。
          </div>
        ),
      },
    },
  ]

  const renderData = applyTransforms(
    { columns, dataSource },
    commonTransforms.sort({ mode: 'single', sorts, onChangeSorts }),
    commonTransforms.tips({ Balloon }),
  )

  return (
    <div>
      <FusionStyles />
      <BaseTable isLoading={isLoading} dataSource={renderData.dataSource.slice(0, 10)} columns={renderData.columns} />
    </div>
  )
}

export function 树状模式与层级排序() {
  const columns: ArtColumn[] = [
    {
      name: '数据维度',
      lock: true,
      width: 200,
      getValue(record: any) {
        const meta = record[commonTransforms.treeMetaSymbol]
        if (meta == null) {
          return <span style={{ color: 'darkred' }}>无法获取树状模式元信息</span>
        }
        return meta.depth === 0 ? record.subsidiary_name : meta.depth === 1 ? record.city_name : record.shop_name
      },
    },
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

  const [openKeys, onChangeOpenKeys] = useState(['B2C'])
  const [sorts, onChangeSorts] = useState<SortItem[]>([])

  const renderData = applyTransforms(
    { columns, dataSource: state.data },
    // 从平铺的数据中，根据 id/parent_id 字段构建出树状结构
    commonTransforms.buildTree('id', 'parent_id'),
    commonTransforms.sort({
      sorts,
      onChangeSorts,
      mode: 'single', // 改为 multiple 可以使用多列排序
    }),
    commonTransforms.treeMode({ primaryKey: 'id', openKeys, onChangeOpenKeys, indentSize: 20 }),
  )

  return <BaseTable dataSource={renderData.dataSource} columns={renderData.columns} isLoading={state.isLoading} />
}

export function 自定义列对话框组件() {
  const defaultVisibleIndProto = proto.array<ArtColumn>({
    features: { defaultVisible: true },
  })

  const defaultHiddenIntProto = proto.array<ArtColumn>({
    features: { defaultVisible: false },
  })

  // 列配置
  const columns: ArtColumn[] = [
    {
      name: '商品信息',
      children: defaultVisibleIndProto([
        { code: 'order', name: '序号', features: { enforceVisible: true } },
        { code: 'sku_code', name: 'SKU code' },
        { code: 'sku_name', name: 'SKU名称' },
      ]),
    },
    {
      name: '机构信息',
      children: defaultHiddenIntProto([
        { code: 'city_name', name: '城市' },
        { code: 'shop_name', name: '门店' },
      ]),
    },
    {
      name: '类目信息',
      children: defaultVisibleIndProto([
        { code: 'merge_cate_level1_name', name: '一级类目' },
        { code: 'merge_cate_level2_name', name: '二级类目' },
        { code: 'merge_cate_level3_name', name: '三级类目' },
      ]),
    },
    {
      name: 'APP指标',
      children: defaultVisibleIndProto([
        { code: 'imp_uv_dau_pct', name: '曝光UV占DAU比例' },
        { code: 'app_trd_amt_1d', name: 'APP成交金额' },
        { code: 'app_qty_pbt', name: 'APP件单价' },
        { code: 'all_app_trd_amt_1d', name: 'APP成交金额汇总' },
        { code: 'app_trd_usr_cnt_1d', name: 'APP成交用户数' },
        { code: 'appout_shop_num', name: '缺货门店数' },
        { code: 'all_time_len', name: '店均缺货时长' },
        { code: 'bad_rmk_rate', name: '订单差评率' },
      ]),
    },
    {
      name: '转换率',
      children: defaultHiddenIntProto([
        { code: 'all_imp2pay_rate', name: '整体曝光至成交转化率' },
        { code: 'search_imp2pay_rate', name: '搜索曝光至成交转化率' },
        { code: 'classis_imp2pay_rate', name: '分类曝光至成交转化率' },
        { code: 'cart_imp2pay_rate', name: '购物车曝光至成交转化率' },
        { code: 'my_page_imp2pay_rate', name: '我的曝光至成交转化率' },
        { code: 'pq_act_imp2pay_rate', name: '活动页曝光至成交转化率' },
        { code: 'other_imp2pay_rate', name: '其他曝光至成交转化率' },
      ]),
    },
  ]

  const leafColumns = collectNodes(columns, 'leaf-only')

  const defaultCheckedCodes = leafColumns.filter((col) => col.features?.defaultVisible).map((col) => col.code)
  const enforceCheckedCodes = leafColumns.filter((col) => col.features?.enforceVisible).map((col) => col.code)

  const [checkedCodes, onChangeCheckedCodes] = useState(defaultCheckedCodes)

  return (
    <>
      <CustomColumnsDialog
        components={fusion}
        columns={columns}
        checkedCodes={checkedCodes}
        defaultCheckedCodes={defaultCheckedCodes}
        enforceCheckedCodes={enforceCheckedCodes}
        trigger={(onOpen) => (
          <Button size="large" type="primary" onClick={onOpen}>
            打开自定义列对话框
          </Button>
        )}
        onChangeCheckedCodes={(nextCodes) => {
          console.log('自定义列对话框组件 onChangeCheckedCodes:', nextCodes)
          onChangeCheckedCodes(nextCodes)
        }}
      />
      <ReactJson
        style={{ marginTop: 12 }}
        src={columns.map((group) => ({
          ...group,
          children: group.children.map((col) => JSON.stringify(col, null, 1)),
        }))}
        name="对应的列配置："
        collapsed={0}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
      />
      <FusionStyles />
    </>
  )
}

export function 单元格自动合并() {
  const { dataSource: cityData, isLoading } = useCityDataSource()

  const renderData = applyTransforms(
    {
      dataSource: cityData.slice(0, 4).flatMap((d) => d.children),
      columns: [
        {
          code: 'provinceName',
          name: '省份',
          width: 150,
          features: { autoRowSpan: true },
        },
        cols.cityName,
        ...cols.indCols,
        {
          code: 'updateTime',
          name: '最后更新时间',
          width: 180,
          render: time,
          features: { autoRowSpan: true },
        },
      ],
    },
    commonTransforms.autoRowSpan(),
  )

  return (
    <BaseTable isLoading={isLoading} useOuterBorder dataSource={renderData.dataSource} columns={renderData.columns} />
  )
}

export function 多选() {
  const [value, onChange] = useState({ keys: [] as string[], lastKey: '' })

  const { isLoading, dataSource } = useProvinceDataSource()

  const renderData = applyTransforms(
    { dataSource: dataSource.slice(0, 10), columns: testProvColumns },
    commonTransforms.select({
      Checkbox,
      primaryKey: 'provinceName',
      value,
      onChange,
    }),
  )

  return (
    <>
      <FusionStyles />
      <div style={{ lineHeight: '24px' }}>交互提示：按住 shift 键来快速选择多行</div>
      <div style={{ lineHeight: '24px' }}>当前选中的 value 为 {value.keys.join(',') || '[空]'}</div>
      <BaseTable
        primaryKey="provinceName"
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
      />
    </>
  )
}

export function 单选() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const [value, onChange] = useState('')

  const renderData = applyTransforms(
    { dataSource: dataSource.slice(0, 10), columns: testProvColumns },
    commonTransforms.singleSelect({
      Radio,
      primaryKey: 'provinceName',
      value,
      onChange,
    }),
  )

  return (
    <>
      <FusionStyles />
      <div style={{ lineHeight: '24px' }}>当前选中的 value 为 {value || '[空]'}</div>
      <BaseTable
        primaryKey="provinceName"
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
      />
    </>
  )
}
