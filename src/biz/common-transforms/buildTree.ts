import { TableTransform } from '../interfaces'
import { buildTree as _buildTree } from '../utils'

export default function buildTree<ID extends string, PID extends string>(
  idProp: ID,
  parentIdProp: PID,
): TableTransform {
  return ({ columns, dataSource }) => {
    return { columns, dataSource: _buildTree(idProp, parentIdProp, dataSource) }
  }
}
