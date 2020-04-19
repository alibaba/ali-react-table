import { TableTransform } from '../interfaces'
import { buildTree as _buildTree } from '../utils'

export default function buildTree(idProp: string, parentIdProp: string): TableTransform {
  return ({ columns, dataSource }) => {
    return { columns, dataSource: _buildTree(idProp, parentIdProp, dataSource) }
  }
}
