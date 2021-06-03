import { groupBy2, isLeafNode } from '../../utils'
import { always, fromEntries } from '../../utils/others'
import buildDrillTree from './buildDrillTree'
import { DrillNode, RecordMatrix } from './interfaces'
import simpleEncode from './simpleEncode'

export interface BuildingCtx {
  peculiarity: Set<string>
}

export interface BuildRecordMatrixConfig {
  leftCodes: string[]
  topCodes: string[]
  data: any[]
  aggregate?(slice: any[], ctx: BuildingCtx): any
  encode?(valuePath: string[]): string
  isLeftExpand?(key: string): boolean
  isTopExpand?(key: string): boolean
  prebuiltLeftTree?: DrillNode[]
  prebuiltTopTree?: DrillNode[]
}

function fallbackAggregate(slice: any[]) {
  return slice.length === 1 ? slice[0] : {}
}

/** 根据表格左侧与上方的下钻树，从全量明细数据中计算对应的数据立方 */
export function buildRecordMatrix({
  data,
  leftCodes,
  topCodes,
  aggregate = fallbackAggregate,
  encode = simpleEncode,
  isLeftExpand = always(true),
  isTopExpand = always(true),
  prebuiltLeftTree,
  prebuiltTopTree,
}: BuildRecordMatrixConfig): RecordMatrix {
  interface TransientMatrixRow {
    leftKey: string
    children: TransientMatrixRow[]
    col: TransientMatrixCol
  }

  interface TransientMatrixCol {
    topKey: string
    children: TransientMatrixCol[]
    topValue: string
    record: any
  }

  const ctx: BuildingCtx = {
    peculiarity: new Set(),
  }

  const [leftRootDrillNode] =
    prebuiltLeftTree ??
    buildDrillTree(data, leftCodes, {
      encode,
      includeTopWrapper: true,
      isExpand: isLeftExpand,
    })
  const [topRootDrillNode] =
    prebuiltTopTree ??
    buildDrillTree(data, topCodes, {
      encode,
      includeTopWrapper: true,
      isExpand: isTopExpand,
    })

  const transientMatrixRow = buildByLeft(ctx, data, leftRootDrillNode, 0)

  return makeMatrix(transientMatrixRow)

  function buildByLeft(ctx: BuildingCtx, slice: any[], drillNode: DrillNode, depth: number): TransientMatrixRow {
    let children: TransientMatrixRow[] = null
    let col: TransientMatrixCol

    if (isLeafNode(drillNode)) {
      col = buildByTop(ctx, slice, topRootDrillNode, 0)
    } else {
      children = []
      const code = leftCodes[depth]
      const groups = groupBy2(slice, (dwdRow) => dwdRow[code])

      ctx.peculiarity.add(code)
      for (const child of drillNode.children) {
        const group = groups.get(child.value)
        if (group) {
          children.push(buildByLeft(ctx, group, child, depth + 1))
        }
      }
      ctx.peculiarity.delete(code)

      col = mergeColsByTopTree(
        ctx,
        children.map((child) => child.col),
      )
    }

    return {
      leftKey: drillNode.key,
      children,
      col,
    }
  }

  function buildByTop(ctx: BuildingCtx, slice: any[], drillNode: DrillNode, depth: number): TransientMatrixCol {
    let children: TransientMatrixCol[] = null
    let record: any

    if (isLeafNode(drillNode)) {
      record = aggregate(slice, ctx)
    } else {
      children = []
      const code = topCodes[depth]
      const groups = groupBy2(slice, (dwdRow) => dwdRow[code])
      ctx.peculiarity.add(code)
      for (const child of drillNode.children) {
        const group = groups.get(child.value)
        if (group) {
          children.push(buildByTop(ctx, group, child, depth + 1))
        }
      }
      ctx.peculiarity.delete(code)
      record = aggregate(
        children.map((child) => child.record),
        ctx,
      )
    }

    return {
      topKey: drillNode.key,
      topValue: drillNode.value,
      children,
      record,
    }
  }

  function mergeColsByTopTree(ctx: BuildingCtx, colsToMerge: TransientMatrixCol[]): TransientMatrixCol {
    return dfs(ctx, colsToMerge, topRootDrillNode, 0)

    function dfs(
      ctx: BuildingCtx,
      cols: TransientMatrixCol[],
      topDrillNode: DrillNode,
      depth: number,
    ): TransientMatrixCol {
      let children: TransientMatrixCol[] = null
      const record = aggregate(
        cols.map((c) => c.record),
        ctx,
      )

      if (!isLeafNode(topDrillNode)) {
        const topCode = topCodes[depth]
        ctx.peculiarity.add(topCode)
        const drillChildDict = fromEntries(topDrillNode.children.map((child) => [child.value, child]))
        const colChildDictArray = cols.map((col) => fromEntries(col.children.map((child) => [child.topValue, child])))
        children = topDrillNode.children.map((item) => {
          const childCols = colChildDictArray.map((colChildDict) => colChildDict[item.value]).filter(Boolean)
          return dfs(ctx, childCols, drillChildDict[item.value], depth + 1)
        })
        ctx.peculiarity.delete(topCode)
      }

      return {
        topKey: topDrillNode.key,
        topValue: topDrillNode.value,
        record,
        children,
      }
    }
  }

  function makeMatrix(rootRow: TransientMatrixRow): RecordMatrix {
    const result: RecordMatrix = new Map()
    dfsRow(result, rootRow)
    return result

    function dfsRow(matrix: RecordMatrix, row: TransientMatrixRow) {
      const subMap = new Map<string, any>()
      matrix.set(row.leftKey, subMap)
      dfsCol(subMap, row.col)

      if (!isLeafNode(row)) {
        row.children.forEach((childRow) => {
          dfsRow(matrix, childRow)
        })
      }
    }

    function dfsCol(subMap: Map<string, any>, col: TransientMatrixCol) {
      subMap.set(col.topKey, col.record)

      if (!isLeafNode(col)) {
        col.children.forEach((childCol) => {
          dfsCol(subMap, childCol)
        })
      }
    }
  }
}

/** buildRecordMatrix 的简化版本，只能处理一个维度序列，返回一个 Map。
 * 相当于只处理 matrix 的第一行（汇总行） */
export function buildRecordMap({
  codes,
  encode = simpleEncode,
  data,
  aggregate,
  isExpand,
}: {
  codes: string[]
  data: any[]
  aggregate?(slice: any[], ctx: BuildingCtx): any
  encode?(valuePath: string[]): string
  isExpand?(key: string): boolean
}): Map<string, any> {
  const matrix = buildRecordMatrix({
    data,
    leftCodes: [],
    topCodes: codes,
    isTopExpand: isExpand,
    aggregate,
    encode,
  })
  const totalKey = encode([])
  return matrix.get(totalKey)
}
