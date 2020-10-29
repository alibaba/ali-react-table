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

export const arrayUtils = {
  diff(arr1: string[], arr2: Iterable<string>) {
    const set = new Set(arr2)
    return arr1.filter((x) => !set.has(x))
  },
  merge(arr1: string[], arr2: string[]) {
    const set = new Set(arr1)
    return arr1.concat(arr2.filter((x) => !set.has(x)))
  },
  stabilize(prevArray: string[], targetArray: string[]) {
    const prevSet = new Set(prevArray)
    const nextSet = new Set(targetArray)
    const existing = prevArray.filter((v) => nextSet.has(v))
    const adding = targetArray.filter((v) => !prevSet.has(v))
    return existing.concat(adding)
  },
} as const

export function always<T>(value: T) {
  return (...args: any[]) => value
}
