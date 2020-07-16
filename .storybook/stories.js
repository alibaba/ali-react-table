const baseTable = [
  'base-table/base-table.stories.mdx',
  'base-table/base-table-api.stories.mdx',
  'base-table/base-table-advanced-usage.stories.mdx',
  'base-table/base-table.stories.tsx',
]

const biz = [
  'biz/biz.stories.mdx',
  'biz/common-transforms/**/*.stories.mdx',
  'biz/examples/**/*.stories.tsx',
]

const pivot = [
  'pivot/cross-table.stories.mdx',
  'pivot/cross-table.stories.tsx',
  'pivot/cross-tree-table.stories.mdx',
  'pivot/cross-tree-table.stories.tsx',
  'pivot/pivot-utils.stories.mdx',
  'pivot/pivot-utils.stories.tsx',
]

const stories = [
  // 手动引入来控制顺序
  'index.stories.mdx',
  'changelog.stories.mdx',
  ...baseTable,
  ...biz,
  'tools/**/*.stories.mdx',
  ...pivot,
  'examples/**/*.stories.{tsx,mdx}',
].map((file) => `../stories/${file}`)

module.exports = stories
