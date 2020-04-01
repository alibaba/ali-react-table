import { isLeafNode } from '../../common-utils'
import { ArtColumn } from '../../interfaces'
import { TableTransform } from '../interfaces'

type NormalizeAsArrayInput<T> = null | T | T[]

function normalizeAsArray(input: NormalizeAsArrayInput<ArtColumn>): ArtColumn[] {
  if (input == null) {
    return []
  } else if (Array.isArray(input)) {
    return input
  } else {
    return [input]
  }
}

export default function transformColumn(
  fn: (field: ArtColumn, columnContext: { range: { start: number; end: number } }) => NormalizeAsArrayInput<ArtColumn>,
): TableTransform {
  return ({ columns, dataSource }) => ({ dataSource, columns: dfs(columns, 0).result })

  function dfs(columns: ArtColumn[], parentStartColIndex: number): { flatColCount: number; result: ArtColumn[] } {
    let flatColCount = 0
    const result: ArtColumn[] = []

    for (const col of columns) {
      const startColIndex = parentStartColIndex + flatColCount

      let unNormalized
      if (isLeafNode(col)) {
        unNormalized = fn(col, { range: { start: startColIndex, end: startColIndex + 1 } })
        flatColCount += 1
      } else {
        const dfsResult = dfs(col.children, startColIndex)
        unNormalized = fn(
          {
            ...col,
            children: dfsResult.result,
          },
          {
            range: {
              start: startColIndex,
              end: startColIndex + dfsResult.flatColCount,
            },
          },
        )
        flatColCount += dfsResult.flatColCount
      }
      result.push(...normalizeAsArray(unNormalized))
    }

    return { result, flatColCount }
  }
}
