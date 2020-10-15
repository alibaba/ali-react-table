import { AbstractTreeNode } from '../interfaces'
import isLeafNode from './isLeafNode'

type RecursiveFlatMapInfo<T> = {
  startIndex: number
  endIndex: number
  path: T[]
  isLeaf: boolean
}

export default function makeRecursiveMapper<T extends AbstractTreeNode>(
  fn: (node: T, info: RecursiveFlatMapInfo<T>) => null | T | T[],
) {
  return (tree: T[]) => {
    return dfs(tree, 0, []).result

    function dfs(nodes: T[], parentStartIndex: number, path: T[]): { flatCount: number; result: T[] } {
      let flatCount = 0
      const result: T[] = []

      for (const node of nodes) {
        path.push(node)

        const startIndex = parentStartIndex + flatCount

        let subResult
        if (isLeafNode(node)) {
          subResult = fn(node, {
            startIndex,
            endIndex: startIndex + 1,
            path: path.slice(),
            isLeaf: true,
          })
          flatCount += 1
        } else {
          const dfsResult = dfs(node.children as T[], startIndex, path)
          subResult = fn(
            { ...node, children: dfsResult.result },
            { startIndex, endIndex: startIndex + dfsResult.flatCount, path: path.slice(), isLeaf: false },
          )
          flatCount += dfsResult.flatCount
        }

        if (Array.isArray(subResult)) {
          result.push(...subResult)
        } else if (subResult != null) {
          result.push(subResult)
        }

        path.pop()
      }

      return { result, flatCount }
    }
  }
}
