import { Classes } from 'ali-react-table'
import React, { ReactNode } from 'react'
import { LOADING_ICON_SIZE } from './utils'

const LoadingIndicatorIcon = ({ size }: { size: number }) => (
  <svg
    className={Classes.loadingIndicatorIcon}
    style={{
      margin: 'auto',
      display: 'block',
      shapeRendering: 'auto',
    }}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      fill="none"
      stroke="#23a7fa"
      strokeDasharray="188 64"
      strokeLinecap="round"
      strokeWidth="10"
    >
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
)

Loading.defaultProps = {
  visible: true,
}

export default function Loading({ visible, children }: { visible: boolean; children: ReactNode }) {
  return (
    <div className={Classes.loadingWrapper} style={{ position: 'relative' }}>
      {visible && (
        <div
          className={Classes.loadingIndicatorWrapper}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <div
            className={Classes.loadingIndicator}
            style={{
              position: 'sticky',
              zIndex: 1,
              top: LOADING_ICON_SIZE,
              left: 0,
              right: 0,
            }}
          >
            <LoadingIndicatorIcon size={LOADING_ICON_SIZE} />
          </div>
        </div>
      )}
      <div className={Classes.loadingContentWrapper} style={{ filter: visible ? 'blur(1px)' : 'none' }}>
        {children}
      </div>
    </div>
  )
}
