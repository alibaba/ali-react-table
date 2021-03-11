import getNodeName from '@popperjs/core/lib/dom-utils/getNodeName'
import getOffsetParent from '@popperjs/core/lib/dom-utils/getOffsetParent'
import getParentNode from '@popperjs/core/lib/dom-utils/getParentNode'
import getWindow from '@popperjs/core/lib/dom-utils/getWindow'
import getWindowScroll from '@popperjs/core/lib/dom-utils/getWindowScroll'
import { isHTMLElement } from '@popperjs/core/lib/dom-utils/instanceOf'
import isScrollParent from '@popperjs/core/lib/dom-utils/isScrollParent'
import ResizeObserver from 'resize-observer-polyfill'
import { fromEvent, merge, Observable } from 'rxjs'
import * as op from 'rxjs/operators'
import { shallowEqual } from '../utils'

function isWindow(arg: object): arg is Window {
  return arg.toString() === '[object Window]'
}

function isBody(arg: Node): arg is HTMLBodyElement {
  return getNodeName(arg) === 'body'
}

function isHtml(arg: Node): arg is HTMLHtmlElement {
  return getNodeName(arg) === 'html'
}

function isHtmlOrBody(arg: Node) {
  return isHtml(arg) || isBody(arg)
}

// 计算从 start（子元素）到 stop（祖先元素）之间所有元素的 scrollTop 或 scrollLeft 的和
// 注意 start 和 stop 都是 INCLUSIVE 的，即两者的 scrollTop 或 scrollLeft 都会统计在内
function accumulateScrollOffset(
  start: HTMLElement,
  stop: Window | HTMLElement,
  scrollOffsetKey: 'scrollLeft' | 'scrollTop',
) {
  let result = 0
  let elem = start
  while (elem != null) {
    result += elem[scrollOffsetKey]
    if (elem === stop || (isWindow(stop) && isHtmlOrBody(elem))) {
      break
    }
    elem = elem.parentElement
  }

  if (isWindow(stop)) {
    result += getWindowScroll(elem)[scrollOffsetKey]
  }
  return result
}

/**
 * 获取 target 相对于 base 的布局大小和相对位置。
 * 注意该方法会考虑滚动所带来的影响
 */
function getRelativeLayoutRect(
  base: HTMLElement | Window,
  target: HTMLElement | Window,
): { top: number; left: number; bottom: number; right: number } {
  if (isWindow(target) || isHtmlOrBody(target)) {
    return {
      left: 0,
      right: window.innerWidth,
      top: 0,
      bottom: window.innerHeight,
    }
  }

  let deltaX = 0
  let deltaY = 0

  let elem = target
  while (elem != null && elem != base) {
    deltaY += elem.offsetTop
    deltaX += elem.offsetLeft

    const offsetParent = getOffsetParent(elem) as HTMLElement | Window
    deltaY -= accumulateScrollOffset(elem.parentElement, offsetParent, 'scrollTop')
    deltaX -= accumulateScrollOffset(elem.parentElement, offsetParent, 'scrollLeft')

    if (isWindow(offsetParent)) {
      break
    }

    deltaY += offsetParent.clientTop
    deltaX += offsetParent.clientLeft

    elem = offsetParent
  }

  return {
    top: deltaY,
    bottom: deltaY + target.offsetHeight,
    left: deltaX,
    right: deltaX + target.offsetWidth,
  }
}

function findCommonOffsetAncestor(target: HTMLElement, scrollParent: HTMLElement | Window): HTMLElement | Window {
  if (isWindow(scrollParent)) {
    return scrollParent
  }
  const offsetParents = listOffsetParents(target)
  if (offsetParents.includes(scrollParent)) {
    return scrollParent
  }
  return getOffsetParent(scrollParent)
}

// 列出 target 元素上层的所有 offset parents
function listOffsetParents(target: Element | Window) {
  const result: Array<Element | Window> = []

  let elem = target
  while (true) {
    if (isWindow(elem)) {
      break
    }
    elem = getOffsetParent(elem)
    result.push(elem)
  }

  return result
}

