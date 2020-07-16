import merge from 'lodash.merge'
import { CellProps } from '../interfaces'

/** 合并两个 cellProps（单元格属性）对象。
 *
 * mergeCellProps 会按照「单元格属性的性质」来合并两个对象：
 * * 对于 数字、字符串、布尔值类型的字段，extra 中的字段值将直接覆盖 base 中的字段值
 * * 对于函数/方法类型的字段（对应单元格的事件回调函数），mergeCellProps 将生成一个新的函数，新函数将按序调用 base 和 extra 中的方法
 * * 对于普通对象类型的字段（一般对应单元格的样式），mergeCellProps 将调用 lodash.merge 来合并字段值 */
export default function mergeCellProps(base: CellProps, extra: CellProps): CellProps {
  if (base == null) {
    return extra
  }

  const result: any = Object.assign({}, base)

  for (const key of Object.keys(extra)) {
    const value = (extra as any)[key]
    const type = typeof value

    if (value == null || type === 'undefined' || type === 'number' || type === 'string' || type === 'boolean') {
      result[key] = value
    } else if (type === 'function') {
      const prev = result[key]
      if (prev == null) {
        result[key] = value
      } else {
        result[key] = (...args: any) => {
          // 先执行原有的事件回调函数
          prev(args)
          value(args)
          // 事件回调函数没有返回值，故这里不进行 return
        }
      }
    } else if (type === 'object') {
      result[key] = merge(result[key], value)
    }
    // else `type` is 'bigint' or 'symbol', `value` is an invalid cellProp, ignore it
  }

  return result
}
