import { Button, Checkbox } from '@alifd/next'
import { ArtColumn, CellProps, SpanRect } from 'ali-react-table'
import { columns2, dataSource1, dataSource2, operationCol, repeat } from 'assets/biz-assets'
import { amount, time } from 'assets/format'
import { cols, testProvColumns, useCityDataSource, useProvinceDataSource } from 'assets/ncov19-assets'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import React, { useState } from 'react'
import styled from 'styled-components'

export default { title: 'BaseTable 示例' }

export function 基本用法() {
  const dataSource = [
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
  ]

  const columns: ArtColumn[] = [
    { code: 'prov', name: '省份', width: 150 },
    { code: 'confirmed', name: '确诊', width: 100, align: 'right' },
    { code: 'cured', name: '治愈', width: 100, align: 'right' },
    { code: 'dead', name: '死亡', width: 100, align: 'right' },
    { code: 't', name: '最后更新时间', width: 180 },
  ]
  return <WebsiteBaseTable dataSource={dataSource} columns={columns} />
}

export function 数据为空() {
  // 与基本表格相比，行高降低，通过较小的尺寸在屏幕中显示更多的数据，高度40px
  return <WebsiteBaseTable dataSource={[]} columns={columns2} />
}

export function 空数据加载() {
  return <WebsiteBaseTable isLoading dataSource={[]} columns={columns2} />
}

export function 表格数据加载() {
  return <WebsiteBaseTable isLoading dataSource={dataSource2} columns={columns2} />
}

export function 左侧锁列() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <WebsiteBaseTable
      style={{ width: 500, height: 300, overflow: 'auto' }}
      useOuterBorder
      isLoading={isLoading}
      dataSource={dataSource}
      columns={[
        { lock: true, code: 'provinceName', name: '省份', width: 150 },
        { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right' },
        { code: 'suspectedCount', name: '疑似', width: 100, render: amount, align: 'right' },
        { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right' },
        { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right' },
        { code: 'updateTime', name: '最后更新时间', width: 180, render: time },
      ]}
    />
  )
}

export function 左侧与右侧锁列() {
  const { dataSource, isLoading } = useCityDataSource()

  // 注意为表格设置 style.overflow = 'auto' 之后，必须同时设置 style.height 或 style.maxHeight
  return (
    <WebsiteBaseTable
      style={{ width: 600, height: 400, overflow: 'auto' }}
      isLoading={isLoading}
      useOuterBorder
      dataSource={dataSource.flatMap((d) => d.children)}
      columns={[cols.lockProvCol, cols.cityName, ...cols.indCols, cols.lockTimeCol]}
    />
  )
}

export function 表头吸顶() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <div>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: 48,
          border: '1px solid #ccc',
          zIndex: 30,
          background: 'white',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>表格操作栏，这里适合放置一些功能按钮</div>
      </div>
      <WebsiteBaseTable
        isStickyHead
        stickyTop={48}
        isLoading={isLoading}
        dataSource={dataSource}
        columns={testProvColumns}
      />
    </div>
  )
}

export function 自定义表头单元格样式() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <WebsiteBaseTable
      isLoading={isLoading}
      dataSource={dataSource.slice(0, 5)}
      columns={[
        {
          code: 'provinceName',
          name: '省份',
          width: 150,
          headerCellProps: {
            style: { color: 'white', fontSize: 20, background: '#1ea7fd' },
          },
        },
        ...cols.indCols,
        {
          code: 'updateTime',
          name: '最后更新时间',
          width: 180,
          render: time,
          headerCellProps: {
            style: {
              letterSpacing: 10,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          },
        },
      ]}
    />
  )
}

export function 表格吸底() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <div>
      <WebsiteBaseTable
        isStickyHead
        stickyBottom={48}
        isLoading={isLoading}
        dataSource={dataSource}
        columns={testProvColumns}
      />
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          height: 48,
          border: '1px solid #ccc',
          zIndex: 30,
          background: 'white',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>表格底部操作栏，可以放置分页控件 或 表格总结信息</div>
      </div>
      <div style={{ border: '1px solid #ccc', height: '30vh', marginTop: 32 }}>OTHER CONTENT</div>
    </div>
  )
}

