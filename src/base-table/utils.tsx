import React from 'react'
import { asyncScheduler, BehaviorSubject, defer, fromEvent, merge } from 'rxjs'
import { map, mapTo, scan, throttleTime } from 'rxjs/operators'
import * as styledComponents from 'styled-components'
import { TRNodeList } from './interfaces'

/** styled-components 类库的版本，ali-react-table 同时支持 v3 和 v5 */
export const STYLED_VERSION = (styledComponents as any).createGlobalStyle != null ? 'v5' : 'v3'

export const STYLED_REF_PROP = STYLED_VERSION === 'v3' ? 'innerRef' : 'ref'

export const OVERSCAN_SIZE = 100

export const LOADING_ICON_SIZE = 40

export const AUTO_VIRTUAL_THRESHOLD = 80

export function sum(arr: number[]) {
  let result = 0
  arr.forEach((x) => {
    result += x
  })
  return result
}

export function batchAdjustLeftCellSizes(leftTableRows: TRNodeList, mainTableRows: TRNodeList) {
  const leftRowCount = leftTableRows.length

  // 批量获取 left-section 中每个单元格在 main-section 中对应单元格的尺寸
  const sizes: Array<{ h: number; w: number }> = []
  for (let i = 0; i < leftRowCount; i++) {
    const leftRow = leftTableRows.item(i) as HTMLTableRowElement
    const leftCellCount = leftRow.cells.length
    const mainRow = mainTableRows.item(i) as HTMLTableRowElement
    for (let j = 0; j < leftCellCount; j++) {
      const cell = mainRow.cells.item(j)
      sizes.push({ h: cell.offsetHeight, w: cell.offsetWidth })
    }
  }
  // 批量设置 left-section 中的单元格的尺寸
  let n = 0
  for (let i = 0; i < leftRowCount; i++) {
    const leftRow = leftTableRows.item(i) as HTMLTableRowElement
    const cellCount = leftRow.cells.length
    for (let j = 0; j < cellCount; j++) {
      const cell = leftRow.cells.item(j)
      const size = sizes[n]
      n += 1
      cell.style.width = `${size.w}px`
      cell.style.height = `${size.h}px`
    }
  }
}

export function batchAdjustRightCellSizes(rightTableRows: TRNodeList, mainTableRows: TRNodeList) {
  const rightRowCount = rightTableRows.length

  // 批量获取 right-section 中每个单元格在 main-section 中对应单元格的尺寸
  // 获取尺寸时注意 right-section/main-section 是"靠右对齐"
  // 古下面代码中是"从右往左"迭代 main-section 中的单元格的
  const sizes: Array<{ h: number; w: number }> = []
  for (let i = 0; i < rightRowCount; i++) {
    const rightRow = rightTableRows.item(i) as HTMLTableRowElement
    const rightCellCount = rightRow.cells.length
    const mainRow = mainTableRows.item(i) as HTMLTableRowElement
    const mainCellCount = mainRow.cells.length
    for (let j = 0; j < rightCellCount; j++) {
      const mainCell = mainRow.cells.item(mainCellCount - 1 - j)
      sizes.push({ h: mainCell.offsetHeight, w: mainCell.offsetWidth })
    }
  }

  // 批量设置 right-section 中的单元格的尺寸
  let n = 0
  for (let i = 0; i < rightRowCount; i++) {
    const rightRow = rightTableRows.item(i) as HTMLTableRowElement
    const rightCellCount = rightRow.cells.length
    for (let j = 0; j < rightCellCount; j++) {
      // 从右往左设置单元格尺寸
      const rightCell = rightRow.cells.item(rightCellCount - 1 - j)
      const size = sizes[n]
      n += 1
      rightCell.style.width = `${size.w}px`
      rightCell.style.height = `${size.h}px`
    }
  }
}

// 使用 defer 避免过早引用 window，导致在 SSR 场景下报错
export const throttledWindowResize$ = defer(() =>
  fromEvent(window, 'resize').pipe(throttleTime(150, asyncScheduler, { leading: true, trailing: true })),
)

/** 获取默认的滚动条大小 */
function getScrollbarSizeImpl() {
  const scrollDiv = document.createElement('div')

  scrollDiv.style.position = 'absolute'
  scrollDiv.style.width = '100px'
  scrollDiv.style.height = '100px'
  scrollDiv.style.overflow = 'scroll'
  scrollDiv.style.top = '-9999px'

  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  const scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight
  document.body.removeChild(scrollDiv)

  return { width: scrollbarWidth, height: scrollbarHeight }
}

let scrollBarSize$: BehaviorSubject<{ width: number; height: number }>

export function getScrollbarSize() {
  if (scrollBarSize$ == null) {
    scrollBarSize$ = new BehaviorSubject(getScrollbarSizeImpl())
    throttledWindowResize$.pipe(map(() => getScrollbarSizeImpl())).subscribe(scrollBarSize$)
  }

  return scrollBarSize$.value
}

/** 同步两个元素之间的 scrollLeft
 *  在 x.onScroll 中设置 y.scrollLeft 将会触发 y.onScroll (反之亦然)
 *  为了避免相互调用，在设置 scrollLeft 该方法会用 .skip 记录接下来需要忽略的 scroll 事件
 */
export function syncScrollLeft(x: HTMLDivElement, y: HTMLDivElement) {
  type ScrollTarget = 'x' | 'y'
  type ScrollSkipState = { skip: ScrollTarget; fire: boolean; target: ScrollTarget }
  const otherScrollTarget = (target: ScrollTarget): ScrollTarget => {
    return target === 'x' ? 'y' : 'x'
  }
  const scrollSkipState$ = merge(
    fromEvent(x, 'scroll').pipe(mapTo('x' as ScrollTarget)),
    fromEvent(y, 'scroll').pipe(mapTo('y' as ScrollTarget)),
  ).pipe(
    scan<ScrollTarget, ScrollSkipState>(
      (acc, target) => {
        if (acc.skip === target) {
          return { skip: null, fire: false, target }
        } else {
          return { skip: otherScrollTarget(target), fire: true, target }
        }
      },
      { skip: null, fire: false, target: null },
    ),
  )

  return scrollSkipState$.subscribe(({ fire, target }) => {
    if (fire) {
      if (target === 'x') {
        y.scrollLeft = x.scrollLeft
      } else {
        x.scrollLeft = y.scrollLeft
      }
    }
  })
}

export function query<T extends Element = HTMLDivElement>(elem: HTMLDivElement, className: string) {
  return elem?.querySelector('.' + className) as T
}

export function queryAll<T extends Element = HTMLDivElement>(elem: HTMLDivElement, className: string) {
  return elem?.querySelectorAll('.' + className) as NodeListOf<T>
}
