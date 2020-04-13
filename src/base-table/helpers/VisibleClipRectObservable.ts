import ResizeObserver from 'resize-observer-polyfill'
import { fromEvent, merge, Observable } from 'rxjs'

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
    return (ele as HTMLElement).getBoundingClientRect()
  }
}

export function getClipRect(target: HTMLElement | typeof window, flowRoot: HTMLElement | typeof window) {
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

/** 基于 ResizeObserver 和 scroll event 封装的 RxJS observable；
 * 用于监听一个元素的在页面中的「可见范围」的不断变化 */
export default class VisibleClipRectObservable extends Observable<{ clipRect: SimpleDOMRect; offsetY: number }> {
  constructor(target: HTMLElement, flowRoot: HTMLElement | typeof window) {
    super((subscriber) => {
      const subscription = merge(fromEvent(flowRoot, 'scroll'), fromEvent(flowRoot, 'resize')).subscribe(callback)

      const resizeObserver = new ResizeObserver(callback)
      resizeObserver.observe(target)

      function callback() {
        subscriber.next(getClipRect(target, flowRoot))
      }

      return () => {
        subscription.unsubscribe()
        resizeObserver.disconnect()
      }
    })
  }
}
