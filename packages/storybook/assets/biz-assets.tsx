import { Dropdown, Menu } from '@alifd/next'
import { ArtColumn, proto } from 'ali-react-table'
import React from 'react'
import styled from 'styled-components'
import { icons } from 'ali-react-table/src/common-views'

export function repeat<T>(arr: T[], n: number) {
  let result: T[] = []
  for (let i = 0; i < n; i++) {
    result = result.concat(arr)
  }
  return result
}

export function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

const OperationsDiv = styled.div`
  display: flex;
  height: 20px;
  align-items: center;

  .item {
    height: 20px;
    cursor: pointer;
    color: #3858cf;
    display: flex;
    align-items: center;

    &.danger {
      color: #eb4141;
    }
  }

  .sep {
    height: 10px;
    width: 1px;
    margin-left: 12px;
    margin-right: 12px;
    background: #eeeeee;
  }
`

function renderOptions() {
  return (
    <OperationsDiv>
      <div className="item">编辑</div>
      <div className="sep" />
      <div className="item danger">删除</div>
      <div className="sep" />

      <Dropdown
        trigger={
          <div className="item">
            更多
            <icons.CaretDown style={{ color: '#A6A6A6' }} />
          </div>
        }
        triggerType="click"
      >
        <Menu>
          <Menu.Item>Option 1</Menu.Item>
          <Menu.Item>Option 2</Menu.Item>
          <Menu.Item>Option 3</Menu.Item>
          <Menu.Item>Option 4</Menu.Item>
        </Menu>
      </Dropdown>
    </OperationsDiv>
  )
}

export const operationCol = { lock: true, name: '操作', render: renderOptions, width: 200 }

export const dataSource1 = [
  {
    id: '1',
    name: '阿里巴巴网络技术有限公司',
    amount: '600,000.00(CNY)',
    dept: '招商银行丨杭州分行',
    applier: 'James Collier',
  },
  {
    id: '2',
    name: '阿里巴巴网络技术有限公司',
    amount: '600,000.00(CNY)',
    dept: '建设银行丨未来科技城',
    applier: 'Philip Burke',
  },
  {
    id: '3',
    name: '阿里巴巴网络技术有限公司',
    amount: '600,000.00(CNY)',
    dept: '交通银行丨浙大路支行',
    applier: 'Wesley Cruz',
  },
  {
    id: '4',
    name: '阿里巴巴网络技术有限公司',
    amount: '600,000.00(CNY)',
    dept: '招商银行丨庆春路支行',
    applier: 'Billy Horton',
  },
  {
    id: '5',
    name: '阿里巴巴网络技术有限公司',
    amount: '600,000.00(CNY)',
    dept: '招商银行丨文一路分行',
    applier: 'Paul Tran',
  },
  {
    id: '6',
    name: '阿里巴巴网络技术有限公司',
    amount: '600,000.00(CNY)',
    dept: '农业银行丨杭州分行',
    applier: 'Anna Poole',
  },
]
export const columns1: ArtColumn[] = [
  { code: 'name', width: 220, name: '公司名称' },
  { code: 'amount', width: 160, align: 'right', name: '金额' },
  { code: 'dept', width: 160, name: '金融机构' },
  { code: 'applier', width: 120, name: '申请人' },
]
export const dataSource2 = [
  { name: '蚂蚁金服', dept: '消费者事业部-淘宝-UED', dest: 'South Maddison', guide: 'Don Moreno' },
  { name: '阿里巴巴(中国)有限公司', dept: '航旅事业部-酒店业务', dest: 'Emilhaven', guide: 'Douglas Richards' },
  { name: '菜鸟网络', dept: '消费者事业部-淘宝-UED', dest: '云南大理', guide: 'Douglas Lee' },
  { name: '蚂蚁金服', dept: '信息平台部-用户体验部', dest: '杭州千岛湖', guide: 'Eric Castillo' },
  { name: '阿里巴巴(中国)有限公司', dept: '消费者事业部-淘宝-UED', dest: 'East Karl', guide: 'Herbert Patton' },
]
export const columns2 = [
  { code: 'name', name: '公司名称', width: 200 },
  { code: 'dept', name: '部门名称', width: 180 },
  { code: 'dest', name: '团建目的地', width: 160 },
  { code: 'guide', name: '当地导游', width: 160 },
]
export const dataSource3 = [
  {
    name: '阿里巴巴网络技术有限公司1',
    entity: '蚂蚁金服（中国）',
    dept: '招商银行丨杭州分行',
    applier: 'Don Moreno',
  },
  {
    name: '阿里巴巴网络技术有限公司2',
    entity: '蚂蚁金服（中国）',
    dept: '建设银行丨未来科技城',
    applier: 'Douglas Richards',
  },
  {
    name: '阿里巴巴网络技术有限公司3',
    entity: '蚂蚁金服（中国）',
    dept: '交通银行丨浙大路支行',
    applier: 'Douglas Lee',
  },
  {
    name: '阿里巴巴网络技术有限公司4',
    entity: '蚂蚁金服（中国）',
    dept: '招商银行丨庆春路支行',
    applier: 'Eric Castillo',
  },
  {
    name: '阿里巴巴网络技术有限公司5',
    entity: '蚂蚁金服（中国）',
    dept: '招商银行丨文一路分行',
    applier: 'Herbert Patton',
  },
]
export const columns3: ArtColumn[] = [
  { code: 'name', name: '公司名称', width: 200, features: { sortable: true } },
  { code: 'entity', name: '支付实体', width: 160 },
  { code: 'dept', name: '金融机构', width: 160, features: { sortable: true } },
  { code: 'applier', name: '申请人', width: 160, features: { sortable: true } },
  operationCol,
]

