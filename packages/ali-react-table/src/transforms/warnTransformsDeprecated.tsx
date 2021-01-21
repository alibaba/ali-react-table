const warnedSet = new Set<string>()

export function warnTransformsDeprecated(apiName: string) {
  if (!warnedSet.has(apiName)) {
    warnedSet.add(apiName)
    console.warn(
      `[ali-react-table] transform 用法已经过时，请使用 pipeline 来对表格进行拓展` +
        `\n  请移除以下 API 的调用：${apiName}`,
    )
  }
}
