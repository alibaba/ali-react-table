import { AbstractTreeNode } from '../interfaces'
import isLeafNode from './isLeafNode'

/** 获取一棵树的高度/深度 (0-based) */
export default function getTreeDepth(nodes: AbstractTreeNode[]) {
  let maxDepth = -1
  dfs(nodes, 0)
  return maxDepth

  function dfs(columns: AbstractTreeNode[], depth: number) {
    for (const column of columns) {
      if (isLeafNode(column)) {
        maxDepth = Math.max(maxDepth, depth)
      } else {
        dfs(column.children, depth + 1)
      }
    }
  }
}
