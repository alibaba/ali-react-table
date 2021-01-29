import { BaseTable, BaseTableProps, Classes, LoadingContentWrapperProps } from 'ali-react-table'
import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledBaseTable = (styled(BaseTable)`
  --line-height: 1.5715;
  --font-size: 14px;
  --row-height: 32px;
  --header-row-height: 36px;
  --cell-padding: 16px;

  --lock-shadow: rgba(0, 0, 0, 0.2) 0 0 10px 0px;
  --border-color: #f0f0f0;
  --color: rgba(0, 0, 0, 0.85);
  --bgcolor: white;
  --hover-bgcolor: #fafafa;
  --highlight-bgcolor: #fafafa;
  --header-color: rgba(0, 0, 0, 0.85);
  --header-bgcolor: #fafafa;
  --header-hover-bgcolor: #f5f5f5;
  --header-highlight-bgcolor: #f5f5f5;

  &.dark {
    --lock-shadow: black 0 0px 6px 2px;
    --border-color: #303030;
    --color: rgba(255, 255, 255, 0.65);
    --bgcolor: #141414;
    --hover-bgcolor: #262626;
    --highlight-bgcolor: #262626;
    --header-color: rgba(255, 255, 255, 0.85);
    --header-bgcolor: #1d1d1d;
    --hover-hover-bgcolor: #222;
    --header-highlight-bgcolor: #222;
  }

  &.compact {
    --cell-padding: 12px 8px;
  }

  td {
    transition: background 0.3s;
  }

  th {
    font-weight: 500;
  }

  .${Classes.lockShadowMask} {
    .${Classes.lockShadow} {
      transition: box-shadow 0.3s;
    }
  }

  &:not(.bordered) {
    --cell-border-vertical: none;
    --header-cell-border-vertical: none;

    thead > tr.first th {
      border-top: none;
    }
  }
` as unknown) as typeof BaseTable

const AntEmptyContent = React.memo(() => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="41" className="ant-empty-img-simple" viewBox="0 0 64 41">
      <g fill="none" fillRule="evenodd" transform="translate(0 1)">
        <ellipse cx="32" cy="33" className="ant-empty-img-simple-ellipse" rx="32" ry="7" />
        <g fillRule="nonzero" className="ant-empty-img-simple-g">
          <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            className="ant-empty-img-simple-path"
          />
        </g>
      </g>
    </svg>
    <div className="empty-tips" style={{ marginTop: 8, color: 'rgba(0,0,0,.25)', fontSize: 14 }}>
      暂无数据
    </div>
  </>
))

function AntLoadingContentWrapper({ children, visible }: LoadingContentWrapperProps) {
  return (
    <div className="ant-loading-content-wrapper" style={{ opacity: visible ? 0.6 : undefined }}>
      {children}
    </div>
  )
}

function BlockSpin() {
  return <Spin style={{ display: 'block' }} />
}

/** Ant Design 风格的基础表格组件.
 *
 * AntdBaseTable 在 ali-react-table 提供的 BaseTable 基础上定制了默认的表格样式
 * * `className="bordered"` 带边框样式
 * * `className="compact"` 紧凑样式
 * * `className="dark"` 暗色主题
 *
 * 其他样式暂未提供，可以根据需求自行添加~
 * */
export const AntdBaseTable = React.forwardRef<BaseTable, BaseTableProps>((props, ref) => (
  <StyledBaseTable
    ref={ref}
    {...props}
    components={{
      EmptyContent: AntEmptyContent,
      LoadingContentWrapper: AntLoadingContentWrapper,
      LoadingIcon: BlockSpin,
      ...props.components,
    }}
  />
))
