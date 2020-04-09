# ali-react-table

[![NPM Package](https://img.shields.io/npm/v/ali-react-table.svg?style=flat-square)](https://www.npmjs.org/package/ali-react-table)

<p style={{ color: 'darkred', fontSize: 32, lineHeight: 2 }}>开源文档仍在不断建设中</p>

高性能 React 表格组件. https://ali-react-table.js.org/

## 安装

`npm install ali-react-table`

## 特点

- 高性能，内置虚拟滚动，数据量较大时自动开启
- 简单灵活的 API，高度的可定制性
- 实用的表格特性：表头吸顶 & 左侧/右侧锁列

## 效果演示

![虚拟滚动](docs/imgs/ali-react-table-virtual-scroll.gif)
↑ 通过 dataSource 传入一个长度超过 5 万的数组，表格依旧流畅。当表格向下滚动时，BaseTable 默认会为表头设置 style.position=sticky，表头将会吸附在页面或滚动容器的顶部。[在线示例](https://ali-react-table.js.org/?path=/story/示例-大数据测试--滚动容器为指定高度的div)

![简单透视表格](docs/imgs/ali-react-table-simple-pivot-table.gif)
↑ 基于 BaseTable 的简单透视表格。透视表一般展示的数据较大，不过 BaseTable 内置的虚拟滚动保证了表格在大数据量下仍具有很好的性能，上层不需要过多担心性能问题。 [在线示例](https:ali-react-table.js.org/?path=/story/示例-基于-crosstable-的透视表)

## 兼容性说明

表格用到了大量较新的浏览器 API，目前阶段只兼容较新版本的 Chrome/Firefox/Safari

## 相关链接

- NPM: https://www.npmjs.com/package/ali-react-table
- GitHub: https://github.com/alibaba/ali-react-table
