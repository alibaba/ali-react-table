import { AbstractTreeNode } from '../interfaces'

export default function isLeafNode<N extends AbstractTreeNode>(node: N) {
  return node.children == null || node.children.length === 0
}
