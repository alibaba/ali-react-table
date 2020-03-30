import { VerticalRenderRange } from '../interfaces'
import { OVERSCAN_SIZE } from '../utils'

export const ITEM_SIZE = 40

interface Item {
  offset: number
  size: number
}

export default class ItemSizeStore {
  private cache: Item[] = []

  public static getFullRenderRange(itemCount: number): VerticalRenderRange {
    return {
      topIndex: 0,
      topBlank: 0,
      bottomIndex: itemCount,
      bottomBlank: 0,
    }
  }

  public getRenderRangeWhenBelowView(itemCount: number): VerticalRenderRange {
    const start = { topIndex: 0, topBlank: 0 }
    const end = this.getEnd(0, start, itemCount)
    return { ...start, ...end }
  }

  public getRenderRangeWhenAboveView(itemCount: number): VerticalRenderRange {
    const totalSize = this.getEstimatedTotalSize(itemCount)
    const start = this.getStart(totalSize, itemCount)
    const end = this.getEnd(totalSize, start, itemCount)
    return { ...start, ...end }
  }

  public getRenderRangeWhenInView(offset: number, maxRenderHeight: number, itemCount: number): VerticalRenderRange {
    const start = this.getStart(offset, itemCount)
    const end = this.getEnd(offset + maxRenderHeight, start, itemCount)
    return { ...start, ...end }
  }

  private binarySearchStart(searchOffset: number) {
    let min = 0
    let max = this.cache.length - 1

    while (min < max) {
      const middle = Math.ceil((min + max) / 2)
      const middleOffset = this.cache[middle].offset
      if (middleOffset <= searchOffset) {
        min = middle
      } else {
        max = middle - 1
      }
    }
    return max
  }

  /** 获取虚拟滚动在 开始位置上的信息 */
  private getStart(offset: number, itemCount: number) {
    if (this.cache.length === 0) {
      return { topIndex: 0, topBlank: 0 }
    }

    const maxBottom = this.getMaxBottom()
    if (maxBottom < offset) {
      const lack = offset - maxBottom
      // 快速滚动时，需要限制补足数量的最大值，防止元素数量超过 itemCount
      const maxLackCount = itemCount - this.cache.length
      const lackCount = Math.min(Math.floor(lack / ITEM_SIZE), maxLackCount)

      // 中间缺失的直接使用 ITEM_SIZE 进行补足
      for (let i = 0, cntOffset = maxBottom; i < lackCount; i += 1, cntOffset += ITEM_SIZE) {
        this.cache.push({ offset: cntOffset, size: ITEM_SIZE })
      }

      const topIndex = this.cache.length - 1
      const topBlank = this.cache[topIndex].offset
      return this.overscanUpwards(topIndex, topBlank)
    } else {
      const topIndex = this.binarySearchStart(offset)
      const topBlank = this.cache[topIndex].offset
      return this.overscanUpwards(topIndex, topBlank)
    }
  }

  private overscanUpwards(topIndex: number, topBlank: number) {
    let overscanSize = 0
    let overscanCount = 0
    while (overscanCount < topIndex && overscanSize < OVERSCAN_SIZE) {
      overscanCount += 1
      overscanSize += this.getItemSize(topIndex - overscanCount)
    }
    return {
      topIndex: topIndex - overscanCount,
      topBlank: topBlank - overscanSize,
    }
  }

  /** 获取虚拟滚动 在结束位置上的信息 */
  private getEnd(endOffset: number, startInfo: Pick<VerticalRenderRange, 'topIndex' | 'topBlank'>, itemCount: number) {
    let bottomIndex = startInfo.topIndex
    let offset = startInfo.topBlank
    while (bottomIndex < itemCount && offset < endOffset) {
      offset += this.getItemSize(bottomIndex)
      bottomIndex += 1
    }
    const bottomBlank = this.getEstimatedTotalSize(itemCount) - offset
    return this.overscanDownwards(bottomIndex, bottomBlank, itemCount)
  }

  private overscanDownwards(bottomIndex: number, bottomBlank: number, itemCount: number) {
    let overscanSize = 0
    let overscanCount = 0
    while (overscanCount < itemCount - bottomIndex && overscanSize < OVERSCAN_SIZE) {
      overscanSize += this.getItemSize(bottomIndex + overscanCount)
      overscanCount += 1
    }
    return {
      bottomIndex: bottomIndex + overscanCount,
      bottomBlank: bottomBlank - overscanSize,
    }
  }

  private getItemSize(index: number) {
    return index < this.cache.length ? this.cache[index].size : ITEM_SIZE
  }

  public setMaxItemCount(itemCount: number) {
    if (itemCount < this.cache.length) {
      this.cache.length = itemCount
    }
  }

  public updateItem(index: number, offset: number, size: number) {
    this.cache[index] = { offset, size }
  }

  private getEstimatedTotalSize(itemCount: number) {
    let measuredTotalSize = 0
    let measuredCount = 0
    const size = this.cache.length
    if (size > 0) {
      const lastItem = this.cache[size - 1]
      measuredTotalSize = lastItem.offset + lastItem.size
      measuredCount = size
    }
    const unmeasuredTotalSize = (itemCount - measuredCount) * ITEM_SIZE

    return measuredTotalSize + unmeasuredTotalSize
  }

  private getMaxBottom() {
    if (this.cache.length === 0) {
      return 0
    }
    const item = this.cache[this.cache.length - 1]
    return item.offset + item.size
  }
}
