import { AntdStyles, BaseTableThemeContext, FusionStyles, HippoStyles } from 'assets/src/index'
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
  let node
  if (theme === 'hippo') {
    node = <HippoStyles />
  } else if (theme === 'antd') {
    node = <AntdStyles />
  } else {
    node = <FusionStyles />
  }

  return (
    <BaseTableThemeContext.Provider value={theme}>
      {node}
      <Story {...context} />
    </BaseTableThemeContext.Provider>
  )
}

export const decorators = [withThemeProvider]
