import { ArtColumn, features, useTablePipeline } from 'ali-react-table'
import * as fusion from '@alifd/next'
import { repeat } from 'assets/biz-assets'
import { cols, useAllDataSource } from 'assets/ncov19-assets'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import React, { useState } from 'react'
import styled from 'styled-components'

export default { title: '大数据测试' }

export function 滚动容器为window() {
  const { dataSource, isLoading } = useAllDataSource()
  return (
    <WebsiteBaseTable
      isLoading={isLoading}
      dataSource={dataSource}
      columns={[
        {
          lock: true,
          width: 80,
          name: 'index',
          getValue(record: any, rowIndex: number) {
            return rowIndex
          },
        },
        cols.updateTime,
        cols.provinceName,
        cols.cityName,
        ...cols.indCols,
      ]}
    />
  )
}

export function 滚动容器为指定高度的div() {
  const { dataSource, isLoading } = useAllDataSource()
  return (
    <WebsiteBaseTable
      style={{ height: 400, overflow: 'auto' }}
      useOuterBorder
      isLoading={isLoading}
      dataSource={dataSource}
      columns={[
        {
          lock: true,
          width: 80,
          name: 'index',
          getValue(record: any, rowIndex: number) {
            return rowIndex
          },
        },
        cols.updateTime,
        cols.provinceName,
        cols.cityName,
        ...cols.indCols,
      ]}
    />
  )
}

export function 双向虚拟滚动() {
  const { dataSource, isLoading } = useAllDataSource()
  const repeatedColumns: ArtColumn[] = []

  for (let i = 0; i < 1000; i++) {
    for (const col of cols.indCols) {
      repeatedColumns.push({ ...col, name: `copy-${i} ${col.name}` })
    }
  }

  return (
    <WebsiteBaseTable
      isLoading={isLoading}
      useVirtual={true}
      dataSource={[dataSource, dataSource, dataSource, dataSource, dataSource].flat()}
      columns={[
        {
          lock: true,
          width: 80,
          name: 'index',
          getValue(record: any, rowIndex: number) {
            return rowIndex
          },
        },
        cols.updateTime,
        cols.provinceName,
        cols.cityName,
        ...repeatedColumns,
      ]}
    />
  )
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

export function 动态行数量() {
  const dataSource = repeat(
    [
      { name: '阿里巴巴', amount: '600,000.00(CNY)', dept: '招商银行丨杭州分行', applier: 'James Collier' },
      { name: '蚂蚁金服', amount: '600,000.00(CNY)', dept: '建设银行丨未来科技城', applier: 'Philip Burke' },
      { name: '菜鸟', amount: '600,000.00(CNY)', dept: '交通银行丨浙大路支行', applier: 'Wesley Cruz' },
    ],
    500,
  ).map((row, i) => ({ ...row, id: String(i + 1) }))

  const columns: ArtColumn[] = [
    { code: 'name', width: 180, name: '公司名称' },
    { code: 'amount', width: 160, align: 'right', name: '金额' },
    { code: 'dept', width: 160, name: '金融机构' },
    { code: 'id', width: 80, name: '#', render: (v: string) => `#${v}` },
    { code: 'applier', width: 200, name: '申请人' },
  ]

  function renderDetail(row: any) {
    return (
      <div>
        <DetailDiv style={{ margin: 8 }}>
          <div className="left">
            <p>最近工作：高级经理｜{row.dept}｜2009-07-01 至今</p>
            <p>工作职责：巴拉巴拉小魔仙</p>
          </div>
          <div className="right">
            <p>教育经理：北京大学｜工商管理｜2007-09-01 至 2006-06-01</p>
            <p>中央财经大学｜2004-09-01 至 2007-06-01</p>
          </div>
        </DetailDiv>
      </div>
    )
  }

  const [openKeys, onChangeOpenKeys] = useState<string[]>([])

  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource, columns })
    .primaryKey('id')
    .use(features.rowDetail({ openKeys, onChangeOpenKeys, renderDetail }))

  return (
    <div>
      <p>展开/收拢详情单元格时，行的数量会发生变化，组件会动态调整内部的缓存以适应此类情况。</p>
      <p>
        表格行的数量： {pipeline.getDataSource().length}
        <button
          style={{ marginLeft: 24 }}
          onClick={function () {
            const allKeys = dataSource.map((row) => row.id)
            onChangeOpenKeys(openKeys.length === allKeys.length ? [] : allKeys)
          }}
        >
          展开/收拢全部
        </button>
      </p>
      <WebsiteBaseTable useOuterBorder style={{ maxHeight: 450, overflow: 'auto' }} {...pipeline.getProps()} />
    </div>
  )
}

export function 动态表格行高度() {
  const dataSource = repeat(
    [
      { name: '阿里巴巴', amount: '600,000.00(CNY)', dept: '招商银行丨杭州分行', applier: 'James Collier' },
      { name: '蚂蚁金服', amount: '600,000.00(CNY)', dept: '建设银行丨未来科技城', applier: 'Philip Burke' },
      { name: '菜鸟', amount: '600,000.00(CNY)', dept: '交通银行丨浙大路支行', applier: 'Wesley Cruz' },
    ],
    500,
  ).map((row, i) => ({ ...row, id: String(i + 1) }))

  const columns: ArtColumn[] = [
    { code: 'name', width: 180, name: '公司名称' },
    { code: 'amount', width: 160, align: 'right', name: '金额' },
    { code: 'dept', width: 160, name: '金融机构' },
    { code: 'id', width: 80, name: '#', render: (v: string) => `#${v}` },
    { code: 'applier', width: 200, name: '申请人' },
  ]

  function renderDetail(row: any) {
    return (
      <div style={{ margin: 16 }}>
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
        <h1 style={{ color: '#666', margin: 32, fontSize: 40, textAlign: 'center' }}>SOME EXTRA CONTENT</h1>
        <h1 style={{ color: '#666', margin: 32, fontSize: 40, textAlign: 'center' }}>#{row.id}</h1>
      </div>
    )
  }

  const [openKeys, onChangeOpenKeys] = useState<string[]>([])

  const pipeline = useTablePipeline({ components: fusion as any })
    .input({ dataSource, columns })
    .primaryKey('id')
    .use(features.rowDetail({ openKeys, onChangeOpenKeys, renderDetail }))

  return (
    <div>
      <p>
        在下面的例子中，普通的行与详情行的高度差别较大。这会影响到组件内部对表格行的预估高度的准确性，导致页面/表格滚动时，滚动条发生跳动。
        <br />
        我们推荐在开启虚拟滚动的情况下，每一行的高度最好保持大致相等，同时设置合理的{' '}
        <code>props.estimatedRowHeight</code> 让组件内部的预估高度更加准确。
      </p>
      <p>
        表格行的数量： {pipeline.getDataSource().length}
        <button
          style={{ marginLeft: 24 }}
          onClick={function () {
            const allKeys = dataSource.map((row) => row.id)
            onChangeOpenKeys(openKeys.length === allKeys.length ? [] : allKeys)
          }}
        >
          展开/收拢全部
        </button>
      </p>
      <WebsiteBaseTable {...pipeline.getProps()} />
    </div>
  )
}
