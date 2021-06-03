import { groupBy2 } from '../../utils'
import { always } from '../../utils/others'
import { DrillNode } from './interfaces'
import simpleEncode from './simpleEncode'

export interface BuildDrillTreeOptions<T extends DrillNode> {
  /** 是否生成顶层的「总计」节点，默认不生成 */
  includeTopWrapper?: boolean

  /** 生成顶层节点时，顶层节点内的文本值，默认为「总计」 */
  totalValue?: string

  /** 自定义的编码函数，用于根据下钻的值序列生成唯一的字符串.
   * 该参数留空 表示使用默认的编码方式 */
  encode?(path: string[]): string

  /** 判断一个节点是否展开，没有展开的节点将不进行下钻 */
  isExpand?(key: string): boolean

  /** 是否强制展开总计节点，默认为 true */
  enforceExpandTotalNode?: boolean
}

/** 根据指定的 code 序列计算下钻树 */
export default function buildDrillTree(
  data: any[],
  codes: string[],
  {
    encode = simpleEncode,
    totalValue = '总计',
    includeTopWrapper = false,
    isExpand = always(true),
    enforceExpandTotalNode = true,
  }: BuildDrillTreeOptions<DrillNode> = {},
): DrillNode[] {
  const emptyPath: string[] = []
  const totalKey = encode(emptyPath)

  let array: DrillNode[]
  let hasChild = false

  if (codes.length === 0) {
    array = []
  } else if (!enforceExpandTotalNode && !isExpand(totalKey)) {
    array = []
    hasChild = data.length > 0
  } else {
    array = dfs(data, [])
  }

  if (includeTopWrapper) {
    const rootNode: DrillNode = {
      key: totalKey,
      value: totalValue,
      path: emptyPath,
      children: array,
    }
    if (hasChild) {
      rootNode.hasChild = hasChild
    }
    return [rootNode]
  }

  if (includeTopWrapper) {
    return [
      {
        key: totalKey,
        value: totalValue,
        path: emptyPath,
        children: array,
      },
    ]
  }

  return array

  function dfs(slice: any[], path: string[]): DrillNode[] {
    const depth = path.length
    const array: DrillNode[] = []
    const code = codes[depth]
    const groups = groupBy2(slice, (row) => row[code])
    for (const groupKey of groups.keys()) {
      path.push(groupKey)

      const node: DrillNode = {
        key: encode(path),
        value: groupKey,
        path: path.slice(),
      }
      array.push(node)

      const group = groups.get(groupKey)
      if (group.length > 0 && depth < codes.length - 1) {
        if (isExpand(node.key)) {
          node.children = dfs(group, path)
        } else {
          node.hasChild = true
        }
      }

      path.pop()
    }

    return array
  }
}
