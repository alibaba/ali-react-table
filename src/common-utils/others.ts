export function flatMap<T, U>(array: T[], callback: (value: T, index: number, array: T[]) => U[]): U[] {
  const result: U[] = []

  array.forEach((value, index) => {
    result.push(...callback(value, index, array))
  })

  return result
}

export function fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>) {
  const result: { [k in PropertyKey]: T } = {}
  for (const [key, value] of entries) {
    result[key as any] = value
  }
  return result
}
