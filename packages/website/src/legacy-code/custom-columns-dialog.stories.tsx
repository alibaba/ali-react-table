import { Button } from '@alifd/next'
import { ArtColumn, collectNodes, proto } from 'ali-react-table'
import React, { useState } from 'react'
import Inspector from 'react-inspector'
import { CustomColumnsDialog } from './components'

export default { title: '示例 / 其他组件 / 自定义列对话框组件' }

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
        columns={columns}
        checkedCodes={checkedCodes}
        defaultCheckedCodes={defaultCheckedCodes}
        enforceCheckedCodes={enforceCheckedCodes}
        trigger={(onOpen) => (
          <Button size="large" type="primary" onClick={onOpen}>
            打开自定义列对话框
          </Button>
        )}
        onChangeCheckedCodes={onChangeCheckedCodes}
      />
      {typeof window !== 'undefined' && (
        <Inspector
          data={columns.map((group) => ({
            ...group,
            children: group.children.map((col) => JSON.stringify(col, null, 1)),
          }))}
        />
      )}
    </>
  )
}
