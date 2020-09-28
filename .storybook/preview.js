import { BaseTableThemeContext } from '../stories/assets/ThemedBaseTable'
import React from 'react'

export const globalTypes = {
  theme: {
    name: '主题',
    description: '表格主题',
    defaultValue: 'default',
    toolbar: {
      icon: 'nut',
      items: [
        { value: 'default', title: '默认主题（使用浏览器默认样式）' },
        { value: 'hippo', title: '盒马 Hippo Design' },
        { value: 'fusion', title: 'Alibaba Fusion Design (coming soon)' },
        { value: 'antd', title: 'Ant Design (coming soon)' },
      ],
    },
  },
}

function withThemeProvider(Story, context) {
  const { theme } = context.globals

  return (
    <BaseTableThemeContext.Provider value={theme}>
      <Story {...context} />
    </BaseTableThemeContext.Provider>
  )
}

export const decorators = [withThemeProvider]
