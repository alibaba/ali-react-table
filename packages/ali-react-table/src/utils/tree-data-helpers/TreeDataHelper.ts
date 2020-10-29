import { AbstractTreeNode } from '../../interfaces'
import isLeafNode from '../isLeafNode'
import { arrayUtils } from '../others'

class Wrapper<N extends AbstractTreeNode> {
  constructor(input?: Partial<Wrapper<N>>) {
    Object.assign(this, input)
  }

  /** 是否为根节点 */
  root?: boolean

  /** 子节点数组 */
  children?: Wrapper<N>[]

  /** 父节点 (parent wrapper node) */
  parent?: Wrapper<N>

  /** 指向对应的普通节点 */
  node: N

  /** 是否与其父节点脱离关联 */
  detached?: boolean

  /** 是否「选中」 */
  checked?: boolean

  /** 该节点是否「恰好选中」 (即节点的值是否在 value 数组中） */
  exactChecked?: boolean

  /** 父节点是否被选中 */
  parentChecked?: boolean

  /** 是否有任意子孙节点被选中 */
  anyDescendentsChecked?: boolean

  /** 该节点的所有子孙节点是否均为选中 */
  allChildrenChecked?: boolean
}

export type CheckedStrategy = 'all' | 'parent' | 'child'

export interface TreeDataHelperOptions<N extends AbstractTreeNode> {
  tree: N[]
  getNodeValue(node: N): string
  value: string[]
  checkedStrategy: CheckedStrategy
  isDetached?(node: N): boolean
}

export default class TreeDataHelper<N extends AbstractTreeNode> {
  private readonly opts: TreeDataHelperOptions<N>
  private readonly valueSet: ReadonlySet<string>

  private wrapperMap: Map<string, Wrapper<N>>
  private rootWrapper: Wrapper<N>

  constructor(opts: TreeDataHelperOptions<N>) {
    this.opts = opts
    this.valueSet = new Set(opts.value)
    this.initWrapperTree()
  }

  private get value() {
    return this.opts.value
  }

  private isDetached = (node: N) => {
    return this.opts.isDetached?.(node) ?? false
  }

  private initWrapperTree() {
    const valueSet = new Set(this.value)
    this.rootWrapper = new Wrapper<N>({ root: true, children: [] })
    this.wrapperMap = new Map<string, Wrapper<N>>()

    const getNodeValue = this.opts.getNodeValue
    const { isDetached, wrapperMap } = this

    dfs(this.rootWrapper, this.opts.tree, false)

    function dfs(parentWrapper: Wrapper<N>, nodes: N[], inheritParentChecked: boolean) {
      // allChildrenChecked 先默认设置为 true
      // dfs 过程中可能会更新 allChildrenChecked
      parentWrapper.allChildrenChecked = true
      if (process.env.NODE_ENV !== 'production') {
        if (nodes.every(isDetached)) {
          console.warn(
            'TreeDataHelper 检测到部分节点的下所有子节点均为 detached 状态，这将导致该节点变为「无效节点」',
            parentWrapper.node,
          )
        }
      }

      for (const node of nodes) {
        const detached = isDetached(node)

        const exactChecked = valueSet.has(getNodeValue(node))
        if (exactChecked && !detached) {
          parentWrapper.anyDescendentsChecked = true
        }

        const parentChecked = !detached && inheritParentChecked
        const checked = exactChecked || parentChecked
        const wrapper = new Wrapper<N>({
          parent: parentWrapper,
          node,
          checked,
          exactChecked,
          parentChecked,
          anyDescendentsChecked: checked,
          detached,
        })
        wrapperMap.set(getNodeValue(node), wrapper)
        parentWrapper.children.push(wrapper)

        if (!isLeafNode(node)) {
          wrapper.children = []

          dfs(wrapper, node.children as N[], checked)

          if (wrapper.anyDescendentsChecked && !detached) {
            parentWrapper.anyDescendentsChecked = true
          }
          if (wrapper.allChildrenChecked) {
            wrapper.checked = true
            // 当一个节点因为「子节点被全选」而变为 checked 时，我们需要更新子节点的 parentChecked 字段
            for (const child of wrapper.children) {
              if (!child.detached) {
                child.parentChecked = true
              }
            }
          }
        }
        if (!wrapper.checked && !detached) {
          parentWrapper.allChildrenChecked = false
        }
      }
    }
  }

