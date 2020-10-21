import {
  applyTransforms,
  ArtColumn,
  BaseTable,
  exportTableAsExcel,
  makeFlattenTransform,
  makeOrderFieldTransform,
  proto,
  traverseColumn,
  useColumnHoverTransform,
} from 'ali-react-table'
import React, { useEffect, useState } from 'react'
import { getAppTrafficData } from 'assets/cdn-data'
import { amount, ratio } from 'assets/format'
import { useOperationBar } from './components'

export default { title: '示例 / 其他组件 / 表格操作栏示例' }

export function 表格操作栏示例() {
  // 例如 proto 创建若干列配置的「原型」，方便后续书写列配置
  const groupProto = proto.array<ArtColumn>({
    name: proto.string,
    children: proto.array({
      name: proto.string,
      width: 150,
      features: proto.object({ defaultVisible: true }),
    }),
  })

  const appIndProto = proto.array<ArtColumn>({
    width: 120,
    align: 'right',
    features: { defaultVisible: true, lfl: true },
  })

  const rateIndProto = proto.array<ArtColumn>({
    width: 120,
    align: 'right',
    render: ratio,
    features: { defaultVisible: true, lfl: true },
  })

  const cateFieldProto = proto.array<ArtColumn>({ width: 120 })

  // 列配置
  const columns: ArtColumn[] = groupProto([
    {
      name: '商品信息',
      features: { flatten: true },
      children: [
        { code: 'order', name: '序号', width: 100, lock: true, features: { order: true, enforceVisible: true } },
        { code: 'sku_code', name: 'SKU code' },
        { code: 'sku_name', name: 'SKU名称' },
      ],
    },
    {
      name: '机构信息',
      features: { flatten: true },
      children: [
        { code: 'city_name', name: '城市' },
        { code: 'shop_name', name: '门店', features: { defaultVisible: true } },
      ],
    },
    {
      name: '类目信息',
      children: cateFieldProto([
        { code: 'merge_cate_level1_name', name: '一级类目' },
        { code: 'merge_cate_level2_name', name: '二级类目' },
        { code: 'merge_cate_level3_name', name: '三级类目' },
      ]),
    },
    {
      name: 'APP指标',
      children: appIndProto([
        { code: 'imp_uv_dau_pct', name: '曝光UV占DAU比例', render: ratio },
        { code: 'app_trd_amt_1d', name: 'APP成交金额', render: amount },
        { code: 'app_qty_pbt', name: 'APP件单价' },
        { code: 'all_app_trd_amt_1d', name: 'APP成交金额汇总' },
        { code: 'app_trd_usr_cnt_1d', name: 'APP成交用户数' },
        { code: 'appout_shop_num', name: '缺货门店数', render: amount },
        { code: 'all_time_len', name: '店均缺货时长', render: amount },
        { code: 'bad_rmk_rate', name: '订单差评率', render: ratio },
      ]),
    },
    {
      name: '转换率',
      children: rateIndProto([
        { code: 'all_imp2pay_rate', name: '整体曝光至成交转化率' },
        { code: 'search_imp2pay_rate', name: '搜索曝光至成交转化率' },
        { code: 'classis_imp2pay_rate', name: '分类曝光至成交转化率' },
        { code: 'cart_imp2pay_rate', name: '购物车曝光至成交转化率' },
        { code: 'my_page_imp2pay_rate', name: '我的曝光至成交转化率' },
        { code: 'pq_act_imp2pay_rate', name: '活动页曝光至成交转化率' },
        { code: 'other_imp2pay_rate', name: '其他曝光至成交转化率' },
      ]),
    },
  ])

  // 自定义的 transform，为 features.lfl 为 true 的列添加对应的 环比列
  function transformLfl(showLfl: boolean) {
    return traverseColumn((col) => {
      if (showLfl && col.features?.lfl) {
        return [col, { ...col, name: '环比', render: (value) => `lfl_of_${value}` }]
      }
      return col
    })
  }

  const [state, setState] = useState({ isLoading: true, data: [] as any[] })

  useEffect(() => {
    getAppTrafficData().then((data) => {
      setState({ isLoading: false, data: data.slice(0, 8) })
    })
  }, [])

  const operationBar = useOperationBar({
    actionColor: '#5e85f7',
    features: [
      { type: 'toggle', key: 'lfl', title: '展示环比', transform: transformLfl },
      { type: 'separator' },
      { type: 'export', onExport },
      { type: 'custom-columns' },
      { type: 'custom', node: `共 ${state.isLoading ? '-' : state.data.length} 条数据` },
    ],
    columns,
  })

  const renderData = applyTransforms(
    { columns, dataSource: state.data },
    ...operationBar.transforms,
    makeOrderFieldTransform(),
    makeFlattenTransform(),
    useColumnHoverTransform(),
  )

  return (
    <div>
      <operationBar.view>{operationBar.nodes}</operationBar.view>
      <BaseTable dataSource={renderData.dataSource} columns={renderData.columns} isLoading={state.isLoading} />
    </div>
  )

  function onExport() {
    return exportTableAsExcel(require('xlsx'), state.data, renderData.columns, 'export.xlsx')
  }
}
