import { useState } from 'react'
import { BaseTableProps, PrimaryKey } from '../base-table'
import { ArtColumn, TableTransform, Transform } from '../interfaces'
import { mergeCellProps } from '../utils'

type RowPropsGetter = BaseTableProps['getRowProps']

interface PipelineSnapshot {
  dataSource: any[]
  columns: ArtColumn[]
  rowPropsGetters: RowPropsGetter[]
}

export interface TablePipelineIndentsConfig {
  iconIndent: number
  iconWidth: 16
  iconGap: number
  indentSize: number
}

export interface TablePipelineCtx {
  primaryKey?: PrimaryKey
  components: { [name: string]: any }
  indents: TablePipelineIndentsConfig

  [key: string]: any
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
  private readonly _snapshots: { [key: string]: PipelineSnapshot } = {}
  private readonly _rowPropsGetters: Array<RowPropsGetter> = []
  private _dataSource: any[]
  private _columns: any[]

  static defaultIndents: TablePipelineIndentsConfig = {
    iconIndent: -8,
    iconWidth: 16,
    iconGap: 0,
    indentSize: 16,
  }

  readonly ctx: TablePipelineCtx = {
    components: {},
    indents: TablePipeline.defaultIndents,
  }

  private readonly state: any
  private readonly setState: (fn: (prevState: any) => any, stateKey: string, partialState: any, extraInfo?: any) => any

  constructor({
    state,
    setState,
    ctx,
  }: {
    state: any
    setState: TablePipeline['setState']
    ctx: Partial<TablePipelineCtx>
  }) {
    this.state = state
    this.setState = setState
    Object.assign(this.ctx, ctx)
  }

  appendRowPropsGetter(getter: RowPropsGetter) {
    this._rowPropsGetters.push(getter)
    return this
  }

  getDataSource(name?: string) {
    if (name == null) {
      return this._dataSource
    } else {
      return this._snapshots[name].dataSource
    }
  }

  getColumns(name?: string) {
    if (name == null) {
      return this._columns
    } else {
      return this._snapshots[name].columns
    }
  }

  getStateAtKey<T = any>(stateKey: string, defaultValue?: T): T {
    return this.state[stateKey] ?? defaultValue
  }

  /** 将 stateKey 对应的状态设置为 partialState  */
  setStateAtKey(stateKey: string, partialState: any, extraInfo?: any) {
    this.setState((prev: any) => ({ ...prev, [stateKey]: partialState }), stateKey, partialState, extraInfo)
  }

  /** 确保 primaryKey 已被设置，并返回 primaryKey  */
  ensurePrimaryKey(hint?: string): PrimaryKey {
    if (this.ctx.primaryKey == null) {
      throw new Error(hint ? `使用 ${hint} 之前必须先设置 primaryKey` : '必须先设置 primaryKey')
    }
    return this.ctx.primaryKey
  }

  /** 设置流水线的输入数据 */
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
    this._snapshots[name] = {
      dataSource: this._dataSource,
      columns: this._columns,
      rowPropsGetters: this._rowPropsGetters.slice(),
    }
    return this
  }

  /** @deprecated
   *  应用一个 ali-react-table Table transform */
  useTransform(transform: TableTransform) {
    const next = transform({
      dataSource: this.getDataSource(),
      columns: this.getColumns(),
    })
    return this.dataSource(next.dataSource).columns(next.columns)
  }

  /** 使用 pipeline 功能拓展 */
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

  /** 获取 BaseTable 的 props，结果中包含 dataSource/columns/primaryKey/getRowProps 四个字段 */
  getProps() {
    const result: BaseTableProps = {
      dataSource: this._dataSource,
      columns: this._columns,
    }

    if (this.ctx.primaryKey) {
      result.primaryKey = this.ctx.primaryKey
    }

    if (this._rowPropsGetters.length > 0) {
      result.getRowProps = (row, rowIndex) => {
        return this._rowPropsGetters.reduce<any>((res, get) => {
          return mergeCellProps(res, get(row, rowIndex) as any)
        }, {})
      }
    }

    return result
  }
}

export function useTablePipeline(ctx?: Partial<TablePipelineCtx>) {
  const [state, setState] = useState<any>({})
  return new TablePipeline({ state, setState, ctx })
}
