module.exports = {
  sidebar: [
    'index',
    'changelog',
    {
      type: 'category',
      label: 'BaseTable',
      items: ['table/basic-usage', 'table/examples', 'table/advanced-usage', 'table/theming', 'table/api'],
    },
    {
      type: 'category',
      label: '表格功能拓展(pipeline)',
      items: [
        'pipeline/pipeline',
        {
          type: 'category',
          label: '具体功能',
          items: [
            'pipeline/features/multi-select',
            'pipeline/features/row-detail',
            'pipeline/features/row-grouping',
            'pipeline/features/single-select',
            'pipeline/features/sort',
            'pipeline/features/tree-mode',
            'pipeline/features/tree-select',
            'pipeline/features/column-hover',
            'pipeline/features/column-range-hover',
            'pipeline/features/auto-row-span',
            'pipeline/features/tips',
            'pipeline/features/column-resize',
            'pipeline/features/filter',
          ],
        },
        'pipeline/extends',
      ],
    },
    {
      type: 'category',
      label: '表格功能拓展(transforms)',
      items: ['transforms/transforms'],
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
  ],
}
