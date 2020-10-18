import { VerticalRenderRange } from '../interfaces'
import { OVERSCAN_SIZE, sum } from '../utils'

export function getFullRenderRange(rowCount: number): VerticalRenderRange {
  return {
    topIndex: 0,
    topBlank: 0,
    bottomIndex: rowCount,
    bottomBlank: 0,
  }
}

export function makeRowHeightManager(initRowCount: number, estimatedRowHeight: number) {
  const cache = new Array<number>(initRowCount).fill(estimatedRowHeight)

  function getRenderRange(offset: number, maxRenderHeight: number, rowCount: number) {
    if (cache.length !== rowCount) {
      setRowCount(rowCount)
    }

    if (maxRenderHeight <= 0) {
      // maxRenderHeight <= 0 说明表格目前在 viewport 之外
      if (offset <= 0) {
        // 表格在 viewport 下方
        return getRenderRangeWhenBelowView()
      } else {
        // 表格在 viewport 上方
        return getRenderRangeWhenAboveView()
      }
    } else {
      // 表格与 viewport 相交
      return getRenderRangeWhenInView()
    }

    function getRenderRangeWhenBelowView(): VerticalRenderRange {
      const start = { topIndex: 0, topBlank: 0 }
      const end = getEnd(0, start)
      return { ...start, ...end }
    }

    function getRenderRangeWhenAboveView(): VerticalRenderRange {
      const totalSize = getEstimatedTotalSize(rowCount)
      const start = getStart(totalSize)
      const end = getEnd(totalSize, start)
      return { ...start, ...end }
    }

    function getRenderRangeWhenInView(): VerticalRenderRange {
      const start = getStart(offset)
      const end = getEnd(offset + maxRenderHeight, start)
      return { ...start, ...end }
    }

    /** 获取虚拟滚动在 开始位置上的信息 */
    function getStart(offset: number) {
      if (cache.length === 0) {
        return { topIndex: 0, topBlank: 0 }
      }

      let topIndex = 0
      let topBlank = 0
      while (topIndex < cache.length) {
        const h = cache[topIndex]
        if (topBlank + h >= offset) {
          break
        }
        topBlank += h
        topIndex += 1
      }
      return overscanUpwards(topIndex, topBlank)
    }

    function overscanUpwards(topIndex: number, topBlank: number) {
      let overscanSize = 0
      let overscanCount = 0
      while (overscanCount < topIndex && overscanSize < OVERSCAN_SIZE) {
        overscanCount += 1
        overscanSize += cache[topIndex - overscanCount]
      }
      return {
        topIndex: topIndex - overscanCount,
        topBlank: topBlank - overscanSize,
      }
    }

    /** 获取虚拟滚动 在结束位置上的信息 */
    function getEnd(endOffset: number, startInfo: Pick<VerticalRenderRange, 'topIndex' | 'topBlank'>) {
      let bottomIndex = startInfo.topIndex
      let offset = startInfo.topBlank
      while (bottomIndex < rowCount && offset < endOffset) {
        offset += cache[bottomIndex]
        bottomIndex += 1
      }
      const bottomBlank = getEstimatedTotalSize(rowCount) - offset
      return overscanDownwards(bottomIndex, bottomBlank)
    }

    function overscanDownwards(bottomIndex: number, bottomBlank: number) {
      let overscanSize = 0
      let overscanCount = 0
      while (overscanCount < rowCount - bottomIndex && overscanSize < OVERSCAN_SIZE) {
        overscanSize += cache[bottomIndex + overscanCount]
        overscanCount += 1
      }
      return {
        bottomIndex: bottomIndex + overscanCount,
        bottomBlank: bottomBlank - overscanSize,
      }
    }

    function getEstimatedTotalSize(rowCount: number) {
      return sum(cache) + (rowCount - cache.length) * estimatedRowHeight
    }

    function setRowCount(count: number) {
      // 将 cache 的长度设置为 count
      if (count < cache.length) {
        cache.length = count
      } else {
        const prevSize = cache.length
        cache.length = count
        cache.fill(estimatedRowHeight, prevSize)
      }
    }
  }

  function updateRow(index: number, offset: number, size: number) {
    cache[index] = size
  }

  return {
    getRenderRange,
    updateRow,
    // 导出 cache，方便调试；上层在实际使用时 并不需要使用 cache 字段
    cache,
  }
}
