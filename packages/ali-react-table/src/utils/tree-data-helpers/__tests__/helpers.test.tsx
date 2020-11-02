import collectNodes from '../../collectNodes'
import StrictTreeDataHelper from '../StrictTreeDataHelper'
import TreeDataHelper from '../TreeDataHelper'

interface TreeNode {
  id: string
  title?: string
  children?: TreeNode[]
}

const TREE: TreeNode[] = [
  {
    id: 'root',
    children: [
      {
        id: '1',
        title: '一级标题',
        children: [
          {
            id: '1-1',
            title: '二级标题',
            children: [
              { id: '1-1-1', title: '三级标题' },
              { id: '1-1-2', title: '三级标题' },
            ],
          },
          {
            id: '1-2',
            title: '二级标题',
            children: [
              { id: '1-2-1', title: '三级标题' },
              { id: '1-2-2', title: '三级标题' },
            ],
          },
          { id: '1-3', title: '二级标题' },
        ],
      },
      {
        id: '2',
        title: '一级标题',
        children: [
          {
            id: '2-1',
            title: '二级标题',
            children: [
              { id: '2-1-1', title: '三级标题' },
              { id: '2-1-2', title: '三级标题' },
            ],
          },
          {
            id: '2-2',
            title: '二级标题',
            children: [
              { id: '2-2-1', title: '三级标题' },
              { id: '2-2-2', title: '三级标题' },
            ],
          },
          { id: '2-3', title: '二级标题' },
        ],
      },
      {
        id: '3',
        title: '一级标题',
        children: [
          {
            id: '3-1',
            title: '二级标题',
            children: [
              { id: '3-1-1', title: '三级标题' },
              { id: '3-1-2', title: '三级标题' },
            ],
          },
          {
            id: '3-2',
            title: '二级标题',
            children: [
              { id: '3-2-1', title: '三级标题' },
              { id: '3-2-2', title: '三级标题' },
            ],
          },
          { id: '3-3', title: '二级标题' },
        ],
      },
    ],
  },
]

function getNodeValue(node: TreeNode): string {
  return node.id
}

const helpers = {
  strategyParent(value: string[]) {
    return new TreeDataHelper({ tree: TREE, getNodeValue, value, checkedStrategy: 'parent' })
  },
  strategyAll(value: string[]) {
    return new TreeDataHelper({ tree: TREE, getNodeValue, value, checkedStrategy: 'all' })
  },
  strategyChild(value: string[]) {
    return new TreeDataHelper({ tree: TREE, getNodeValue, value, checkedStrategy: 'child' })
  },
  strict(value: string[]) {
    return new StrictTreeDataHelper({ tree: TREE, getNodeValue, value })
  },
}

test('query', () => {
  const helper = helpers.strategyParent(['1', '2'])

  expect(helper.isChecked('root')).toBe(false)
  expect(helper.isChecked('1')).toBe(true)
  expect(helper.isChecked('2-1-1')).toBe(true)
  expect(helper.isChecked('3')).toBe(false)
  expect(helper.isIndeterminate('root')).toBe(true)
  expect(helper.isIndeterminate('3')).toBe(false)

  expect(helper.getNode('1').children[0]).toBe(helper.getNode('1-1'))
  expect(helper.getCleanValue()).toEqual(['1', '2'])
})

test('strategy=parent', () => {
  const helper = helpers.strategyParent(['1', '2'])

  expect(helper.getValueAfterCheck('1')).toEqual(['1', '2'])
  expect(helper.getValueAfterCheck('2-1-1')).toEqual(['1', '2'])
  expect(helper.getValueAfterCheck('3')).toEqual(['root'])
  expect(helper.getValueAfterCheck('3-1')).toEqual(['1', '2', '3-1'])
  expect(helper.getValueAfterCheck('root')).toEqual(['root'])

  expect(helper.getValueAfterToggle('1')).toEqual(['2'])
  expect(helper.getValueAfterToggle('2-1-1')).toEqual(['1', '2-1-2', '2-2', '2-3'])
  expect(helper.getValueAfterToggle('3')).toEqual(['root'])
  expect(helper.getValueAfterToggle('3-1')).toEqual(['1', '2', '3-1'])
  expect(helper.getValueAfterToggle('root')).toEqual(['root'])

  expect(helper.getValueAfterUncheck('1')).toEqual(['2'])
  expect(helper.getValueAfterUncheck('2-1-1')).toEqual(['1', '2-1-2', '2-2', '2-3'])
  expect(helper.getValueAfterUncheck('3')).toEqual(['1', '2'])
  expect(helper.getValueAfterUncheck('3-1')).toEqual(['1', '2'])
  expect(helper.getValueAfterUncheck('root')).toEqual(['1', '2'])
})

test('strategy=all', () => {
  const helper = helpers.strategyAll(['1', '2'])

  const actual1 = helper.getValueAfterCheck('1')
  const expected1 = [
    ...collectNodes([helper.getNode('1')], 'pre').map((n) => n.id),
    ...collectNodes([helper.getNode('2')], 'pre').map((n) => n.id),
  ]
  expect(actual1.length).toEqual(expected1.length)
  expect(actual1).toEqual(expect.arrayContaining(expected1))
})

test('strategy=child', () => {
  const helper = helpers.strategyChild(['1', '2'])

  const actual1 = helper.getValueAfterUncheck('1')
  const expected1 = collectNodes([helper.getNode('2')], 'leaf-only').map((n) => n.id)
  expect(actual1.length).toEqual(expected1.length)
  expect(actual1).toEqual(expect.arrayContaining(expected1))

  const actual2 = helper.getCleanValue()
  const expected2 = [
    ...collectNodes([helper.getNode('1')], 'leaf-only').map((n) => n.id),
    ...collectNodes([helper.getNode('2')], 'leaf-only').map((n) => n.id),
  ]
  expect(actual2.length).toEqual(expected2.length)
  expect(actual2).toEqual(expect.arrayContaining(expected2))
})

test('checkStrictly', () => {
  const helper = helpers.strict(['1', '2'])

  expect(helper.getCleanValue()).toEqual(['1', '2'])
  expect(helper.isChecked('root')).toBe(false)
  expect(helper.isChecked('1')).toBe(true)
  expect(helper.isChecked('2-1-1')).toBe(false)
  expect(helper.isChecked('3')).toBe(false)
  expect(helper.isIndeterminate('root')).toBe(false)
  expect(helper.isIndeterminate('3')).toBe(false)

  expect(helper.getValueAfterToggle('2')).toEqual(['1'])
  expect(helper.getValueAfterCheck('2')).toEqual(['1', '2'])
  expect(helper.getValueAfterCheck('3')).toEqual(['1', '2', '3'])
  expect(helper.getValueAfterUncheck('2')).toEqual(['1'])
  expect(helper.getValueAfterUncheck('3')).toEqual(['1', '2'])
  expect(helper.getValueAfterToggle('3-1')).toEqual(['1', '2', '3-1'])
})
