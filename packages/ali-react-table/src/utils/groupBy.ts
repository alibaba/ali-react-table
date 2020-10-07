export default function groupBy<T, K extends string>(list: T[], iteratee: (t: T) => K) {
  const groups: { [key in K]: T[] } = {} as any
  for (const item of list) {
    const key = iteratee(item)
    if (groups[key] == null) {
      groups[key] = []
    }
    groups[key].push(item)
  }
  return groups
}