export function makeChildren(prefix: string) {
  return [
    {
      id: `${prefix}-1`,
      title: '二级标题',
      dept: '消费者事业部-淘宝-UED',
      dest: '云南大理',
      guide: 'Douglas Lee',
      children: [
        { id: `${prefix}-1-1`, title: '三级标题', dept: '盒马产品技术部-UED', dest: '云南大理', guide: 'Douglas Lee' },
        { id: `${prefix}-1-2`, title: '三级标题', dept: '盒马产品技术部-前端', dest: '云南大理', guide: 'Douglas Lee' },
      ],
    },
    {
      id: `${prefix}-2`,
      title: '二级标题',
      dept: '消费者事业部-淘宝-UED',
      dest: '云南大理',
      guide: 'Douglas Lee',
      children: [
        { id: `${prefix}-2-1`, title: '三级标题', dept: '盒马产品技术部-UED', dest: '云南大理', guide: 'Douglas Lee' },
        { id: `${prefix}-2-2`, title: '三级标题', dept: '盒马产品技术部-前端', dest: '云南大理', guide: 'Douglas Lee' },
      ],
    },
    { id: `${prefix}-3`, title: '二级标题', dept: '消费者事业部-淘宝-UED', dest: '云南大理', guide: 'Douglas Lee' },
  ]
}

function makeChildren2(prefix: string) {
  return [
    {
      id: `${prefix}-1`,
      title: '二级标题',
      dept: '消费者事业部-淘宝-UED',
      dest: '云南大理',
      guide: 'Douglas Lee',
      children: [
        { id: `${prefix}-1-1`, title: '三级标题', dept: '盒马产品技术部-UED', dest: '云南大理', guide: 'Douglas Lee' },
        { id: `${prefix}-1-2`, title: '三级标题', dept: '盒马产品技术部-前端', dest: '云南大理', guide: 'Douglas Lee' },
      ],
    },
    {
      id: `${prefix}-2`,
      title: '二级标题',
      dept: '消费者事业部-淘宝-UED',
      dest: '云南大理',
      guide: 'Douglas Lee',
      children: [
        { id: `${prefix}-2-1`, title: '三级标题', dept: '盒马产品技术部-UED', dest: '云南大理', guide: 'Douglas Lee' },
        { id: `${prefix}-2-2`, title: '三级标题', dept: '盒马产品技术部-前端', dest: '云南大理', guide: 'Douglas Lee' },
      ],
    },
  ]
}

export const dataSource4: any[] = [
  {
    id: '1',
    title: '一级标题',
    dept: '消费者事业部-淘宝-UED',
    dest: 'South Maddison',
    guide: 'Don Moreno',
    children: makeChildren('1'),
  },
  {
    id: '2',
    title: '一级标题',
    dept: '航旅事业部-酒店业务',
    dest: 'Emilhaven',
    guide: 'Douglas Richards',
    children: makeChildren('2'),
  },
  {
    id: '3',
    title: '一级标题',
    dept: '消费者事业部-淘宝-UED',
    dest: '云南大理',
    guide: 'Douglas Lee',
    children: makeChildren('3'),
  },
  {
    id: '4',
    title: '一级标题',
    dept: '信息平台部-用户体验部',
    dest: '杭州千岛湖',
    guide: 'Eric Castillo',
    children: makeChildren('4'),
  },
  { id: '5', title: '一级标题', dept: '消费者事业部-淘宝-UED', dest: 'East Karl', guide: 'Herbert Patton' },
]
export const columns4 = [
  { code: 'title', name: '标题', width: 200 },
  { code: 'dept', name: '部门名称', width: 180 },
  { code: 'dest', name: '团建目的地', width: 160 },
  { code: 'guide', name: '当地导游', width: 160 },
  operationCol,
]
export const dataSource5 = [
  { id: '1', title: '阿里巴巴网络技术有限公司', children: makeChildren2('1') },
  { id: '2', title: '蚂蚁金服有限公司', children: makeChildren2('2') },
  { id: '3', title: '其他', children: makeChildren2('3') },
]
export const columns5 = [
  { code: 'title', name: '标题', width: 200 },
  { code: 'dept', name: '部门名称', width: 180 },
  { code: 'dest', name: '团建目的地', width: 160 },
  { code: 'guide', name: '当地导游', width: 160 },
]

const occupations = ['UED', '客服', '产品', '运营', '前端', '数据']
const col = proto.array<ArtColumn>({
  align: 'center',
  width: 80,
  headerCellProps: { style: { textAlign: 'center', padding: 0 } },
})

export const dataSource6 = occupations.map((occupation) => ({
  occupation,
  hc_2014: 104,
  hc_2015: 168,
  hc_lfl: 50,
  age_2014: 30,
  age_2015: 32,
  age_lfl: 15,
  rate_2014: 0.3,
  rate_2015: 0.45,
  rate2_2014: 0.33,
  rate2_2015: 0.48,
}))
export const columns6: ArtColumn[] = col([
  { lock: true, code: 'occupation', name: '职务', width: 120 },
  {
    name: '人数',
    children: col([
      { code: 'hc_2014', name: '2014年' },
      { code: 'hc_2015', name: '2015年' },
      { code: 'hc_lfl', name: '同比增长' },
    ]),
  },
  {
    name: '年龄',
    children: col([
      { code: 'age_2014', name: '2014年' },
      { code: 'age_2015', name: '2015年' },
      { code: 'age_lfl', name: '同比增长' },
    ]),
  },
  {
    name: '占比',
    children: col([
      { code: 'rate_2014', name: '2014年' },
      { code: 'rate_2015', name: '2015年' },
    ]),
  },
  {
    name: '占比2',
    children: col([
      { code: 'rate_2014', name: '2014年' },
      { code: 'rate_2015', name: '2015年' },
    ]),
  },
])
