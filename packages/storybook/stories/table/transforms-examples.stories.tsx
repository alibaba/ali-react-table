import { Balloon } from '@alifd/next'
import { Tooltip } from 'antd'
import { Row16, ThumbsDown16, ThumbsUp16 } from '@carbon/icons-react'
import {
  applyTransforms,
  ArtColumn,
  collectNodes,
  makeAutoRowSpanTransform,
  makeBuildTreeTransform,
  makeColumnHoverTransform,
  makeColumnRangeHoverTransform,
  makeColumnResizeTransform,
  makeSortTransform,
  makeTipsTransform,
  makeTreeModeTransform,
  proto,
  SortHeaderCellProps,
  SortItem,
  useAutoWidthTransform,
} from 'ali-react-table'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getAppTrafficData } from '../../assets/cdn-data'
import { amount, ratio, time } from '../../assets/format'
import { cols, testProvColumns, useCityDataSource, useProvinceDataSource } from '../../assets/ncov19-assets'
import { BaseTable, BaseTableThemeContext } from '../../assets/theme-helpers'

export default {
  title: '表格 / 常用功能示例',
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

export function 树状表格() {
  const columns: ArtColumn[] = [
    {
      code: 'name',
      name: '数据维度',
      lock: true,
      width: 200,
      // 通过自定义 getValue，可以实现「根据节点深度选取合适的数据字段」
      // getValue(record: any) {
      //   const meta = record[treeMetaSymbol]
      //   const array = [record.subsidiary_name, record.city_name, record.shop_name]
      //   return array[meta.depth]
      // },
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

  // 注意 renderData 要用起来
  const renderData = applyTransforms(
    { columns: columns, dataSource: state.data },

    // 从平铺的数据中，根据 id/parent_id 字段构建出树状结构
    makeBuildTreeTransform('id', 'parent_id'),

    makeTreeModeTransform({ primaryKey: 'id', openKeys, onChangeOpenKeys }),
  )

  return <BaseTable dataSource={renderData.dataSource} columns={renderData.columns} isLoading={state.isLoading} />
}

export function 表格排序_多列() {
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
    makeSortTransform({
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
  const { isLoading, dataSource: data } = useProvinceDataSource()

  const columns: ArtColumn[] = [
    { code: 'provinceName', name: '省份', width: 150, features: { sortable: true } },
    { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'updateTime', name: '最后更新时间', width: 180, render: time },
  ]

  const [sorts, onChangeSorts] = useState<SortItem[]>([{ code: 'deadCount', order: 'desc' }])

  const renderData = applyTransforms(
    { columns, dataSource: data.slice(0, 5) },
    makeSortTransform({
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

export function 列高亮() {
  const { isLoading, dataSource: data } = useProvinceDataSource()

  const [hoverColIndex, onChangeHoverColIndex] = useState(-1)

  const renderData = applyTransforms(
    { columns: testProvColumns, dataSource: data.slice(0, 5) },
    makeColumnHoverTransform({
      hoverColIndex,
      onChangeHoverColIndex,
    }),
  )

  return <BaseTable isLoading={isLoading} dataSource={renderData.dataSource} columns={renderData.columns} />
}

export function 列的范围高亮() {
  const appIndProto = proto.array<ArtColumn>({ align: 'right' })
  const rateIndProto = proto.array<ArtColumn>({ align: 'right', render: ratio })

  // 列配置
  const columns: ArtColumn[] = [
    {
      name: '维度',
      children: [
        {
          name: '商品信息',
          children: [
            { code: 'sku_code', name: 'SKU code' },
            { code: 'sku_name', name: 'SKU名称' },
          ],
        },
        {
          name: '机构信息',
          children: [
            { code: 'city_name', name: '城市' },
            { code: 'shop_name', name: '门店', features: { defaultVisible: true } },
          ],
        },
        {
          name: '类目信息',
          children: [
            { code: 'merge_cate_level1_name', name: '一级类目' },
            { code: 'merge_cate_level2_name', name: '二级类目' },
            { code: 'merge_cate_level3_name', name: '三级类目' },
          ],
        },
      ],
    },
    {
      name: '指标',
      children: [
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
      ],
    },
  ]

  const [state, setState] = useState({ isLoading: true, data: [] as any[] })

  useEffect(() => {
    getAppTrafficData().then((data) => {
      setState({ isLoading: false, data: data.slice(0, 8) })
    })
  }, [])

  const [hoverRange, onChangeHoverRange] = useState({ start: 0, end: 0 })

  const renderData = applyTransforms(
    { columns, dataSource: state.data },
    makeColumnRangeHoverTransform({
      hoverRange,
      onChangeHoverRange,
    }),
  )

  return (
    <BaseTable
      defaultColumnWidth={120}
      dataSource={renderData.dataSource}
      columns={renderData.columns}
      isLoading={state.isLoading}
    />
  )
}

export function 列气泡提示() {
  const { isLoading, dataSource: data } = useProvinceDataSource()
  const theme = useContext(BaseTableThemeContext)

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
    { columns, dataSource: data.slice(0, 3) },
    makeSortTransform({ mode: 'single', sorts, onChangeSorts }),
    makeTipsTransform(theme === 'antd' ? { Tooltip } : { Balloon }),
  )

  return (
    <div>
      <BaseTable isLoading={isLoading} dataSource={renderData.dataSource.slice(0, 10)} columns={renderData.columns} />
    </div>
  )
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

  const [openKeys, onChangeOpenKeys] = useState(['B2C'])
  const [sorts, onChangeSorts] = useState<SortItem[]>([])

  const renderData = applyTransforms(
    { columns, dataSource: state.data },
    // 从平铺的数据中，根据 id/parent_id 字段构建出树状结构
    makeBuildTreeTransform('id', 'parent_id'),
    makeSortTransform({
      sorts,
      onChangeSorts,
      mode: 'single', // 改为 multiple 可以使用多列排序
      highlightColumnWhenActive: true,
    }),
    makeTreeModeTransform({ primaryKey: 'id', openKeys, onChangeOpenKeys, indentSize: 20 }),
  )

  return <BaseTable dataSource={renderData.dataSource} columns={renderData.columns} isLoading={state.isLoading} />
}

export function 单元格自动合并() {
  const { dataSource: cityData, isLoading } = useCityDataSource()

  const renderData = applyTransforms(
    {
      dataSource: cityData.slice(0, 3).flatMap((d) => d.children.slice(0, 4)),
      columns: [
        {
          code: 'provinceName',
          name: '省份',
          width: 150,
          features: { autoRowSpan: true },
        },
        cols.cityName,
        ...cols.indCols.map((col) => ({
          ...col,
          features: { autoRowSpan: true },
        })),
        {
          code: 'updateTime',
          name: '最后更新时间',
          width: 180,
          render: time,
          features: { autoRowSpan: true },
        },
      ],
    },
    makeAutoRowSpanTransform(),
  )

  return (
    <BaseTable isLoading={isLoading} useOuterBorder dataSource={renderData.dataSource} columns={renderData.columns} />
  )
}

function CustomSortHeaderCell({ column, sortOptions, sortIndex, children, onToggle, sortOrder }: SortHeaderCellProps) {
  // 通过 justify-content 来与 col.align 保持对齐方向一致
  const justifyContent = column.align === 'right' ? 'flex-end' : column.align === 'center' ? 'center' : 'flex-start'

  return (
    <div
      onClick={onToggle}
      style={{
        display: 'flex',
        justifyContent,
        cursor: 'pointer',
      }}
    >
      {/* 别忘记渲染原来的表头内容 */}
      {children}

      <span style={{ marginLeft: 4 }}>
        {sortOrder === 'none' && <Row16 />}
        {sortOrder === 'asc' && <ThumbsUp16 />}
        {sortOrder === 'desc' && <ThumbsDown16 />}
      </span>

      {sortOptions.mode === 'multiple' && sortOrder !== 'none' && (
        <span style={{ marginLeft: 4 }}>{sortIndex + 1}</span>
      )}
    </div>
  )
}

export function 自定义样式的排序表头() {
  const { isLoading, dataSource: data } = useProvinceDataSource()

  const columns: ArtColumn[] = [
    { code: 'provinceName', name: '省份', width: 150, features: { sortable: true } },
    { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right', features: { sortable: true } },
    { code: 'updateTime', name: '最后更新时间', width: 180, render: time },
  ]

  const [sorts, onChangeSorts] = useState<SortItem[]>([{ code: 'confirmedCount', order: 'desc' }])

  const renderData = applyTransforms(
    { columns, dataSource: data.slice(0, 5) },
    makeSortTransform({
      sorts,
      onChangeSorts,
      SortHeaderCell: CustomSortHeaderCell,
    }),
  )

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
        <div style={{ marginLeft: 8 }}>通过示例 options.SortHeaderCell 可以自定义排序表头的样式/内容</div>
        <button style={{ marginLeft: 16 }} onClick={() => onChangeSorts([])}>
          清除排序
        </button>
      </div>
      <BaseTable isLoading={isLoading} dataSource={renderData.dataSource} columns={renderData.columns} />
    </div>
  )
}

export function 拖拽调整列宽() {
  const { isLoading, dataSource: data } = useProvinceDataSource()

  const columns: ArtColumn[] = [cols.provinceName, ...cols.indCols, cols.updateTime]

  const defaultColumnWidth = 120
  // 注意 columns 可能是嵌套的结构，这里使用 collectNodes 来获取所有叶子节点
  // 同时注意部分列的 width 可能为空，此时可以用 defaultColumnWidth 作为列的宽度
  const defaultSizes = collectNodes(columns, 'leaf-only').map((col) => col.width ?? defaultColumnWidth)
  const [sizes, onChangeSizes] = useState(defaultSizes)

  const renderData = applyTransforms(
    { columns, dataSource: data.slice(0, 5) },
    makeColumnResizeTransform({
      sizes,
      onChangeSizes,
      appendExpander: true,
      expanderVisibility: 'hidden',
      disableUserSelectWhenResizing: true,
      minSize: 60,
      maxSize: 500,
    }),
  )

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
        <div style={{ marginLeft: 8 }}>拖拽调整列宽</div>
      </div>
      <BaseTable
        className="bordered"
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
      />
    </div>
  )
}

export function 自适应列宽_demo() {
  const { isLoading, dataSource: rawDataSource } = useProvinceDataSource()

  const columns: ArtColumn[] = [
    // 注意要为 自适应宽度的列 设置 features.autoWidth=true
    { code: 'provinceName', name: '省份', features: { autoWidth: true } },
    { code: 'confirmedCount', name: '确诊', render: amount, align: 'right', features: { autoWidth: true } },
    { code: 'curedCount', name: '治愈', render: amount, align: 'right', features: { autoWidth: true } },
    { code: 'deadCount', name: '死亡 (列宽固定为 150)', width: 150, render: amount, align: 'right' },
    { code: 'updateTime', name: '最后更新时间', features: { autoWidth: true } },
  ]

  const tableRef = useRef()
  const [startIndex, setStartIndex] = useState(0)

  const renderData = applyTransforms(
    { columns, dataSource: rawDataSource.slice(startIndex, startIndex + 5) },

    // 注意 useAutoWidthTransform 是一个 React hooks，要遵循 hooks 的用法规范
    useAutoWidthTransform(
      tableRef,
      {
        appendExpander: true,
        expanderVisibility: 'hidden',
        initColumnWidth: 100,
      },
      // deps=[data] 表示：每当 data 发生变化的时候，重新设置表格的列宽
      // deps=[] 表示：只在 didMount 时重新设置一次列宽
      // deps=undefined/null 表示：didMount 或每次 didUpdate 时都设置列宽
      [rawDataSource, startIndex],
    ),
  )

  return (
    <div>
      <p style={{ fontSize: 16 }}>
        <code>useAutoWidthTransform</code> 会在 didMount/didUpdate
        中获取单元格的实际内容宽度，然后重新设置表格列宽，实现「自适应列宽」。
      </p>
      <p style={{ fontSize: 14 }}>
        useAutoWidthTransform 会频繁地从 DOM 中获取单元格的实际渲染宽度，单元格数量较多时会导致性能问题。
        useAutoWidthTransform 不兼容「拖拽调整列宽」，不兼容「横向虚拟滚动」，不兼容存在 colSpan 的情况。
        <b>谨慎使用，这里只提供 demo。</b>
      </p>
      <div style={{ margin: '12px 0' }}>
        <button
          onClick={() => {
            setStartIndex(startIndex === 0 ? 5 : 0)
          }}
        >
          切换数据
        </button>
      </div>
      <BaseTable
        ref={tableRef}
        className="bordered"
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
      />
    </div>
  )
}
