import { AbstractTreeNode } from '../interfaces'
import isLeafNode from './isLeafNode'

/** 遍历所有节点，并将节点收集到一个数组中.
 * order 参数可用于指定遍历规则：
 * * `pre` 前序遍历 （默认）
 * * `post` 后续遍历
 * * `leaf-only` 忽略内部节点，只收集叶子节点
 * */
export default function collectNodes<T extends AbstractTreeNode>(
  nodes: T[],
  order: 'pre' | 'post' | 'leaf-only' = 'pre',
) {
  const result: T[] = []
  dfs(nodes)
  return result

  function dfs(nodes: T[]) {
    if (nodes == null) {
      return
    }
    for (const node of nodes) {
      if (isLeafNode(node)) {
        result.push(node)
      } else {
        if (order === 'pre') {
          result.push(node)
          dfs(node.children as T[])
        } else if (order === 'post') {
          dfs(node.children as T[])
          result.push(node)
        } else {
          dfs(node.children as T[])
        }
      }
    }
  }
}