export function 列分组() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <WebsiteBaseTable
      isLoading={isLoading}
      dataSource={dataSource}
      columns={[
        {
          name: '基本信息',
          lock: true,
          children: [cols.provinceName, cols.updateTime],
        },
        {
          name: '指标分组',
          children: [
            { name: '指标分组1', children: [cols.confirmedCount, cols.suspectedCount] },
            { name: '指标分组2', children: [cols.curedCount, cols.deadCount] },
          ],
        },
      ]}
    />
  )
}

export function 单元格合并() {
  const dataSource = [
    { prov: '湖北省', confirmed: 54406, cured: 4793, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, t: '2020-02-15 19:52:02' },
  ]

  const columns: ArtColumn[] = [
    {
      code: 'prov',
      name: '省份',
      getCellProps(value: any, record: any, rowIndex: number): CellProps {
        if (rowIndex === 3) {
          return { colSpan: 2, rowSpan: 2 }
        }
      },
    },
    { code: 'confirmed', name: '确诊', align: 'right' },
    { code: 'cured', name: '治愈', align: 'right' },
    {
      code: 't',
      name: '最后更新时间',
      getCellProps(value: any, record: any, rowIndex: number) {
        if (rowIndex === 1) {
          return { rowSpan: 3 }
        }
      },
    },
  ]
  return <WebsiteBaseTable defaultColumnWidth={100} dataSource={dataSource} columns={columns} />
}

export function 虚拟滚动与单元格合并() {
  const { dataSource, isLoading } = useCityDataSource()

  let lastTop = 0
  const rectMap = new Map<string, SpanRect>()
  dataSource.forEach((d) => {
    rectMap.set(d.provinceName, {
      left: 0,
      right: 1,
      top: lastTop,
      bottom: lastTop + d.children.length,
    })
    lastTop += d.children.length
  })

  return (
    <WebsiteBaseTable
      isLoading={isLoading}
      dataSource={dataSource.slice(0, 3).flatMap((d) => d.children)}
      useVirtual={true}
      columns={[
        {
          ...cols.lockProvCol,
          getSpanRect(value: any) {
            return rectMap.get(value)
          },
        },
        cols.lockCityCol,
        cols.confirmedCount,
        cols.suspectedCount,
        cols.curedCount,
        cols.deadCount,
        cols.updateTime,
      ]}
    />
  )
}

export function 自定义单元格样式() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const columns: ArtColumn[] = [
    { code: 'provinceName', name: '省份', width: 150 },
    {
      code: 'confirmedCount',
      name: '确诊',
      width: 100,
      render(v: number) {
        const danger = v > 1000
        const safe = v < 100
        return (
          <div
            style={{
              color: danger ? 'red' : safe ? 'green' : 'unset',
              fontWeight: danger || safe ? 'bold' : 'normal',
            }}
          >
            {amount(v)}
          </div>
        )
      },
      align: 'right',
    },
    { code: 'suspectedCount', name: '疑似', width: 100, render: amount, align: 'right' },
    {
      code: 'curedCount',
      name: '治愈',
      width: 100,
      render: amount,
      align: 'right',
      getCellProps(value: any, record: any) {
        if (record.curedCount / record.confirmedCount > 0.3) {
          return { style: { background: '#129835', color: 'white', fontWeight: 'bold' } }
        }
      },
    },
    {
      code: 'deadCount',
      name: '死亡',
      width: 100,
      render: amount,
      align: 'right',
      getCellProps(value: any) {
        const danger = value > 0
        if (danger) {
          return { style: { background: '#981c12', color: 'white', fontWeight: 'bold' } }
        }
      },
    },
    { code: 'updateTime', name: '最后更新时间', width: 180, render: time },
  ]
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          <h1 style={{ marginBottom: 6 }}>样式说明</h1>
          <p style={{ margin: '6px 0' }}>红色字体：确诊 &gt; 1000</p>
          <p style={{ margin: '6px 0' }}>绿色背景：治愈 / 确诊 &gt; 0.3</p>
          <p style={{ margin: '6px 0' }}>红色背景：死亡 &gt; 0</p>
        </div>
      </div>

      <WebsiteBaseTable isLoading={isLoading} dataSource={dataSource} columns={columns} />
    </div>
  )
}

const Row = styled.div`
  height: 36px;
  display: flex;
  align-items: center;

  > span {
    width: 100px;
  }
`

