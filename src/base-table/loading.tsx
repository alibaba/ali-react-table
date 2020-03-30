import React, { ReactNode } from 'react'

const LoadingIndicator = ({ size }: { size: number }) => (
  <svg
    className="loading-indicator"
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
  const size = 40
  return (
    <div className="loading-wrapper" style={{ position: 'relative' }}>
      {visible && (
        <div className="sticky-wrapper" style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
          <div style={{ position: 'sticky', zIndex: 1, top: `calc(50% - ${size / 2}px)`, margin: `${size}px 0` }}>
            <LoadingIndicator size={size} />
          </div>
        </div>
      )}
      <div className="loading-content-wrapper" style={{ filter: visible ? 'blur(1px)' : 'none' }}>
        {children}
      </div>
    </div>
  )
}
