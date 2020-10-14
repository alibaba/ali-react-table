import { AbstractTreeNode } from '../interfaces'

export default function isLeafNode(node: AbstractTreeNode) {
  return node.children == null || node.children.length === 0
}
