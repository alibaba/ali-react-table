/** 比较函数，支持字符串、数字和 null。
 * 对于字符串将比较两者的字典序；对数字将比较两者大小；null 值在比较时总是小于另一个值。 */
export default function compareStringOrNumber(x: any, y: any) {
  // 将 null 排在最后面
  if (x == null) {
    return -1
  }
  if (y == null) {
    return 1
  }
  if (typeof x === 'number' && typeof y === 'number') {
    return x - y
  }
  // 当成 string 来处理，使用字符串默认的字典序
  if (x < y) {
    return -1
  } else if (x > y) {
    return 1
  } else {
    return 0
  }
}
