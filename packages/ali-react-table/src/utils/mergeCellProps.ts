import cx from 'classnames'
import { CellProps } from '../interfaces'

function composeEventHandler(handler1: Function, handler2: Function) {
  return (...args: any) => {
    // 先执行原有的事件回调函数
    handler1(args)
    handler2(args)
    // 事件回调函数没有返回值，故这里不进行 return
  }
}

/** 合并两个 cellProps（单元格属性）对象，返回一个合并后的全新对象。
 *
 * mergeCellProps 会按照以下规则来合并两个对象：
 * * 对于 数字、字符串、布尔值类型的字段，extra 中的字段值将直接覆盖 base 中的字段值（className 是个特例，会进行字符串拼接）
 * * 对于函数/方法类型的字段（对应单元格的事件回调函数），mergeCellProps 将生成一个新的函数，新函数将按序调用 base 和 extra 中的方法
 * * 对于普通对象类型的字段（对应单元格的样式），mergeCellProps 将合并两个对象
 * */
export default function mergeCellProps(base: CellProps, extra: CellProps): CellProps {
  if (base == null) {
    return extra
  }
  if (extra == null) {
    return base
  }

  const result: any = Object.assign({}, base)

  for (const key of Object.keys(extra)) {
    const value = (extra as any)[key]
    const type = typeof value

    if (value === null) {
      // value=null 时 覆盖原来的值
      result[key] = null
    } else if (value === undefined) {
      // value=undefined 时 保留原来的值
    } else if (type === 'number' || type === 'string' || type === 'boolean') {
      if (key === 'className') {
        result[key] = cx(result[key], value)
      } else {
        result[key] = value
      }
    } else if (type === 'function') {
      const prev = result[key]
      if (prev == null) {
        result[key] = value
      } else {
        result[key] = composeEventHandler(prev, value)
      }
    } else if (type === 'object') {
      result[key] = Object.assign({}, result[key], value)
    }
    // else `type` is 'bigint' or 'symbol', `value` is an invalid cellProp, ignore it
  }

  return result
}
