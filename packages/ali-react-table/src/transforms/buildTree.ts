import { TableTransform } from '../interfaces'
import { buildTree as _buildTree } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeBuildTreeTransform(idProp: string, parentIdProp: string): TableTransform {
  warnTransformsDeprecated('makeBuildTreeTransform')

  return ({ columns, dataSource }) => {
    return { columns, dataSource: _buildTree(idProp, parentIdProp, dataSource) }
  }
}
