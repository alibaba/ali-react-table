import { ArtColumn } from '../interfaces'
import { collectNodes, isLeafNode } from '../utils'
import {
  HorizontalRenderRange,
  RenderInfo,
  ResolvedUseVirtual,
  VirtualEnum,
  VisibleColumnDescriptor,
} from './interfaces'
import { BaseTableProps } from './table'
import { AUTO_VIRTUAL_THRESHOLD, OVERSCAN_SIZE, sum } from './utils'

function resolveVirtualEnabled(virtualEnum: VirtualEnum, defaultValue: boolean) {
  if (virtualEnum == null || virtualEnum === 'auto') {
    return defaultValue
  }
  return virtualEnum
}

let lockColumnNeedSpecifiedWidthWarned = false
function warnLockColumnNeedSpecifiedWidth(column: ArtColumn) {
  if (!lockColumnNeedSpecifiedWidthWarned) {
    lockColumnNeedSpecifiedWidthWarned = true
    console.warn('[ali-react-table] lock=true 的列需要指定宽度', column)
  }
}

let columnHiddenDeprecatedWarned = false
function warnColumnHiddenDeprecated(column: ArtColumn) {
  if (!columnHiddenDeprecatedWarned) {
    columnHiddenDeprecatedWarned = true
    console.warn('[ali-react-table] column.hidden 已经过时，如果需要隐藏该列，请将其从 columns 数组中移除', column)
  }
}

/** 检查列配置 & 设置默认宽度 & 剔除隐藏的列 */
function processColumns(columns: ArtColumn[], defaultColumnWidth: number) {
  if (columns == null || !Array.isArray(columns)) {
    console.warn('[ali-react-table] <BaseTable /> props.columns 需要传入一个数组', columns)
    columns = []
  }

  function dfs(columns: ArtColumn[]): ArtColumn[] {
    const result: ArtColumn[] = []

    for (let column of columns) {
      if (column.width == null) {
        if (defaultColumnWidth != null) {
          column = { ...column, width: defaultColumnWidth }
        } else if (process.env.NODE_ENV !== 'production' && isLeafNode(column) && column.lock) {
          warnLockColumnNeedSpecifiedWidth(column)
        }
      }

      if (isLeafNode(column)) {
        if (column.hidden) {
          // 被隐藏的列 会在这里被剔除
          warnColumnHiddenDeprecated(column)
        } else {
          result.push(column)
        }
      } else {
        const nextChildren = dfs(column.children)
        // 如果 nextChildren 为空，说明所有的子节点均被隐藏了，在这里隐藏父节点
        if (nextChildren.length > 0) {
          result.push({ ...column, children: nextChildren })
        }
      }
    }
    return result
  }

  return dfs(columns)
}

function getLeftNestedLockCount(columns: ArtColumn[]) {
  let nestedCount = 0

  for (const col of columns) {
    if (isLock(col)) {
      nestedCount += 1
    } else {
      break
    }
  }
  return nestedCount

  function isLock(col: ArtColumn): boolean {
    if (isLeafNode(col)) {
      return col.lock
    } else {
      return col.lock || col.children.some(isLock)
    }
  }
}

