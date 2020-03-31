import { Button, Checkbox } from '@alifd/next'
import { BaseTable, Classes, ArtColumn, SpanRect } from 'ali-react-table'
import React, { useState } from 'react'
import styled from 'styled-components'
import { amount, time } from '../assets/format'
import { FusionStyles } from '../assets/fusion-style'
import { cols, testProvColumns, useCityDataSource, useProvinceDataSource } from '../assets/ncov19-assets'

export default { title: '基础表格 / 示例' }

export function 基本用法() {
  const { isLoading, dataSource } = useProvinceDataSource()
  const columns: ArtColumn[] = [
    { code: 'provinceName', name: '省份', width: 150 },
    { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right' },
    { code: 'suspectedCount', name: '疑似', width: 100, render: amount, align: 'right' },
    { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right' },
    { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right' },
    { code: 'updateTime', name: '最后更新时间', width: 180, render: time },
  ]
  return <BaseTable isLoading={isLoading} dataSource={dataSource.slice(0, 5)} columns={columns} />
}

const ZebraBaseTable = styled(BaseTable)`
  --row-hover-color: none;

  .${Classes.tableRow} {
    &.even {
      background: #f2f2f2;
    }

    &.odd {
      background: white;
    }
  }
`

export function 自定义表格样式() {
  const { isLoading, dataSource } = useProvinceDataSource()
  return (
    <BaseTable
      style={{
        '--cell-border-horizontal': '1px solid #f0f0f0',
        '--cell-border-vertical': 'none',
        '--header-bgcolor': '#fafafa',
        '--header-cell-border': 'none',
        '--header-row-height': '40px',
      }}
      isLoading={isLoading}
      dataSource={dataSource.slice(0, 6)}
      columns={testProvColumns}
    />
  )
}

export function 自定义表格样式2() {
  /*
  import styled from 'styled-components'
  import { BaseTable, Classes } from 'ali-react-table'

  const ZebraBaseTable = styled(BaseTable)`
     --row-hover-color: none;

    .${Classes.tableRow} {
      &.even {
        background: #f2f2f2;
      }

      &.odd {
        background: white;
      }
    }`
   */
  const { isLoading, dataSource } = useProvinceDataSource()
  return <ZebraBaseTable isLoading={isLoading} dataSource={dataSource.slice(0, 10)} columns={testProvColumns} />
}

const Row = styled.div`
  height: 36px;
  display: flex;
  align-items: center;

  > span {
    width: 100px;
  }
`

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
      <FusionStyles />
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
          onChange={v => {
            setConfig({ ...config, hasHeader: v })
          }}
        >
          hasHeader
        </Checkbox>
        <Checkbox
          style={{ marginLeft: 32 }}
          checked={config.isLoading}
          onChange={v => {
            setConfig({ ...config, isLoading: v })
          }}
        >
          isLoading
        </Checkbox>
        <Checkbox
          style={{ marginLeft: 32 }}
          checked={config.useOuterBorder}
          onChange={v => {
            setConfig({ ...config, useOuterBorder: v })
          }}
        >
          useOuterBorder
        </Checkbox>
      </Row>

      <Row>
        <span>data size:</span>
        <Button.Group>
          {[0, 3, 10].map(size => (
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
          {['auto', 200, 400, 600].map(h => (
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
      <p style={{ color: '#353640' }}>
        tips: 为表格设置具体的高度之后记得添加 style.overflow=auto，不然高度仍然会被内容撑开.
      </p>
      <BaseTable
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

export function 默认列宽() {
  const { isLoading, dataSource } = useProvinceDataSource()
  const columns: ArtColumn[] = [
    { code: 'provinceName', name: '省份' },
    { code: 'confirmedCount', name: '确诊', render: amount, align: 'right' },
    { code: 'suspectedCount', name: '疑似', render: amount, align: 'right' },
    { code: 'curedCount', name: '治愈', render: amount, align: 'right' },
    { code: 'deadCount', name: '死亡', render: amount, align: 'right' },
    { code: 'updateTime', name: '最后更新时间', render: time },
  ]
  return (
    <BaseTable
      defaultColumnWidth={200}
      isLoading={isLoading}
      dataSource={dataSource.slice(0, 5)}
      columns={[...columns, ...columns]}
    />
  )
}

export function 左侧锁列() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <BaseTable
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
    <BaseTable
      style={{ width: 600, height: 400, overflow: 'auto' }}
      isLoading={isLoading}
      useOuterBorder
      dataSource={dataSource.flatMap(d => d.children)}
      columns={[cols.lockProvCol, cols.cityName, ...cols.indCols, cols.lockTimeCol]}
    />
  )
}

export function 表头吸顶_Sticky_Header() {
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
      <BaseTable isStickyHead stickyTop={48} isLoading={isLoading} dataSource={dataSource} columns={testProvColumns} />
    </div>
  )
}

export function 表头props() {
  // 表头 props 好像也就改个样式 实用一点...

  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <BaseTable
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

export function 表格吸底_Sticky_Bottom() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <div>
      <BaseTable
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
        <div>表格底部操作栏，这里可以放置分页控件</div>
      </div>
      <div style={{ border: '1px solid #ccc', height: '30vh', marginTop: 32 }}>OTHER CONTENT</div>
    </div>
  )
}

export function 列分组() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <BaseTable
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

export function 虚拟滚动与单元格合并() {
  const { dataSource, isLoading } = useCityDataSource()

  let lastTop = 0
  const rectMap = new Map<string, SpanRect>()
  dataSource.forEach(d => {
    rectMap.set(d.provinceName, {
      left: 0,
      right: 1,
      top: lastTop,
      bottom: lastTop + d.children.length,
    })
    lastTop += d.children.length
  })

  return (
    <BaseTable
      isLoading={isLoading}
      dataSource={dataSource.slice(0, 3).flatMap(d => d.children)}
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
      <h1>样式说明</h1>
      <p>红色字体：确诊 > 1000</p>
      <p>绿色背景：治愈 / 确诊 > 0.3</p>
      <p>红色背景：死亡 > 0</p>
      <BaseTable isLoading={isLoading} dataSource={dataSource} columns={columns} />
    </div>
  )
}
