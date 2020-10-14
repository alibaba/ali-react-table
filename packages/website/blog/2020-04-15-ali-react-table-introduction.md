---
title: ali-react-table：高性能 React 表格组件
author: feichao
authorURL: https://shinima.pw/
---

## 简介

在前端开发中，表格一直都是最复杂的组件之一。表格不仅要支持丰富的操作（排序、过滤、搜索、分页、自定义列等），还要有非常好的性能以展示大量数据。很多组件库（例如 fusion design，ant design）提供了功能丰富的表格组件，这些表格一开始没有过多考虑性能问题，往往是后面遇到性能瓶颈问题时才考虑添加虚拟滚动特性，但此时过多的表格功能使得性能优化的难度非常高。

<!--truncate-->

ali-react-table （[https://github.com/alibaba/ali-react-table](https://github.com/alibaba/ali-react-table)）是我们小组开发的高性能 React 表格组件，我们在一开始就考虑了表格的性能，为其添加了内置的虚拟滚动特性。虚拟滚动会在数据量较大时自动开启，轻松展示一万行/一万列以上的数据。虚拟滚动是表格的核心特性之一，在为表格实现新功能时，我们会确保新功能不与虚拟滚动冲突。

表格组件的基本用法和 antd/fusion 表格类似，传入 dataSource 来指定表格的数据源，传入 columns 来对表格的列进行配置。

```jsx
import { BaseTable } from 'ali-react-table'

function BasicUsage() {
  const dataSource = [
    { prov: '湖北省', confirm: 54406, cure: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirm: 1294, cure: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirm: 1212, cure: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirm: 1162, cure: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirm: 1001, cure: 417, dead: 2, t: '2020-02-15 19:52:02' },
  ]

  const columns = [
    { code: 'prov', name: '省份', width: 150 },
    { code: 'confirm', name: '确诊', width: 100, align: 'right' },
    { code: 'cure', name: '治愈', width: 100, align: 'right' },
    { code: 'dead', name: '死亡', width: 100, align: 'right' },
    { code: 't', name: '更新时间', width: 180 },
  ]
  return <BaseTable dataSource={dataSource} columns={columns} />
}
```

![base-table-simple-case-preview.png](2020-04-15-imgs/base-table-simple-case-preview.png)

## 虚拟滚动

当数据量较大时，表格会自动开启虚拟滚动。

![table-virutal-scroll.gif](2020-04-15-imgs/table-virutal-scroll.gif)

↑ 通过 dataSource 传入一个长度超过 5 万的数组，表格依旧流畅。当表格向下滚动时，BaseTable 默认会为表头设置 style.position=sticky，表头将会吸附在页面或滚动容器的顶部。

## 锁列与单元格合并

在维度、指标数量较多情况下，设置 column.lock=true 可以在表格左侧或右侧锁定指定的列，提升交互体验。

在更复杂的情况下，可以设置 column.getSpanRect 来指定单元格的合并情况；column.getSpanRect 返回每个单元格被合并之后的矩形位置，在渲染表格时，BaseTable 会根据单元格的位置和对应的 spanRect，来为单元格动态设置 rowSpan/colSpan，使得在虚拟滚动场景下合并单元格依然可以生效。

基于这些实用的表格特性，我们可以在表格上进行深度定制与二次开发，实现下钻、右键菜单、交叉表/透视表、收拢/展开等功能。同时表格内置的虚拟滚动保证了大数据量下表格仍具有很好的性能，上层使用者不需要担心性能问题。

下图是基于 BaseTable 的一个简单的透视表 demo（[在线 demo](https://ali-react-table.js.org/?path=/story/%E7%A4%BA%E4%BE%8B-%E5%9F%BA%E4%BA%8E-crosstable-%E7%9A%84%E9%80%8F%E8%A7%86%E8%A1%A8--pivot-table-based-on-cross-table)）

![pivot-table-demo.gif](2020-04-15-imgs/pivot-table-demo.gif)

## 表格功能拓展

BaseTable 是一个相对底层的 React 组件，仅提供了基本的表格渲染功能。为了方便对表格进行功能拓展，我们为 BaseTable 设计了一个简单的拓展方案，然后我们基于该方案实现了一些常见的表格功能，包括排序、树状模式、列高亮等。

我们知道 `BaseTable` 基于 dataSource 和 columns 来渲染表格，按照一定的规则对 dataSource/columns 进行包装和转换，可以改变 dataSource/columns 的值或渲染输出，实现特定的功能。

```typescript
type Transform<T> = (input: T) => T

type TableTransform = Transform<{
  columns: ArtTableColumn[]
  dataSource: any[]
}>
```

`TableTransform`（后面简称 transform）是一个纯函数，输入**_列配置 + 数据源_**，输出一份新的**_列配置 + 数据源_**。每一个 transform 通过对 dataSource/columns 的包装和转换以实现一个新的特性。注意到每个 transform 的输入和输出的类型相同，我们可以将多个 transform 串联以实现不同功能的组合。

ali-react-table/biz 提供了一些常见表格功能的 transform，下面以「**排序**和**列高亮**两个功能的组合」为例介绍 transform 的使用方式。 ![column-hover-and-sort.gif](2020-04-15-imgs/column-hover-and-sort.gif)

对应的代码如下：

```typescript jsx
import { ArtColumn, BaseTable } from 'ali-react-table'
import { applyTransforms, commonTransforms } from 'ali-react-table/biz'
import React, { useState } from 'react'

function SingleSortExample() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const columns: ArtTableColumn[] = [
    // 通过 features.sortable 来标记 可排序的列
    { code: 'provinceName', name: '省份', features: { sortable: true } },
    { code: 'confirmedCount', name: '确诊', features: { sortable: true } },
    { code: 'curedCount', name: '治愈', features: { sortable: true } },
    { code: 'deadCount', name: '死亡', features: { sortable: true } },
    { code: 'updateTime', name: '最后更新时间' },
  ]

  // transform 都是纯函数，所需的额外状态需要上层提供，这里使用 useState 来快速创建状态
  const [hoverColIndex, onChangeHoverColIndex] = useState(-1)
  const [sorts, onChangeSorts] = useState([{ code: 'deadCount', order: 'desc' }])

  const renderData = applyTransforms(
    { columns, dataSource },
    commonTransforms.columnHover({ hoverColIndex, onChangeHoverColIndex }),
    // 设置 sort.mode=multiple 可以使用多列排序
    commonTransforms.sort({ mode: 'single', sorts, onChangeSorts }),
  )

  // applyTransform 是使用多个 transform 的辅助函数
  // 上面的代码相当于：
  // input = { dataSource, columns }
  // t1 = commonTransforms.columnHover(...)
  // t2 = commonTransforms.sort(...)
  // renderData = t2(t1(input))

  return <BaseTable dataSource={renderData.dataSource} columns={renderData.columns} />
}
```

相比于原来的「直接通过 props 设置表格配置」的方式，transform 使用起来更麻烦一些，但它的优势也非常明显：

- 对于用户：
  - 按需引入 transform，多个 transform 可组合性较好，降低多个功能之间的冲突概率
    - 因为原来表格封装了所有功能，多个功能之间非常容易发生冲突
  - 表格功能不满足业务需求时，可自行实现自定义 transform，与 commonTransforms 配合使用
- 对于表格组件维护者（也就是我）：拓展功能所需的状态由上层提供，表格内部的状态数量可控，降低表格性能优化的难度，表格组件维护起来比较容易

同时这也带来了更清晰的表格功能设计分层：**BaseTable 提供灵活的 column 配置来提供高可定制性，上层实现各类 transform 实现拓展功能。**表格的基本功能由 `ali-react-table` 提供，而拓展功能则需要从 `ali-react-table/biz` 引入**。**下表展示了 BaseTable 中列配置对象的结构，可以看到上层可以定制列标题、宽度、锁列、单元格等内容，几乎涵盖了列的每个方面。

![base-table-column-structure.png](2020-04-15-imgs/base-table-column-structure.png)

ali-react-table/biz 还通过 commonTransform 提供了树状模式、自定义列、表格操作栏等功能，更多的功能也正在不断开发中，将通过统一的拓展方式进行提供。

![imgs-2020-04-15/tree-mode-and-custom-columns.png](2020-04-15-imgs/tree-mode-and-custom-columns.png)
↑ 左：树状模式；右：自定义列

当遇到一些不常见的表格需求时，我们可以通过手动定制列的 render/getCellProps 来满足定制需求：
![imgs-2020-04-15/remain-matrix-and-rio-table.png](2020-04-15-imgs/remain-matrix-and-rio-table.png)

## 交叉表

除了常见的行列数据，展示交叉数据或透视数据也是常见的表格需求。前述的 BaseTable 只能够展示行列异构的数据：行（dataSource）负责提供数据，列（columns）控制表格如何展现；而交叉/透视数据的行表头和列表头是同构的（行表头和列表头都是树状结构）。为了方便展示行列同构数据，我们基于 BaseTable 实现了一个简单的交叉表格（CrossTable），专门应对「行表头和列表头都是一棵树」 的场景。

ali-react-table/pivot 提供的交叉表（CrossTable）也是一个较为底层的 React 组件，仅提供表格结构的渲染能力。CrossTable 的渲染过程可认为是：**`左树 + 上树 => 表格`**。大致使用方式如下：

```jsx
<CrossTable
  // 推荐为交叉表设置一个默认列宽
  defaultColumnWidth={100}
  // leftTree, topTree 均为 { key, value, children } 的嵌套树状结构
  leftTree={leftTree}
  topTree={topTree}
  getValue={(leftNode, topNode) => {
    // 自定义的取数逻辑，针对每个单元格都会调用一次
    // leftNode 表示当前单元格对应的左侧树节点，topNode 是对应的上方树节点
  }}
  render={(value, leftNode, topNode) => {
    // 可选的 自定义的渲染逻辑
    return value
  }}
/>
```

CrossTable 这里就不再过多介绍了，表格的效果可见本文上面透视表 demo 动图。ali-react-table/pivot 还提供了一些透视数据处理方法，方便在前端进行一些简单的数据聚合运算并将其展示到表格上，具体可见 [相关文档](https://ali-react-table.js.org/?path=/docs/%E4%BA%A4%E5%8F%89%E4%B8%8E%E9%80%8F%E8%A7%86)。

## 小结

ali-react-table 的主要定位是提供高性能、高可定制性的 React 表格，方便上层进行封装和定制并接入到不同的系统和业务中。ali-react-table 没有绑定特定的 React 组件库，仅依赖了一些工具类库（例如 rxjs、styled-components、classnames），配合 webpack/rollup 的 tree shaking 特性，引入 ali-react-table 所产生的额外 JS 体积非常有限。

除了上面介绍的一些功能之外，ali-react-table 还提供了许多实用功能，包括表格操作栏、Excel 导出功能等（部分拓展功能需要安装 fusion 组件库）。组件已经[在 GitHub 上开源](https://github.com/alibaba/ali-react-table)，后续我们也会不断更新和维护 ali-react-table 的文档，添加更多的代码示例，欢迎大家使用~
