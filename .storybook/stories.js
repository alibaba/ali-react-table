const stories = [
  // 手动引入来控制顺序
  'index.stories.mdx',
  'changelog.stories.mdx',

  'table/table.stories.mdx',
  'table/table-api.stories.mdx',
  'table/table-advanced-usage.stories.mdx',
  'table/table.stories.tsx',
  'table/transforms.stories.mdx',
  'table/transforms/**/*.stories.mdx',
  'table/transforms-examples.stories.tsx',

  'tools/utils.stories.mdx',
  'tools/**/*.stories.mdx',

  'examples/**/*.stories.{tsx,mdx}',

  'pivot/cross-table.stories.{mdx,tsx}',
  'pivot/cross-tree-table.stories.{mdx,tsx}',
  'pivot/pivot-utils.stories.{mdx,tsx}',
].map((file) => `../stories/${file}`)

module.exports = stories
