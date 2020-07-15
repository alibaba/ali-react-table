const baseTable = [
  'base-table/base-table.stories.mdx',
  'base-table/base-table-api.stories.mdx',
  'base-table/base-table-extra.stories.mdx',
  'base-table/base-table.stories.tsx',
]

const biz = [
  'biz/biz.stories.mdx',
  'biz/common-transforms/**/*.stories.mdx',
  'biz/hooks/**/*.stories.mdx',
  'biz/components/**/*.stories.mdx',
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
  ...pivot,
  'tools/**/*.stories.mdx',
  'examples/**/*.stories.tsx',
].map((file) => `../stories/${file}`)

module.exports = stories
