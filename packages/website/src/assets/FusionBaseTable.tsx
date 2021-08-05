import React from 'react'
import styled from 'styled-components'
import { BaseTable, BaseTableProps } from 'ali-react-table'

const StyledBaseTable = styled(BaseTable)`
  /** 表格一行的高度 */
  --row-height: 1;
  /** 表格的字体颜色 */
  --color: var(--table-row-color, #333333);
  /** 表格背景颜色 */
  --bgcolor: var(--table-row-bg, #ffffff);
  /** 鼠标悬停时的背景色 */
  --hover-bgcolor: var(--table-row-hover-bg, #f2f3f7);
  /** 单元格高亮时的背景色 */
  --highlight-bgcolor: var(--table-row-hover-bg, #f2f3f7); // TODO

  /** 表头中一行的高度 */
  --header-row-height: 1;
  /** 表头中的字体颜色 */
  --header-color: var(--table-th-color, #333333);
  /** 表头的背景色 */
  --header-bgcolor: var(--table-th-bg, #ebecf0);
  /** 表头上鼠标悬停时的背景色 */
  --header-hover-bgcolor: var(--table-th-bg, #ebecf0);
  /** 表头上单元格高亮时的背景色 */
  --header-highlight-bgcolor: var(--table-row-hover-bg, #f2f3f7); // TODO

  /** 单元格 padding */
  --cell-padding: var(--table-cell-padding-top, 12px) var(--table-cell-padding-left, 16px);
  /** 字体大小 */
  --font-size: var(--table-body-font-size, 12px);
  /** 表格内字体的行高 */
  --line-height: 1;
  /** 锁列阴影，默认为 rgba(152, 152, 152, 0.5) 0 0 6px 2px */
  /* --lock-shadow: string */

  /** 单元格的边框颜色 */
  --border-color: var(--table-normal-border-color, #dcdee3);
  /** 单元格边框，默认为 1px solid var(--border-color) */
  --cell-border: var(--table-normal-border-width, 1px) var(--table-normal-border-style, solid)
    var(--table-normal-border-color, #dcdee3);
  /** 单元格上下边框，默认为 var(--cell-border) */
  /* --cell-border-horizontal: var(--cell-border); */
  /** 单元格左右边框，默认为 var(--cell-border) */
  --cell-border-vertical: none;
  /** 表头单元格边框，默认为 1px solid var(--border-color) */
  --header-cell-border: var(--table-normal-border-width, 1px) var(--table-normal-border-style, solid)
    var(--table-normal-border-color, #dcdee3);
  /** 表头单元格上下边框，默认为 var(--header-cell-border) */
  /* --header-cell-border-horizontal: var(--header-cell-border); */
  /** 表头单元格左右边框，默认为 var(--header-cell-border) */
  --header-cell-border-vertical: none;

  &.bordered {
    --cell-border-vertical: var(--cell-border);
    --header-cell-border-vertical: var(--cell-border);
  }
  &.zebra {
    & tr:nth-child(even) {
      & td {
        background: var(--table-td-gray, #F7F8FA);
      }
      &:hover td {
        background: var(--table-row-hover-bg, #f2f3f7);
      }
    }
  }
  &.compact {
    --cell-padding: var(--table-size-s-cell-padding-top, 8px) var(--table-size-s-cell-padding-left, 8px);
  }
` as unknown as typeof BaseTable

/**
 * Alibaba Fusion Design 风格的基础表格组件.
 *
 * FusionBaseTable 在 ali-react-table 提供的 BaseTable 基础上定制了默认的表格样式
 *
 * * `className="bordered"` 展示左右边框
 * * `className="compact"` 紧凑样式
 * * `className="zebra"` 斑马背景色
 *
 */
export const FusionBaseTable = React.forwardRef<BaseTable, BaseTableProps>((props, ref) => (
  <StyledBaseTable ref={ref} {...props} />
))
