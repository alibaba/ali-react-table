module.exports = {
  sidebar: [
    'index',
    'changelog',
    {
      type: 'category',
      label: 'BaseTable',
      items: ['table/basic-usage', 'table/advanced-usage', 'table/examples', 'table/api'],
    },
    {
      type: 'category',
      label: '表格功能拓展(features)',
      items: [
        'features/features',
        {
          type: 'category',
          label: '具体功能',
          items: [
            'features/multi-select',
            'features/row-detail',
            'features/row-expand',
            'features/single-select',
            'features/sort',
            'features/tree-mode',
            'features/tree-select',
            'features/column-hover',
            'features/column-range-hover',
            'features/auto-row-span',
            'features/tips',
          ],
        },
        'features/examples',
      ],
    },
    {
      type: 'category',
      label: '表格功能拓展(transforms)',
      items: [
        'transforms/transforms',
        {
          type: 'category',
          label: '具体拓展',
          items: [
            'transforms/tree-mode',
            'transforms/sort',
            'transforms/auto-row-span',
            'transforms/column-hover',
            'transforms/column-resize',
            'transforms/others',
          ],
        },
        'transforms/examples',
      ],
    },
    {
      type: 'category',
      label: '工具',
      items: ['tools/internals', 'tools/proto', 'tools/utils'],
    },
    {
      type: 'category',
      label: '交叉与透视',
      items: ['pivot/cross-table', 'pivot/cross-tree-table', 'pivot/pivot-utils'],
    },

    'doc1',
  ],
}
