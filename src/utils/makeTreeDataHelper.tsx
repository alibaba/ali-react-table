import { AbstractTreeNode } from '../interfaces'
import isLeafNode from './isLeafNode'

// todo 改成 class Wrapper { ... }

interface Wrapper<N extends AbstractTreeNode> {
  /** 是否为根节点 */
  root?: boolean

  /** 子节点数组 */
  children?: Wrapper<N>[]

  /** 父节点 (parent wrapper node) */
  parent?: Wrapper<N>

  /** 指向对应的普通节点 */
  node: N

  /** 该节点在非严格模式下是否「选中」 */
  checked?: boolean

  /** 该节点是否「恰好选中」 (即节点的值是否在 value 数组中） */
  exactChecked?: boolean

  /** 非严格模式下该节点是否有任意祖先节点被选中 */
  anyAncestorsChecked?: boolean

  /** 非严格模式下该节点是否有任意子孙节点被选中 */
  anyDescendentsChecked?: boolean

  /** 非严格模式下该节点的所有子孙节点是否均为选中 */
  allDescendentsChecked?: boolean
}

/** 根据输入的 tree 和 value (选中的值的数组）构建相应的 wrapper tree. */
function _calculateWrapperTree<N extends AbstractTreeNode>(
  tree: N[],
  getNodeValue: (node: N) => string,
  value: string[],
) {
  const valueSet = new Set(value)
  const rootWrapper: Wrapper<N> = { root: true, children: [], parent: null, node: null }
  const wrapperMap = new Map<string, Wrapper<N>>()

  dfs(rootWrapper, tree, false)

  return { rootWrapper, wrapperMap }

  function dfs(parentWrapper: Wrapper<N>, nodes: N[], anyAncestorsChecked: boolean) {
    for (const node of nodes) {
      const exactChecked = valueSet.has(getNodeValue(node))
      if (exactChecked) {
        parentWrapper.anyDescendentsChecked = true
      }

      const checked = anyAncestorsChecked || exactChecked
      const wrapper: Wrapper<N> = {
        parent: parentWrapper,
        node,
        checked,
        exactChecked,
        anyAncestorsChecked,
        anyDescendentsChecked: checked,
        allDescendentsChecked: true,
      }
      wrapperMap.set(getNodeValue(node), wrapper)
      parentWrapper.children.push(wrapper)

      if (!isLeafNode(node)) {
        wrapper.children = []
        dfs(wrapper, node.children as N[], checked)

        if (wrapper.anyDescendentsChecked) {
          parentWrapper.anyDescendentsChecked = true
        }
        if (wrapper.allDescendentsChecked) {
          wrapper.checked = true
          // 当一个节点因为「子节点被全选」而变为 checked 时，我们需要更新子节点的 anyAncestorsChecked 字段
          for (const child of wrapper.children) {
            child.anyAncestorsChecked = true
          }
        }
      }
      if (!wrapper.checked) {
        parentWrapper.allDescendentsChecked = false
      }
    }
  }
}

type CheckedStrategy = 'all' | 'parent' | 'child'

/**
 * 根据勾选策略清理 value
 * @param tree {AbstractTreeNode[]} 输入的树
 * @param getNodeValue 树节点 value 获取方法
 * @param dirtyValue {string[]} 待处理的数组
 * @param checkedStrategy {CheckedStrategy} 勾选策略
 * @returns {string[]}
 */
function _getCleanValue<N extends AbstractTreeNode>(
  tree: N[],
  getNodeValue: (node: N) => string,
  dirtyValue: string[],
  checkedStrategy: CheckedStrategy,
) {
  const { rootWrapper } = _calculateWrapperTree(tree, getNodeValue, dirtyValue)
  const result: string[] = []
  dfs(rootWrapper.children)
  return result

  function dfs(wrappers: Wrapper<N>[]) {
    for (const wrapper of wrappers) {
      if (checkedStrategy === 'all') {
        if (wrapper.checked) {
          result.push(getNodeValue(wrapper.node))
        }
      } else if (checkedStrategy === 'parent') {
        if (wrapper.checked && !wrapper.anyAncestorsChecked) {
          result.push(getNodeValue(wrapper.node))
        }
      } else {
        // checkedStrategy === 'child'
        if (wrapper.checked && isLeafNode(wrapper)) {
          result.push(getNodeValue(wrapper.node))
        }
      }
      if (wrapper.anyDescendentsChecked && !isLeafNode(wrapper)) {
        dfs(wrapper.children)
      }
    }
  }
}

/**
 * 调整 nextArray 中的元素顺序，使其尽可能和 prevArray 保持一致
 * @param prevArray {string[]} 原先的数组
 * @param nextArray {string[]} 新的数组
 * @returns {string[]}
 */
function stabilizeArray(prevArray: string[], nextArray: string[]) {
  const prevSet = new Set(prevArray)
  const nextSet = new Set(nextArray)
  const existing = prevArray.filter((v) => nextSet.has(v))
  const adding = nextArray.filter((v) => !prevSet.has(v))
  return existing.concat(adding)
}

