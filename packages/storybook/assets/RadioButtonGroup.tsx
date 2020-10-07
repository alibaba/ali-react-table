import { Button } from '@alifd/next'
import React from 'react'

export function RadioButtonGroup({
  dataSource,
  value,
  onChange,
  style,
  className,
  size,
}: {
  dataSource: Array<{ value: string; label: string; disabled?: boolean }>
  value: string
  onChange(nextValue: string): void
  style?: React.CSSProperties
  className?: string
  size?: string
}) {
  return (
    // @ts-ignore
    <Button.Group style={style} className={className} size={size}>
      {dataSource.map((item) => (
        <Button
          key={item.value}
          type={item.value === value ? 'primary' : 'normal'}
          disabled={item.disabled}
          // @ts-ignore
          onClick={() => {
            if (item.value !== value) {
              onChange(item.value)
            }
          }}
        >
          {item.label}
        </Button>
      ))}
      {/* @ts-ignore */}
    </Button.Group>
  )
}