  public isIndeterminate(nodeValue: string) {
    const wrapper = this.wrapperMap.get(nodeValue)
    return !wrapper.checked && wrapper.anyDescendentsChecked
  }

  public isChecked(nodeValue: string) {
    const wrapper = this.wrapperMap.get(nodeValue)
    return wrapper.checked
  }

  public getValueAfterCheck(nodeValue: string) {
    if (this.isChecked(nodeValue)) {
      return this.getCleanValue()
    }
    const nextValue = arrayUtils.merge(this.value, [nodeValue])
    return new TreeDataHelper({ ...this.opts, value: nextValue }).getCleanValue()
  }

  public getValueAfterUncheck(nodeValue: string) {
    if (!this.isChecked(nodeValue)) {
      return this.getCleanValue()
    }

    const wrapper = this.wrapperMap.get(nodeValue)
    const { getNodeValue } = this.opts

    const appendArray = getAppendArray(wrapper)
    const removeSet = getRemoveSet(wrapper)

    const nextValue = arrayUtils.diff(this.value.concat(appendArray), removeSet)

    return new TreeDataHelper({ ...this.opts, value: nextValue }).getCleanValue()

    function getAppendArray(startWrapper: Wrapper<N>) {
      let result: string[] = []

      let current = startWrapper
      while (current.parentChecked && !current.detached) {
        for (const sibling of current.parent.children) {
          if (sibling === current || sibling.exactChecked || sibling.detached) {
            continue
          }
          result.push(getNodeValue(sibling.node))
        }
        current = current.parent
      }

      return result
    }

    function getRemoveSet(startWrapper: Wrapper<N>) {
      const result = new Set<string>()

      let wrapper = startWrapper
      // 不断向上收集选中的父节点
      while (true) {
        result.add(getNodeValue(wrapper.node))
        if (wrapper.detached || !wrapper.parentChecked) {
          break
        }
        wrapper = wrapper.parent
      }

      function dfs(wrappers: Wrapper<N>[]) {
        if (wrappers == null) {
          return
        }
        for (const wrapper of wrappers) {
          if (wrapper.detached || !wrapper.checked) {
            continue
          }
          result.add(getNodeValue(wrapper.node))
          if (!isLeafNode(wrapper) && wrapper.anyDescendentsChecked) {
            dfs(wrapper.children)
          }
        }
      }
      // 收集所有的子孙节点
      dfs(startWrapper.children)

      return result
    }
  }

  public getValueAfterToggle(nodeValue: string) {
    if (this.isChecked(nodeValue)) {
      return this.getValueAfterUncheck(nodeValue)
    } else {
      return this.getValueAfterCheck(nodeValue)
    }
  }

  public getNode(nodeValue: string) {
    return this.wrapperMap.get(nodeValue)?.node
  }

  public getCleanValue() {
    const { checkedStrategy, getNodeValue } = this.opts

    const result = this.value.filter((nodeValue) => {
      return !this.wrapperMap.has(nodeValue)
    })

    dfs(this.rootWrapper.children)

    return result

    function dfs(wrappers: Wrapper<N>[]) {
      for (const wrapper of wrappers) {
        if (wrapper.checked) {
          if (checkedStrategy === 'all') {
            result.push(getNodeValue(wrapper.node))
          } else if (checkedStrategy === 'parent') {
            if (!wrapper.parentChecked) {
              result.push(getNodeValue(wrapper.node))
            }
          } else {
            // checkedStrategy === 'child'
            if (isLeafNode(wrapper)) {
              result.push(getNodeValue(wrapper.node))
            }
          }
        }
        if (!isLeafNode(wrapper)) {
          dfs(wrapper.children)
        }
      }
    }
  }
}
