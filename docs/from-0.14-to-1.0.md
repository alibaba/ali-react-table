# 从 0.14 升级到 1.0

1.0 采用了 sticky position 来实现左右锁列功能，表格 border-collapse 属性从 `collapse` 切换到了 `seperate`，整体 DOM 结构与表格边框的变更较大，此外对原有的 css variables 进行了简化。0.14 中的自定义样式 或是依赖 DOM 结构的代码 在升级到 1.0 的过程中需要重新验证。

1.0 正式移除了 `ali-react-table/biz` 的导入入口，从该入口导入符号将导致 webpack 编译失败。0.14 版本中不会失败，只会产生警告，按照 0.14 版本中的警告信息进行相应修改即可。
