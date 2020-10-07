import React, { useState } from 'react'
import { BaseTableProps, PrimaryKey } from '../base-table'
import { ArtColumn, TableTransform, Transform } from '../interfaces'
import { mergeCellProps, traverseColumn } from '../utils'

type RowPropsGetter = BaseTableProps['getRowProps']

interface PipelineSnapshot {
  dataSource: any[]
  columns: ArtColumn[]
  rowPropsGetters: RowPropsGetter[]
}

// todo 需要重新设计一下
interface IndentsConfig {
  iconIndent: number
  iconWidth: number
  iconGap: number
  indentSize: number
  textOffset: number // iconIndent + iconWidth + iconGap
}

/**
 * 表格数据处理流水线。TablePipeline 提供了表格数据处理过程中的一些上下方与工具方法，包括……
 *
 * 1. ctx：上下文环境对象，step（流水线上的一步）可以对 ctx 中的字段进行读写。
 * ctx 中部分字段名称有特定的含义（例如 primaryKey 表示行的主键），使用自定义的上下文信息时注意避开这些名称。
 *
 * 2. rowPropsGetters：getRowProps 回调队列，step 可以通过 pipeline.appendRowPropsGetter 向队列中追加回调函数，
 *   在调用 pipeline.props() 队列中的所有函数会组合形成最终的 getRowProps
 *
 * 3. 当前流水线的状态，包括 dataSource, columns, rowPropsGetters 三个部分
 *
 * 4. snapshots，调用 pipeline.snapshot(name) 可以记录当前的状态，后续可以通过 name 来读取保存的状态
 * */
export class TablePipeline {
  private readonly snapshots: { [key: string]: PipelineSnapshot } = {}
  private readonly rowPropsGetters: Array<RowPropsGetter> = []
  private _dataSource: any[]
  private _columns: any[]

  static defaultIndents: IndentsConfig = {
    iconIndent: -8,
    iconWidth: 16,
    iconGap: 0,
    indentSize: 16,
    textOffset: 8,
  }

  readonly ctx: Partial<{
    primaryKey: PrimaryKey
    components: { [name: string]: React.ComponentType<any> }
    indents: IndentsConfig
    [key: string]: any
  }> = {
    indents: TablePipeline.defaultIndents,
  }

  readonly state
  readonly setState

  constructor({
    state,
    setState,
    context,
  }: {
    state: any
    setState: (nextFullState: any, stateKey: string, partialState: any, extraInfo?: any) => void
    context: TablePipeline['ctx']
  }) {
    this.state = state
    this.setState = setState
    Object.assign(this.ctx, context)
  }

  appendRowPropsGetter(getter: RowPropsGetter) {
    this.rowPropsGetters.push(getter)
    return this
  }

  getDataSource(name?: string) {
    if (name == null) {
      return this._dataSource
    } else {
      return this.snapshots[name].dataSource
    }
  }

  getColumns(name?: string) {
    if (name == null) {
      return this._columns
    } else {
      return this.snapshots[name].columns
    }
  }

  /** 将 stateKey 对应的状态设置为 partialState  */
  setStateAtKey(stateKey: string, partialState: any, extraInfo?: any) {
    this.setState({ ...this.state, [stateKey]: partialState }, stateKey, partialState, extraInfo)
  }

  /** 确保 primaryKey 已被设置，并返回 primaryKey  */
  ensurePrimaryKey(prefix: string): PrimaryKey {
    if (this.ctx.primaryKey == null) {
      throw new Error(`使用 ${prefix} 之前必须先设置 primaryKey`)
    }
    return this.ctx.primaryKey
  }

  /** 设置流水线的输入数据  */
  input(input: { dataSource: any[]; columns: ArtColumn[] }) {
    if (this._dataSource != null || this._columns != null) {
      throw new Error('input 不能调用两次')
    }

    this._dataSource = input.dataSource
    this._columns = input.columns

    this.snapshot('input')

    return this
  }

  /** 设置 dataSource */
  dataSource(rows: any[]) {
    this._dataSource = rows
    return this
  }

  /** 设置 columns */
  columns(cols: ArtColumn[]) {
    this._columns = cols
    return this
  }

  /** 设置主键 */
  primaryKey(key: PrimaryKey) {
    this.ctx.primaryKey = key
    return this
  }

  /** 保存快照 */
  snapshot(name: string) {
    this.snapshots[name] = {
      dataSource: this._dataSource,
      columns: this._columns,
      rowPropsGetters: this.rowPropsGetters.slice(),
    }
    return this
  }

  /** 应用一个 ali-react-table Table transform */
  useTransform(transform: TableTransform) {
    const next = transform({
      dataSource: this.getDataSource(),
      columns: this.getColumns(),
    })
    return this.dataSource(next.dataSource).columns(next.columns)
  }

  use(step: (pipeline: this) => this) {
    return step(this)
  }

  /** 转换 dataSource */
  mapDataSource(mapper: Transform<any[]>) {
    return this.dataSource(mapper(this.getDataSource()))
  }

  /** 转换 columns */
  mapColumns(mapper: Transform<ArtColumn[]>) {
    return this.columns(mapper(this.getColumns()))
  }

  /** 利用 ali-react-table 提供的 traverseColumn 工具来遍历所有 columns */
  traverseColumn(
    fn: (
      column: ArtColumn,
      ctx: { range: { start: number; end: number }; dataSource: any[] },
    ) => ArtColumn | ArtColumn[] | null,
  ) {
    return this.useTransform(traverseColumn(fn))
  }

  /** 获取 BaseTable 的 props */
  getProps() {
    const result: BaseTableProps = {
      dataSource: this._dataSource,
      columns: this._columns,
    }

    if (this.ctx.primaryKey) {
      result.primaryKey = this.ctx.primaryKey
    }

    if (this.rowPropsGetters.length > 0) {
      result.getRowProps = (row, rowIndex) => {
        return this.rowPropsGetters.reduce<any>((res, get) => {
          return mergeCellProps(res, get(row, rowIndex) as any)
        }, {})
      }
    }

    return result
  }
}

export function useTablePipeline(context?: TablePipeline['ctx']) {
  const [state, setState] = useState<any>({})
  return new TablePipeline({ state, setState, context })
}
