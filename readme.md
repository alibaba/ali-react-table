# ali-react-table

## 开发者平时工作实在太忙了，近期项目无法进行积极维护，抱歉。

[![NPM Package](https://img.shields.io/npm/v/ali-react-table?style=flat-square)](https://www.npmjs.org/package/ali-react-table)

高性能 React 表格组件. https://ali-react-table.js.org/

## 安装

`npm install ali-react-table`

## 特点

- 高性能，内置虚拟滚动，数据量较大时自动开启
- 简单灵活的 API，丰富的定制能力
- 实用的表格特性：表头吸顶 & 左侧/右侧锁列 & 粘性定位的滚动条

## 表格适用场景

- 需要用表格展示大量数据，对表格性能较为敏感
- 页面没有引入 React 组件库，需要一个尺寸较小的表格组件
- 原有表格组件可定制能力不够，需要更加灵活的表格组件

## 效果演示

![虚拟滚动](docs/imgs/ali-react-table-virtual-scroll.gif)
↑ 通过 dataSource 传入一个长度超过 5 万的数组，表格依旧流畅。当表格向下滚动时，BaseTable 默认会为表头设置 style.position=sticky，表头将会吸附在页面或滚动容器的顶部。[在线示例](https://ali-react-table.js.org/examples/big-data?example=滚动容器为指定高度的div)

<br>

![留存矩阵与投入产出分析表格](docs/imgs/remain-matrix-and-ROI-analysis-table.png)
↑ BaseTable 提供了灵活且丰富的 API，方便上层根据各类业务需求对表格进行定制，定制的内容包括单元格内容与样式、鼠标事件回调等。 [留存矩阵 在线示例](https://ali-react-table.js.org/examples/biz/remain-matrix)， [投入产出分析表格 在线示例](https://ali-react-table.js.org/examples/biz/ROI-analysis-table)

<br>

![优化的加载图标位置](docs/imgs/ali-react-table-enhanced-loading-icon-position.gif)

↑ 优化的加载图标位置，加载图标会位于表格的中心位置，并始终处于可见状态。

<br>

![简单透视表格](docs/imgs/ali-react-table-simple-pivot-table.gif)
↑ 基于 BaseTable 的简单透视表格。一般来说，透视表展示的数据量较大，不过 BaseTable 内置的虚拟滚动保证了表格在大数据量下仍具有很好的性能，上层不需要过多担心性能问题。 [在线示例](https://ali-react-table.js.org/examples/others/simple-pivot-table)

## 兼容性说明

表格只兼容 `react ^16.8.0 || ^17.0.0`。

此外表格用到了大量较新的浏览器 API，只兼容较新版本的 PC 端浏览器或手机浏览器，详见[该 issue](https://github.com/alibaba/ali-react-table/issues/18)

## 相关链接

- NPM: https://www.npmjs.com/package/ali-react-table
- GitHub: https://github.com/alibaba/ali-react-table
- 表格组件介绍: https://zhuanlan.zhihu.com/p/130755755
