import React from 'react'
import { SortItem } from '../../interfaces'
import { makeSortTransform, SortOptions } from '../../transforms'
import { TablePipeline } from '../pipeline'

export type SortFeatureOptions = { defaultSorts?: SortItem[] } & Partial<SortOptions>

export function sort(opts: SortFeatureOptions = {}) {
  return function sortStep<P extends TablePipeline>(pipeline: P) {
    const stateKey = 'sort'

    return pipeline.useTransform(
      makeSortTransform({
        orders: opts.orders,
        sorts: opts.sorts ?? pipeline.state[stateKey] ?? opts.defaultSorts ?? [],
        keepDataSource: opts.keepDataSource,
        mode: opts.mode,
        onChangeSorts: (nextSorts) => {
          opts.onChangeSorts?.(nextSorts)
          pipeline.setStateAtKey(stateKey, nextSorts)
        },
      }),
    )
  }
}
