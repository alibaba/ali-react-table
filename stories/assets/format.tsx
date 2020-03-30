import numeral from 'numeral'
import moment from 'moment'
import React, { CSSProperties, memo, ReactNode } from 'react'

export type NumberFormatter = (value: string | number) => string

export type RichNumberFormatter = (value: string | number) => ReactNode

export const plain: NumberFormatter = v => {
  if (v === '-' || v == null) {
    return '-'
  }
  return String(v)
}

/** 数字格式化：千分位 & 保留到个位数 */
export const amount0: NumberFormatter = v => {
  if (v === '-' || v == null) {
    return '-'
  }
  return numeral(v).format('0,0')
}

export const amount = amount0

export function time(d: string) {
  // 2020-02-15 19:52:02.225
  return moment(d, 'YYYY-MM-DD HH:mm:ss.sss').format('YYYY年MM月DD日 HH:mm:ss')
}

/** 数字格式化：千分位 & 保留到一位小数 */
export const amount1: NumberFormatter = v => {
  if (v === '-' || v == null) {
    return '-'
  }
  return numeral(v).format('0,0.0')
}

/** 数字格式化：千分位 & 保留两位小数 */
export const amount2: NumberFormatter = v => {
  if (v === '-' || v == null) {
    return '-'
  }
  return numeral(v).format('0,0.00')
}

export const ratio: NumberFormatter = v => {
  if (v === '-' || v == null) {
    return '-'
  }
  return numeral(v).format('0.00%')
}

const BeautifulUpIcon = memo(({ size = 12, style }: { size?: number; style?: CSSProperties }) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size} fill="currentColor" style={style}>
    <path d="M682.667 512v426.667H341.333V512h-256L512 0l426.667 512h-256z" />
  </svg>
))
const BeautifulDownIcon = memo(({ size = 12, style }: { size?: number; style?: CSSProperties }) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size} fill="currentColor" style={style}>
    <path d="M682.667 426.667V0H341.333v426.667h-256l426.667 512 426.667-512h-256z" />
  </svg>
))

/** 环比/同比格式化函数，注意 lfl 并不是一个 React 组件. 注意 lfl 生成的 div 样式 */
export const lfl: RichNumberFormatter = (value: string | number) => {
  if (value == null || value === '-' || isNaN(value as any) || value === Infinity || value === -Infinity) {
    return render('-')
  }
  value = Number(value)
  if (value > 0) {
    return render(
      <>
        <span style={{ color: '#f4485c' }}>{numeral(value).format('0.00%')}</span>
        <BeautifulUpIcon style={{ marginLeft: 4, color: '#f4485c' }} />
      </>,
    )
  }

  if (value < 0) {
    return render(
      <>
        <span style={{ color: '#00a854' }}>{numeral(value).format('0.00%')}</span>
        <BeautifulDownIcon style={{ marginLeft: 4, color: '#00a854' }} />
      </>,
    )
  }

  // value === 0
  return render(<span style={{ color: '#838383' }}>0</span>)

  function render(children: ReactNode) {
    return (
      <div className="lfl-cell" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {children}
      </div>
    )
  }
}
export const money: NumberFormatter = v => {
  if (v === '-' || v == null) {
    return '-'
  }
  v = Number(v)
  if (v < 0) {
    return `-${money(-v)}`
  }
  if (v === 0) {
    return String(v)
  }
  if (v < 1e4) {
    return numeral(v).format('0,0')
  } else if (v < 10e4) {
    return `${numeral(v / 1e4).format('0.0')}万`
  } else if (v < 1e8) {
    return `${numeral(v / 1e4).format('0')}万`
  } else if (v < 10e8) {
    return `${numeral(v / 1e8).format('0.0')}亿`
  } else {
    return `${numeral(v / 1e8).format('0')}亿`
  }
}
