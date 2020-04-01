import XLSX_NS from 'xlsx'
import { ArtColumn } from '../../interfaces'
import collectNodes from '../../common-utils/collectNodes'
import { getTreeDepth, safeGetValue } from '../../common-utils/internals'
import isLeafNode from '../../common-utils/isLeafNode'

type XlsxCellDatum = string | number | null

interface CellAddress {
  /** Column number (0-based) */
  c: number
  /** Row number (0-based) */
  r: number
}

function move({ c, r }: CellAddress, dx: number, dy: number): CellAddress {
  return { c: c + dx, r: r + dy }
}

function sanitizeCellDatum(value: any): XlsxCellDatum {
  if (value === Infinity || value === -Infinity || (typeof value === 'number' && isNaN(value))) {
    return null
  } else {
    return value
  }
}

/** 兼容 ArtColumn 的 Excel 导出函数。
 * 该函数会调用 `column.getValue`（如果该方法不为空的话）来获取表格中每个单元格的数据.
 *
 * * biz features: 当 `col.features.noExport` 为 true 时，导出文件时将忽略该列
 * * 支持分组表头
 * * 暂不支持 rowSpan / colSpan
 * */
export default function exportTableAsExcel(
  xlsxPackage: typeof XLSX_NS,
  dataSource: any[],
  columns: ArtColumn[],
  filename: string,
) {
  const sheet = xlsxPackage.utils.aoa_to_sheet([])
  const topHeaderHeight = getTreeDepth(columns) + 1

  const origin = { c: 0, r: 0 }
  addTopHeaders(origin)
  addDataPart(move(origin, 0, topHeaderHeight))

  xlsxPackage.writeFile(
    {
      SheetNames: ['Sheet1'],
      Sheets: { Sheet1: sheet },
    },
    filename,
  )

  function addTopHeaders(origin: CellAddress) {
    dfs(columns, 0, 0)

    function dfs(cols: ArtColumn[], startDx: number, startDy: number) {
      const start = move(origin, startDx, startDy)
      let offsetX = 0

      for (const col of cols) {
        if (col.features?.noExport) {
          continue
        }
        const current = move(start, offsetX, 0)
        addOne(col.name, current)

        if (isLeafNode(col)) {
          offsetX += 1
          mergeCells(current, 1, topHeaderHeight - startDy)
        } else {
          const childrenWidth = dfs(col.children, startDx + offsetX, startDy + 1)
          mergeCells(current, childrenWidth, 1)
          offsetX += childrenWidth
        }
      }

      return offsetX
    }
  }

  function addDataPart(origin: CellAddress) {
    const leafColumns = collectNodes(columns, 'leaf-only').filter((col) => !col.features?.noExport)
    const dataPart = dataSource.map((record, rowIndex) =>
      leafColumns.map((col) => sanitizeCellDatum(safeGetValue(col, record, rowIndex))),
    )
    add(dataPart, origin)
  }

  function add(data: XlsxCellDatum[][], origin: CellAddress) {
    xlsxPackage.utils.sheet_add_aoa(sheet, data, { origin })
  }

  function addOne(datum: XlsxCellDatum, origin: CellAddress) {
    xlsxPackage.utils.sheet_add_aoa(sheet, [[datum]], { origin })
  }

  function mergeCells(addr: CellAddress, width: number, height: number) {
    if (width === 1 && height === 1) {
      return
    }
    if (sheet['!merges'] == null) {
      sheet['!merges'] = []
    }
    sheet['!merges'].push({ s: addr, e: move(addr, width - 1, height - 1) })
  }
}
