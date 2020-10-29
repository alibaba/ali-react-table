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

  /** 该节点是否「选中」 */
  checked?: boolean
}

export interface StrictTreeDataHelperOptions<N extends AbstractTreeNode> {
  tree: N[]
  getNodeValue(node: N): string
  value: string[]
}

export default class StrictTreeDataHelper<N extends AbstractTreeNode> {
  private readonly opts: StrictTreeDataHelperOptions<N>
  private readonly valueSet: ReadonlySet<string>

  private wrapperMap: Map<string, Wrapper<N>>
  private rootWrapper: Wrapper<N>

  constructor(opts: StrictTreeDataHelperOptions<N>) {
    this.opts = opts
    this.valueSet = new Set(opts.value)
    this.initWrapperTree()
  }

  private initWrapperTree() {
    const { getNodeValue } = this.opts

    this.rootWrapper = new Wrapper<N>({ root: true, children: [] })
    this.wrapperMap = new Map<string, Wrapper<N>>()

    const dfs = (parentWrapper: Wrapper<N>, nodes: N[]) => {
      for (const node of nodes) {
        const wrapper = new Wrapper<N>({
          parent: parentWrapper,
          node,
          checked: this.valueSet.has(getNodeValue(node)),
        })
        this.wrapperMap.set(getNodeValue(node), wrapper)
        parentWrapper.children.push(wrapper)

        if (!isLeafNode(node)) {
          wrapper.children = []
          dfs(wrapper, node.children as N[])
        }
      }
    }

    dfs(this.rootWrapper, this.opts.tree)
  }

  private get value() {
    return this.opts.value
  }

  public isIndeterminate(nodeValue: string) {
    return false
  }

  public isChecked(nodeValue: string) {
    return this.valueSet.has(nodeValue)
  }

  public getValueAfterCheck(nodeValue: string) {
    if (!this.isChecked(nodeValue)) {
      return arrayUtils.merge(this.value, [nodeValue])
    }
    return this.value
  }

  public getValueAfterUncheck(nodeValue: string) {
    if (this.isChecked(nodeValue)) {
      return arrayUtils.diff(this.value, [nodeValue])
    }
    return this.value
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
    return this.value
  }
}
