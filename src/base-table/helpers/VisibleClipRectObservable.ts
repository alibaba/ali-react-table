import ResizeObserver from 'resize-observer-polyfill'
import { fromEvent, Observable } from 'rxjs'

function clamp(min: number, x: number, max: number) {
  return Math.min(max, Math.max(min, x))
}

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

/** 基于 ResizeObserver 和 scroll event 封装的 RxJS observable；
 * 用于监听一个元素的在页面中的「可见范围」的不断变化 */
export default class VisibleClipRectObservable extends Observable<{ clipRect: SimpleDOMRect; offsetY: number }> {
  constructor(target: HTMLElement, flowRoot: HTMLElement | typeof window) {
    super(subscriber => {
      const scrollSubscription = fromEvent(flowRoot, 'scroll').subscribe(callback)
      const resizeObserver = new ResizeObserver(callback)
      resizeObserver.observe(target)

      function callback() {
        const targetRect = getRect(target)
        const rootRect = getRect(flowRoot)
        subscriber.next({
          offsetY: Math.max(0, rootRect.top - targetRect.top),
          clipRect: {
            left: Math.max(targetRect.left, rootRect.left),
            top: Math.max(targetRect.top, rootRect.top),
            right: Math.min(targetRect.right, rootRect.right),
            bottom: Math.min(targetRect.bottom, rootRect.bottom),
          },
        })
      }

      return () => {
        scrollSubscription.unsubscribe()
        resizeObserver.disconnect()
      }
    })
  }
}
