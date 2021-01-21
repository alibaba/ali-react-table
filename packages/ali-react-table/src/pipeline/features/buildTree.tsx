import { buildTree as _buildTree } from '../../utils'
import { TablePipeline } from '../pipeline'

export function buildTree(idProp: string, parentIdProp: string) {
  return (pipeline: TablePipeline) => pipeline.mapDataSource((rows) => _buildTree(idProp, parentIdProp, rows))
}
