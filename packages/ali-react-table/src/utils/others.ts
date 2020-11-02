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
} as const

export function always<T>(value: T) {
  return (...args: any[]) => value
}
