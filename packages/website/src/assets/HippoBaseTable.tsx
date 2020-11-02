import { BaseTable, BaseTableProps, getTreeDepth, LoadingContentWrapperProps } from 'ali-react-table'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { icons } from 'ali-react-table/src/common-views'

const loadingIconRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledBaseTable = (styled(BaseTable)`
  --row-height: 50px;
  --header-row-height: 36px;
  --border-color: #eee;
  --lock-shadow: rgba(56, 88, 207, 0.12) 0 0 8px 4px;
  --cell-padding: 8px 20px;
  --line-height: 20px;

  --color: #666;
  --header-color: #333;
  --header-bgcolor: #f9f9f9;
  --hover-bgcolor: #eff3fb;
  --header-hover-bgcolor: #eff2fb;
  --highlight-bgcolor: #e2e6ef;
  --header-highlight-bgcolor: #e2e6ef;

  &.header-depth-1 {
    --header-row-height: 40px;
  }

  &.header-depth-0 {
    --header-row-height: 50px;
  }

  &:not(.bordered) {
    --cell-border-vertical: none;
    --header-cell-border-vertical: none;

    thead > tr.first th {
      border-top: none;
    }
    thead > tr.last th {
      border-bottom: none;
    }
  }

  th {
    font-weight: 500;
  }

  &.compact {
    --row-height: 40px;
    --header-row-height: 40px;
    --cell-padding: 8px 16px;
  }

  &.zebra tr.odd,
  tr.alternative {
    --bgcolor: #f9f9f9;
    // 仍然需要 hover 效果，故 --hover-bgcolor 还是保持原样
  }
` as unknown) as typeof BaseTable

const HippoEmptyContent = React.memo(() => (
  <>
    <img
      alt="hippo-table-empty"
      width="160"
      height="160"
      src="https://img.alicdn.com/tfs/TB1s7zrWeL2gK0jSZFmXXc7iXXa-240-240.svg"
    />
    <div className="empty-tips" style={{ marginTop: -24 }}>
      没有符合查询条件的数据
      <br />
      请修改条件后重新查询
    </div>
  </>
))

// 加载过程 持续一秒钟之后 再展示 加载按钮
const LOADING_SHOW_DELAY = 1000

interface LoadingContentWrapperState {
  warming: boolean
  prevVisible: boolean
}

class HippoLoadingContentWrapper extends React.Component<LoadingContentWrapperProps, LoadingContentWrapperState> {
  handle: any

  state = {
    warming: false,
    prevVisible: false,
  }

  static getDerivedStateFromProps(
    props: Readonly<LoadingContentWrapperProps>,
    state: Readonly<LoadingContentWrapperState>,
  ) {
    if (!state.prevVisible && props.visible) {
      return { warming: true, prevVisible: true }
    }
    if (!props.visible) {
      return { warming: false, prevVisible: false }
    }
    return null
  }

  componentDidUpdate(prevProps: Readonly<LoadingContentWrapperProps>) {
    if (!prevProps.visible && this.props.visible) {
      this.handle = setTimeout(() => {
        this.setState({ warming: false })
      }, LOADING_SHOW_DELAY)
    } else if (!this.props.visible) {
      clearTimeout(this.handle)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.handle)
  }

  render() {
    const { visible, children } = this.props
    const { warming } = this.state

    return (
      <div
        className="hippo-loading-content-wrapper"
        style={{
          filter: visible ? (warming ? 'blur(0.5px)' : 'blur(1px)') : 'none',
          transition: 'filter 300ms cubic-bezier(0, 0.4, 0.6, 1)',
        }}
      >
        {children}
      </div>
    )
  }
}

const StyledSvgIcon = styled(icons.Loading)`
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
  animation: 1.5s linear 0s infinite ${loadingIconRotate};
  opacity: 1;
  transition: opacity 300ms;
`

const HippoLoadingIcon = React.memo(() => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handle = setTimeout(() => {
      setShow(true)
    }, LOADING_SHOW_DELAY)

    return () => clearTimeout(handle)
  }, [])

  return <StyledSvgIcon type="loading" className="hippo-table-loading" style={{ opacity: show ? 1 : 0 }} />
})

/** Hippo Design 基础表格组件
 *
 * HippoBaseTable 在 ali-react-table 提供的 BaseTable 基础上定制了默认的表格样式。  */
export const HippoBaseTable = React.forwardRef<BaseTable, BaseTableProps>(function (props: BaseTableProps, ref) {
  const headerDepth = getTreeDepth(props.columns)

  return (
    <StyledBaseTable
      ref={ref}
      {...props}
      className={cx(props.className, {
        'header-depth-0': headerDepth === 0,
        'header-depth-1': headerDepth === 1,
      })}
      components={{
        EmptyContent: HippoEmptyContent,
        LoadingContentWrapper: HippoLoadingContentWrapper,
        LoadingIcon: HippoLoadingIcon,
        ...props.components,
      }}
    />
  )
})