interface MakeTreeDataHelperParams<N extends AbstractTreeNode> {
  tree: N[]
  getNodeValue(node: N): string
  value: string[]
  checkedStrategy?: CheckedStrategy
  checkStrictly?: boolean
}

/**
 * 树状数据工具包
 *
 * @param tree 输入的树
 * @param value 选中的值
 * @param getNodeValue 树节点 value 获取方法
 * @param checkedStrategy 勾选策略（默认为 parent)
 * @param checkStrictly  是否为严格模式，为 true 时表示父子节点状态不关联；默认为 false
 * */
export default function makeTreeDataHelper<N extends AbstractTreeNode>({
  tree,
  value,
  getNodeValue,
  checkedStrategy = 'parent',
  checkStrictly = false,
}: MakeTreeDataHelperParams<N>) {
  const { wrapperMap, rootWrapper } = _calculateWrapperTree(tree, getNodeValue, value)

  function isChecked(nodeValue: string) {
    const wrapper = wrapperMap.get(nodeValue)
    return checkStrictly ? wrapper.exactChecked : wrapper.checked
  }

  function isIndeterminate(nodeValue: string) {
    if (checkStrictly) {
      return false
    }
    const wrapper = wrapperMap.get(nodeValue)
    return !wrapper.checked && wrapper.anyDescendentsChecked
  }

  function getValueAfterCheckAll() {
    if (checkStrictly) {
      return collectAllValue(rootWrapper.children)
    }

    const nextValue = rootWrapper.children.map((wrapper) => getNodeValue(wrapper.node))
    return _getCleanValue(tree, getNodeValue, nextValue, checkedStrategy)

    function collectAllValue(wrappers: Wrapper<N>[]) {
      const result: string[] = []
      dfs(wrappers)
      return result

      function dfs(wrappers: Wrapper<N>[]) {
        for (const wrapper of wrappers) {
          result.push(getNodeValue(wrapper.node))
          if (!isLeafNode(wrapper)) {
            dfs(wrapper.children)
          }
        }
      }
    }
  }

  function getValueAfterUncheckAll(): string[] {
    return []
  }

  function getValueAfterCheck(nodeValue: string) {
    if (isChecked(nodeValue)) {
      return value
    }
    return getValueAfterToggle(nodeValue)
  }

  function getValueAfterUncheck(nodeValue: string) {
    if (!isChecked(nodeValue)) {
      return value
    }
    return getValueAfterToggle(nodeValue)
  }

  function getValueAfterToggle(nodeValue: string) {
    const node = wrapperMap.get(nodeValue).node
    if (checkStrictly) {
      // 直接将 node.value 添加到原来的数组，或是直接从原来的数组移除 node.value
      return isChecked(nodeValue) ? value.filter((v) => v !== nodeValue) : value.concat([nodeValue])
    }

    let nextValue = value
    const wrapper = wrapperMap.get(getNodeValue(node))
    if (wrapper.checked) {
      let current = wrapper
      while (current.anyAncestorsChecked) {
        // 添加 wrapper 的 siblings
        const siblings = current.parent.children.filter((sibling) => sibling !== wrapper && !sibling.exactChecked)
        nextValue = nextValue.concat(siblings.map((wrapper) => getNodeValue(wrapper.node)))
        current = current.parent
      }

      // 移除 wrapper 以及 wrapper 子孙节点中 exactChecked node 的 value
      const removeSet = _collectValueWhenUncheck(wrapper)
      nextValue = nextValue.filter((v) => !removeSet.has(v))
    } else {
      nextValue = nextValue.concat([getNodeValue(node)])
    }

    // 因为 checkedStrategy 的存在，nextValue 在这里可能包含了多余的元素
    const cleanValue = _getCleanValue(tree, getNodeValue, nextValue, checkedStrategy)

    // cleanValue 中的元素顺序可能与原先差异较大，调用 stabilizeArray 调整 cleanValue 中的元素顺序
    return stabilizeArray(value, cleanValue)
  }

  function _collectValueWhenUncheck(startWrapper: Wrapper<N>) {
    const set = new Set()

    let wrapper = startWrapper
    while (wrapper.anyAncestorsChecked) {
      wrapper = wrapper.parent
      set.add(getNodeValue(wrapper.node))
    }

    dfs(startWrapper)

    return set

    function dfs(wrapper: Wrapper<N>) {
      if (wrapper.checked) {
        set.add(getNodeValue(wrapper.node))
      }
      if (!isLeafNode(wrapper) && wrapper.anyDescendentsChecked) {
        wrapper.children.forEach(dfs)
      }
    }
  }

  function getWrapper(nodeValue: string) {
    return wrapperMap.get(nodeValue)
  }

  function getNode(nodeValue: string) {
    return wrapperMap.get(nodeValue)?.node
  }

  function getCleanValue() {
    return stabilizeArray(value, _getCleanValue(tree, getNodeValue, value, checkedStrategy))
  }

  return {
    isIndeterminate,
    isChecked,
    getValueAfterCheck,
    getValueAfterUncheck,
    getValueAfterToggle,
    getValueAfterCheckAll,
    getValueAfterUncheckAll,
    getWrapper,
    getNode,
    getCleanValue,
  }
}
