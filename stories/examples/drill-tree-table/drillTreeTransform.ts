import {
  applyTransforms,
  buildDrillTree,
  buildRecordMap,
  commonTransforms,
  createAggregateFunction,
  DrillNode,
  isLeafNode,
  simpleEncode,
  SortItem,
  SortOrder,
  TableTransform,
} from '@alife/dvt-table'

export function drillTreeTransform({
  nameProp,
  dimensions,
  indicators,
  treeMode,
  sort,
  encode = simpleEncode,
}: {
  nameProp: string
  dimensions: Array<{ code: string; name: string }>
  indicators: Array<{
    code: string
    name: string
    expression?: string
  }>
  treeMode: {
    primaryKey: string
    openKeys: string[]
    onChangeOpenKeys(nextKeys: string[]): void
    indentSize?: number
  }
  sort: {
    sorts: SortItem[]
    onChangeSorts(nextSorts: SortItem[]): void
    orders?: SortOrder[]
    mode?: 'single' | 'multiple'
  }
  encode?(path: string[]): string
}): TableTransform {
  const openKeySet = new Set(treeMode.openKeys)
  const codes = dimensions.map(dim => dim.code)
  const aggregate = createAggregateFunction(indicators)
  const isExpand = (key: string) => openKeySet.has(key)

  return input => {
    const data = input.dataSource

    const leftDrillTree = buildDrillTree(data, codes, {
      includeTopWrapper: true,
      isExpand,
      encode,
    })
    const recordMap = buildRecordMap({ data, codes, aggregate, isExpand, encode })

    const dataSource = convertDrillTreeToDataSource(leftDrillTree, recordMap)

    return applyTransforms(
      { dataSource, columns: input.columns },
      commonTransforms.sort(sort),
      commonTransforms.treeMode(treeMode),
    )
  }

  function convertDrillTreeToDataSource(drillTree: DrillNode[], recordMap: Map<string, any>): any[] {
    return dfs(drillTree)

    function dfs(nodes: DrillNode[]): any[] {
      return nodes.map(node => ({
        [treeMode.primaryKey]: node.key,
        [nameProp]: node.value,
        ...recordMap.get(node.key),
        children: isLeafNode(node) ? (node.hasChild ? [{ placeholder: true }] : null) : dfs(node.children),
      }))
    }
  }
}
