import React from 'react'

export function Story({ id, height = 400 }) {
  const prefix = process.env.NODE_ENV === 'production' ? '/beta/storybook/' : 'http://localhost:2333/'
  const docUrl = `${prefix}?path=/story/${id}`
  const canvasUrl = `${prefix}iframe.html?id=${id}&viewMode=story`

  return (
    <div>
      <a href={docUrl} target="_blank">
        在新窗口打开查看示例源码
      </a>
      <iframe src={canvasUrl} style={{ border: '1px solid #ccc', width: '100%', height }} />
    </div>
  )
}
