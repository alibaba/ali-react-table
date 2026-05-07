import { ArtColumn } from '../interfaces'

export default function upDataFirstCol(columns: ArtColumn[], upFn: (firstCol: ArtColumn) => ArtColumn): ArtColumn[] {
  const [firstCol, ...others] = columns
  if (firstCol.children && firstCol.children.length) {
    firstCol.children = upDataFirstCol(firstCol.children, upFn)
    return [...columns]
  } else {
    return [upFn(firstCol), ...others]
  }
}

const getLeafCount = (col: ArtColumn) => {
  let n = 0
  if (col.children && col.children.length) {
    col.children.forEach((col) => {
      n += getLeafCount(col)
    })
    return n
  } else {
    return 1
  }
}
/**
 * 更新指定列配置 可代替 upDataFirstCol
 * @param columns
 * @param upFn
 * @param index 默认0
 * @returns
 */
export function upDataIndexCol(columns: ArtColumn[], upFn: (col: ArtColumn) => ArtColumn, index = 0): ArtColumn[] {
  let _index = 0
  return columns.map((col) => {
    let _thisColCount = getLeafCount(col)
    if (_index > index || _index + _thisColCount - 1 < index) {
      _index += _thisColCount
      return col
    }
    if (col.children && col.children.length) {
      col.children = upDataIndexCol(col.children, upFn, index - _index)
      _index += _thisColCount
      return col
    }
    if (index === _index) {
      _index += _thisColCount
      return upFn(col)
    }
    _index += _thisColCount
    return col
  })
}
