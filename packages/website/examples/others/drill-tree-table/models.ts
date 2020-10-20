import { ArtColumn } from 'ali-react-table'
import { buildDrillTree, buildRecordMap } from 'ali-react-table/pivot'
import { createAggregateFunction } from 'dvt-aggregation'
import _ from 'lodash'
import { action, computed, makeObservable, observable } from 'mobx'

export class Pivot {
  @observable isLoading = true
  @observable.ref data: any[] = []
  @observable dimCodes: string[]
  @observable allIndicators: ArtColumn[] = []
  @observable allDimensions: Array<{ code: string; name: string }> = []

  @observable filters: { [dimCode: string]: string[] }
  @observable indCodes: string[]

  constructor(input: Partial<Pivot> = {}) {
    makeObservable(this)

    Object.assign(this, input)

    if (this.indCodes == null) {
      this.indCodes = this.allIndicators.map((ind) => ind.code)
    }
    if (this.filters == null) {
      this.filters = Object.fromEntries(this.dimCodes.map((dimCode) => [dimCode, []]))
    }
  }

  @computed({ keepAlive: true })
  get aggregate() {
    return createAggregateFunction(this.allIndicators as any)
  }

  @computed({ keepAlive: true })
  get dimValues() {
    return Object.fromEntries(
      this.allDimensions.map((dim) => {
        return [dim.code, _.uniq(this.data.map((d) => d[dim.code]))]
      }),
    )
  }

  @computed({ keepAlive: true })
  get filteredData() {
    const checkedValuesMap = new Map(this.allDimensions.map((dim) => [dim.code, new Set(this.filters[dim.code])]))
    return this.data.filter((d) => this.allDimensions.every((dim) => checkedValuesMap.get(dim.code).has(d[dim.code])))
  }

  @action
  filter(dimCode: string, value: any, checked: boolean) {
    if (checked) {
      this.filters[dimCode].push(value)
    } else {
      const values = this.filters[dimCode]
      values.splice(values.indexOf(value), 1)
    }
  }

  @action
  changeDimCodes(dimCodes: string[], filters?: Pivot['filters']) {
    this.dimCodes = dimCodes
    if (filters) {
      this.filters = filters
    }
  }

  @action
  batchFilter(dimCode: string, values: string[], checked: boolean) {
    if (checked) {
      const pre = this.filters[dimCode]
      this.filters[dimCode] = Array.from(new Set(pre.concat(values)))
    } else {
      const removeSet = new Set(values)
      this.filters[dimCode] = this.filters[dimCode].filter((v) => !removeSet.has(v))
    }
  }
}

export class PivotView {
  readonly pivot: Pivot

  constructor(pivot: Pivot) {
    makeObservable(this)

    this.pivot = pivot
  }

  @computed
  get leftTree() {
    const pivot = this.pivot
    return buildDrillTree(pivot.filteredData, pivot.dimCodes, {
      includeTopWrapper: true,
      enforceExpandTotalNode: false,
    })
  }

  @computed({ keepAlive: true })
  get topTree() {
    return this.pivot.allIndicators.map((indicator) => ({
      key: indicator.code,
      value: indicator.name,
      align: indicator.align,
      data: { indicator },
    }))
  }

  @computed({ keepAlive: true })
  get recordMap() {
    const { pivot } = this

    return buildRecordMap({
      data: pivot.filteredData,
      codes: pivot.dimCodes,
      aggregate: pivot.aggregate,
    })
  }
}
