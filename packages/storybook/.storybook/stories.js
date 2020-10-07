const stories = [
  // 手动引入来控制顺序
  'index.stories.mdx',

  'table/table.stories.tsx',
  'table/transforms-examples.stories.tsx',
  'table/table-pipeline.stories.tsx',

  'examples/**/*.stories.{tsx,mdx}',
].map((file) => `../stories/${file}`)

module.exports = stories