function fromScrollEvent(element: HTMLElement | Window) {
  return fromEvent(element, 'scroll', { passive: true })
}

function fromResizeEvent(element: HTMLElement | Window): Observable<Event | ResizeObserverEntry[]> {
  if (isWindow(element)) {
    return fromEvent<Event>(element, 'resize', { passive: true })
  }

  return new Observable((subscriber) => {
    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      subscriber.next(entries)
    })
    resizeObserver.observe(element as HTMLElement)

    return () => {
      resizeObserver.disconnect()
    }
  })
}

function getScrollParent(elem: HTMLElement): HTMLElement | Window {
  if (['html', 'body', '#document'].includes(getNodeName(elem))) {
    return getWindow(elem)
  }

  if (isHTMLElement(elem) && isScrollParent(elem)) {
    return elem
  }

  return getScrollParent(getParentNode(elem) as HTMLElement)
}

// 获取 target 相对于「它的滚动父元素」的可见部分的大小与位置
export function getRichVisibleRectsStream(
  target: HTMLElement,
  structureMayChange$: Observable<'structure-may-change'>,
  virtualDebugLabel?: string,
) {
  return structureMayChange$.pipe(
    op.startWith('init'),
    op.map(() => {
      // target 的第一个滚动父元素，我们认为这就是虚拟滚动发生的地方
      // 即虚拟滚动不考虑「更上层元素发生滚动」的情况
      const scrollParent: HTMLElement | Window = getScrollParent(target)

      // target 和 scrollParent 的共同 offset 祖先，作为布局尺寸计算时的参照元素
      const commonOffsetAncestor: HTMLElement | Window = findCommonOffsetAncestor(target, scrollParent)

      return { scrollParent, commonOffsetAncestor }
    }),
    op.distinctUntilChanged(shallowEqual),
    op.tap((structure) => {
      if (virtualDebugLabel) {
        console.log(
          `%c[ali-react-table STRUCTURE ${virtualDebugLabel}]`,
          'color: #4f9052; font-weight: bold',
          '\ntarget:',
          target,
          '\nscrollParent:',
          structure.scrollParent,
          '\ncommonOffsetAncestor:',
          structure.commonOffsetAncestor,
        )
      }
    }),
    op.switchMap(({ scrollParent, commonOffsetAncestor }) => {
      const events$ = merge(
        fromScrollEvent(scrollParent),
        fromResizeEvent(scrollParent),
        fromResizeEvent(target),
      )
      return events$.pipe(
        op.map((event: unknown) => ({
          targetRect: getRelativeLayoutRect(commonOffsetAncestor, target),
          scrollParentRect: getRelativeLayoutRect(commonOffsetAncestor, scrollParent),
          event,
        })),
        op.map(({ event, scrollParentRect, targetRect }) => ({
          event,
          targetRect,
          scrollParentRect,
          offsetY: Math.max(0, scrollParentRect.top - targetRect.top),
          // 表格的横向滚动总是发生在表格内部，所以这里不需要计算 offsetX
          // offsetX: Math.max(0, scrollParentRect.left - targetRect.left),
          clipRect: {
            left: Math.max(targetRect.left, scrollParentRect.left),
            top: Math.max(targetRect.top, scrollParentRect.top),
            right: Math.min(targetRect.right, scrollParentRect.right),
            bottom: Math.min(targetRect.bottom, scrollParentRect.bottom),
          },
        })),
      )
    }),
    op.tap((rects) => {
      if (virtualDebugLabel) {
        console.log(
          `%c[ali-react-table RECTS ${virtualDebugLabel}]`,
          'color: #4f9052; font-weight: bold',
          '\noffsetY:',
          rects.offsetY,
          '\ntargetRect:',
          rects.targetRect,
          '\nscrollParentRect:',
          rects.scrollParentRect,
          '\nclipRect:',
          rects.clipRect,
          '\nevent:',
          rects.event,
        )
      }
    }),
  )
}
