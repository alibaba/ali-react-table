import React from 'react'
import { VisibleColumnDescriptor } from './interfaces'

export function Colgroup({ descriptors }: { descriptors: VisibleColumnDescriptor[] }) {
  return (
    <colgroup>
      {descriptors.map((descriptor) => {
        if (descriptor.type === 'blank') {
          return <col key={descriptor.blankSide} style={{ width: descriptor.width }} />
        }
        return <col key={descriptor.colIndex} style={{ width: descriptor.col.width }} />
      })}
    </colgroup>
  )
}