export function calculateFlatAndNestedColumnsAndResolveUseVirtual(props: Readonly<BaseTableProps>) {
  const { useVirtual: useVirtualProp, columns: columnsProp, dataSource: dataSourceProp, defaultColumnWidth } = props

  const columns = processColumns(columnsProp, defaultColumnWidth)

  const leftNestedLockCount = getLeftNestedLockCount(columns)

  const fullFlat = collectNodes(columns, 'leaf-only')

  if (leftNestedLockCount === columns.length) {
    // 处理所有的列均为 lock
    return {
      flat: { left: [], right: [], full: fullFlat, center: fullFlat },
      nested: { left: [], right: [], full: columns, center: columns },
      useVirtual: { horizontal: false, vertical: false, header: false },
    }
  }

  const leftNested = columns.slice(0, leftNestedLockCount)
  const rightNestedLockCount = getLeftNestedLockCount(columns.slice().reverse())
  const centerNested = columns.slice(leftNestedLockCount, columns.length - rightNestedLockCount)
  const rightNested = columns.slice(columns.length - rightNestedLockCount)

  const shouldEnableHozVirtual = fullFlat.length >= AUTO_VIRTUAL_THRESHOLD && fullFlat.every((col) => col.width != null)
  const shouldEnableVerVirtual = dataSourceProp.length >= AUTO_VIRTUAL_THRESHOLD

  const useVirtual =
    typeof useVirtualProp !== 'object'
      ? {
          horizontal: resolveVirtualEnabled(useVirtualProp, shouldEnableHozVirtual),
          vertical: resolveVirtualEnabled(useVirtualProp, shouldEnableVerVirtual),
          header: resolveVirtualEnabled(useVirtualProp, false),
        }
      : {
          horizontal: resolveVirtualEnabled(useVirtualProp.horizontal, shouldEnableHozVirtual),
          vertical: resolveVirtualEnabled(useVirtualProp.vertical, shouldEnableVerVirtual),
          header: resolveVirtualEnabled(useVirtualProp.header, shouldEnableVerVirtual),
        }

  const flat = {
    left: collectNodes(leftNested, 'leaf-only'),
    full: fullFlat,
    right: collectNodes(rightNested, 'leaf-only'),
    center: collectNodes(centerNested, 'leaf-only'),
  }

  return {
    flat,
    nested: {
      left: leftNested,
      full: columns,
      right: rightNested,
      center: centerNested,
    },
    useVirtual,
  }
}

export function getHorizontalRenderRange({
  offsetX,
  maxRenderWidth,
  flat,
  useVirtual,
}: {
  offsetX: number
  maxRenderWidth: number
  flat: RenderInfo['flat']
  useVirtual: ResolvedUseVirtual
}): HorizontalRenderRange {
  if (!useVirtual.horizontal) {
    return { leftIndex: 0, leftBlank: 0, rightIndex: flat.full.length, rightBlank: 0 }
  }

  let leftIndex = 0
  let centerCount = 0
  let leftBlank = 0
  let centerRenderWidth = 0

  const overscannedOffsetX = Math.max(0, offsetX - OVERSCAN_SIZE)
  while (leftIndex < flat.center.length) {
    const col = flat.center[leftIndex]
    if (col.width + leftBlank < overscannedOffsetX) {
      leftIndex += 1
      leftBlank += col.width
    } else {
      break
    }
  }

  // 考虑 over scan 之后，中间部分的列至少需要渲染的宽度
  const minCenterRenderWidth = maxRenderWidth + (overscannedOffsetX - leftBlank) + 2 * OVERSCAN_SIZE

  while (leftIndex + centerCount < flat.center.length) {
    const col = flat.center[leftIndex + centerCount]
    if (col.width + centerRenderWidth < minCenterRenderWidth) {
      centerRenderWidth += col.width
      centerCount += 1
    } else {
      break
    }
  }

  const rightBlankCount = flat.center.length - leftIndex - centerCount
  const rightBlank = sum(flat.center.slice(flat.center.length - rightBlankCount).map((col) => col.width))
  return {
    leftIndex: leftIndex,
    leftBlank,
    rightIndex: leftIndex + centerCount,
    rightBlank,
  }
}

export function getVisibleColumnDescriptors(
  flat: RenderInfo['flat'],
  horizontalRenderRange: HorizontalRenderRange,
): VisibleColumnDescriptor[] {
  const { leftBlank, leftIndex, rightBlank, rightIndex } = horizontalRenderRange
  const unfiltered: VisibleColumnDescriptor[] = [
    ...flat.left.map((col, i) => ({ type: 'normal', col, colIndex: i } as const)),
    leftBlank > 0 && { type: 'blank', blankSide: 'left', width: leftBlank },
    ...flat.center
      .slice(leftIndex, rightIndex)
      .map((col, i) => ({ type: 'normal', col, colIndex: flat.left.length + leftIndex + i } as const)),
    rightBlank > 0 && { type: 'blank', blankSide: 'right', width: rightBlank },
    ...flat.right.map(
      (col, i) => ({ type: 'normal', col, colIndex: flat.full.length - flat.right.length + i } as const),
    ),
  ]
  return unfiltered.filter((d: VisibleColumnDescriptor) => Boolean(d))
}
