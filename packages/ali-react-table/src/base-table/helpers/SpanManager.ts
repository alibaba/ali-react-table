import { SpanRect } from '../../interfaces'

/** 在表格的单元格的渲染过程中，先渲染的单元格的 colSpan/rowSpan 会影响到后续单元格是否被渲染
 * `SpanManager` 会在内部维护一份状态来记录最近渲染单元格的 colSpan/rowSpan，
 * 方便后续的单元格快速判断 "是否需要跳过渲染" */
export default class SpanManager {
  private rects: SpanRect[] = []

  public testSkip(rowIndex: number, colIndex: number) {
    return this.rects.some(
      ({ left, right, top, bottom }) =>
        left <= colIndex && colIndex < right && top <= rowIndex && rowIndex < bottom,
    )
  }

  public stripUpwards(rowIndex: number) {
    this.rects = this.rects.filter(rect => rect.bottom > rowIndex)
  }

  public add(rowIndex: number, colIndex: number, colSpan: number, rowSpan: number) {
    this.rects.push({
      left: colIndex,
      right: colIndex + colSpan,
      top: rowIndex,
      bottom: rowIndex + rowSpan,
    })
  }
}
