import ResizeObserver from 'resize-observer-polyfill'
import { fromEvent, merge, Observable } from 'rxjs'
import * as op from 'rxjs/operators'

interface SimpleDOMRect {
  readonly top: number
  readonly right: number
  readonly bottom: number
  readonly left: number
}

function getRect(ele: HTMLElement | typeof window): SimpleDOMRect {
  if (ele === window) {
    return { left: 0, top: 0, bottom: window.innerHeight, right: window.innerWidth }
  } else {
    // fixme 移除 getBoundingClientRect 的调用，兼容 transform 存在的情况
    return (ele as HTMLElement).getBoundingClientRect()
  }
}

export function getVisiblePart(target: HTMLElement | typeof window, flowRoot: HTMLElement | typeof window) {
  const targetRect = getRect(target)
  const rootRect = getRect(flowRoot)

  return {
    offsetY: Math.max(0, rootRect.top - targetRect.top),
    offsetX: Math.max(0, rootRect.left - targetRect.left),
    clipRect: {
      left: Math.max(targetRect.left, rootRect.left),
      top: Math.max(targetRect.top, rootRect.top),
      right: Math.min(targetRect.right, rootRect.right),
      bottom: Math.min(targetRect.bottom, rootRect.bottom),
    },
  }
}

function fromResizeEvent(element: HTMLElement | typeof window): Observable<unknown> {
  if (element === window) {
    return fromEvent(element, 'resize')
  }

  return new Observable((subscriber) => {
    const resizeObserver = new ResizeObserver(() => {
      subscriber.next()
    })
    resizeObserver.observe(element as HTMLElement)

    return () => {
      resizeObserver.disconnect()
    }
  })
}

/** 基于 ResizeObserver 和 scroll event 封装的 RxJS observable；
 * 用于监听一个元素的在页面中的「可见范围」的不断变化 */
export function getVisiblePartObservable(target: HTMLElement, flowRoot: HTMLElement | typeof window) {
  return merge<any>(
    fromEvent(flowRoot, 'scroll', { passive: true }),
    fromResizeEvent(flowRoot),
    fromResizeEvent(target),
  ).pipe(op.map(() => getVisiblePart(target, flowRoot)))
}
