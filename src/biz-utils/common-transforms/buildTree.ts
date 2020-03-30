import { buildTree as _buildTree } from '../../common-utils'
import { TableTransform } from '../../interfaces'

export default function buildTree<ID extends string, PID extends string>(
  idProp: ID,
  parentIdProp: PID,
): TableTransform {
  return ({ columns, dataSource }) => {
    return { columns, dataSource: _buildTree(idProp, parentIdProp, dataSource) }
  }
}
