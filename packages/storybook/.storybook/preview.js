import { BaseTableThemeContext } from 'assets/src/index'
import React from 'react'

export const globalTypes = {
  theme: {
    name: '主题',
    description: '表格主题',
    defaultValue: 'default',
    toolbar: {
      icon: 'cog',
      items: [
        { value: 'default', title: '默认样式，使用一小部分 alibaba fusion 样式' },
        { value: 'hippo', title: '盒马 Hippo Design' },
        { value: 'antd', title: 'Ant Design，开发中，敬请期待' },
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
