/** 比较函数，支持字符串、数字、数组和 null。
 * * 对于字符串将比较两者的字典序；
 * * 对数字将比较两者大小；
 * * null 值在比较时总是小于另一个值；
 * * 对于数组来说，将逐个比较数组中的元素，第一个不相等的比较结果将作为整个数组的比较结果
 *
 * 数组的比较可参考 python 中的元祖比较：
 * https://stackoverflow.com/questions/5292303/how-does-tuple-comparison-work-in-python */
export default function smartCompare(x: any, y: any): number {
  // 将 null 排在最后面
  if (x == null) {
    return 1
  }
  if (y == null) {
    return -1
  }

  if (typeof x === 'number' && typeof y === 'number') {
    return x - y
  }

  if (typeof x === 'string' && typeof y === 'string') {
    // 字符串使用 默认的字典序
    if (x < y) {
      return -1
    } else if (x > y) {
      return 1
    } else {
      return 0
    }
  }

  if (Array.isArray(x) && Array.isArray(y)) {
    const len = Math.min(x.length, y.length)
    for (let i = 0; i < len; i++) {
      const cmp = smartCompare(x[i], y[i])
      if (cmp !== 0) {
        return cmp
      }
    }

    // 数组长度不等时，元素少的字段放在前面
    return x.length - y.length
  }

  // 对于不认识的数据类型，返回 0
  return 0
}
