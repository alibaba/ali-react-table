export type Dict<T> = { [key: string]: T }

export interface AbstractTreeNode {
  children?: AbstractTreeNode[]
}