export function 限定表格容器大小() {
  const nameCol = { lock: true, code: 'name', width: 200, name: '公司名称' }
  const repeats: ArtColumn[] = [
    { code: 'amount', width: 160, align: 'right', name: '金额' },
    { code: 'dept', width: 160, name: '金融机构' },
    { code: 'applier', width: 120, name: '申请人' },
  ]

  return (
    <WebsiteBaseTable
      style={{ width: 800, height: 385, overflow: 'auto' }}
      dataSource={repeat(dataSource1, 10)}
      columns={[
        {
          name: '序号',
          width: 70,
          align: 'right',
          lock: true,
          getValue(_, rowIndex) {
            return String(rowIndex + 1)
          },
        },
        nameCol,
        ...repeat(repeats, 5),
        operationCol,
      ]}
    />
  )
}

export function 不限定表格容器大小() {
  return (
    <WebsiteBaseTable
      dataSource={repeat(dataSource1, 10)}
      columns={[
        {
          name: '序号',
          width: 70,
          align: 'right',
          lock: true,
          getValue(_, rowIndex) {
            return String(rowIndex + 1)
          },
        },
        { lock: true, code: 'name', width: 200, name: '公司名称' },
        ...repeat<ArtColumn>(
          [
            { code: 'amount', width: 160, align: 'right', name: '金额' },
            { code: 'dept', width: 160, name: '金融机构' },
            { code: 'applier', width: 120, name: '申请人' },
          ],
          5,
        ),
        operationCol,
      ]}
    />
  )
}

export function Props组合() {
  const [config, setConfig] = useState({
    hasHeader: true,
    isLoading: false,
    useOuterBorder: false,
    dataSize: 10,
    height: 'auto' as 'auto' | number,
  })

  const { isLoading, dataSource } = useProvinceDataSource()

  return (
    <div>
      <div style={{ lineHeight: 1.5 }}>
        hasHeader 表示表头是否展示；
        <br />
        isLoading 表示表格数据是否在加载中；
        <br />
        useOuterBorder 表示是否使用表格最外层的 div 的边框来代替单元格的外边框
      </div>
      <Row>
        <Checkbox
          checked={config.hasHeader}
          onChange={(v) => {
            setConfig({ ...config, hasHeader: v })
          }}
        >
          <span style={{ color: 'var(--ifm-font-color-base)' }}>hasHeader</span>
        </Checkbox>
        <Checkbox
          style={{ marginLeft: 32 }}
          checked={config.isLoading}
          onChange={(v) => {
            setConfig({ ...config, isLoading: v })
          }}
        >
          <span style={{ color: 'var(--ifm-font-color-base)' }}>isLoading</span>
        </Checkbox>
        <Checkbox
          style={{ marginLeft: 32 }}
          checked={config.useOuterBorder}
          onChange={(v) => {
            setConfig({ ...config, useOuterBorder: v })
          }}
        >
          <span style={{ color: 'var(--ifm-font-color-base)' }}>useOuterBorder</span>
        </Checkbox>
      </Row>

      <Row>
        <span>data size:</span>
        <Button.Group>
          {[0, 3, 10].map((size) => (
            <Button
              key={size}
              type={config.dataSize === size ? 'primary' : 'normal'}
              onClick={() => {
                setConfig({ ...config, dataSize: size })
              }}
            >
              {size}
            </Button>
          ))}
          <Button
            type={isFinite(config.dataSize) ? 'normal' : 'primary'}
            onClick={() => {
              setConfig({ ...config, dataSize: Infinity })
            }}
          >
            不限
          </Button>
        </Button.Group>
      </Row>
      <Row>
        <span>table height:</span>
        <Button.Group>
          {['auto', 200, 400, 600].map((h) => (
            <Button
              key={h}
              type={config.height === h ? 'primary' : 'normal'}
              onClick={() => {
                setConfig({ ...config, height: h as any })
              }}
            >
              {h}
            </Button>
          ))}
        </Button.Group>
      </Row>
      <p style={{ color: 'var(--ifm-color-primary)' }}>
        tips: 为表格设置具体的高度之后记得添加 style.overflow=auto，不然高度仍然会被内容撑开.
      </p>
      <WebsiteBaseTable
        hasHeader={config.hasHeader}
        isLoading={isLoading || config.isLoading}
        useOuterBorder={config.useOuterBorder}
        style={{
          height: config.height,
          overflow: config.height === 'auto' ? 'visible' : 'auto',
          marginTop: 16,
        }}
        dataSource={dataSource.slice(0, config.dataSize)}
        columns={testProvColumns}
      />
    </div>
  )
}
