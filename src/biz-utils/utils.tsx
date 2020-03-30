import { isLeafNode } from '../common-utils'
import { DvtTableColumn, TableTransform, Transform } from '../interfaces'

type NormalizeAsArrayInput<T> = null | T | T[]

function normalizeAsArray(input: NormalizeAsArrayInput<DvtTableColumn>): DvtTableColumn[] {
  if (input == null) {
    return []
  } else if (Array.isArray(input)) {
    return input
  } else {
    return [input]
  }
}

export function transformColumn(
  fn: (
    field: DvtTableColumn,
    columnContext: { range: { start: number; end: number } },
  ) => NormalizeAsArrayInput<DvtTableColumn>,
): TableTransform {
  return ({ columns, dataSource }) => ({ dataSource, columns: dfs(columns, 0).result })

  function dfs(
    columns: DvtTableColumn[],
    parentStartColIndex: number,
  ): { flatColCount: number; result: DvtTableColumn[] } {
    let flatColCount = 0
    const result: DvtTableColumn[] = []

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

export function applyTransforms<T>(input: T, ...transforms: Transform<T>[]) {
  return transforms.reduce((v, fn) => fn(v), input)
}
