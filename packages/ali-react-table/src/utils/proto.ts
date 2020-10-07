const factorySymbol = Symbol('factory-symbol')

function isProtoFactory(v: any) {
  return v && v[factorySymbol]
}

function proto(baseRecord: any, ensureArray: boolean | 'auto' = 'auto') {
  const baseKeys = Object.keys(baseRecord)

  function process(record: any) {
    const result = Object.assign({}, record)
    baseKeys.forEach((key) => {
      if (result[key] === proto.empty) {
        delete result[key]
        return
      }
      const base = baseRecord[key]
      if (isProtoFactory(base)) {
        result[key] = base(result[key])
      } else {
        result[key] = result[key] ?? base
      }
    })
    return result
  }

  function factory(arg: any) {
    const isEnsureArray = ensureArray === 'auto' ? Array.isArray(arg) : ensureArray

    if (isEnsureArray) {
      if (arg == null) {
        return []
      }
      return arg.map(process)
    } else {
      return process(arg)
    }
  }

  // @ts-ignore
  factory[factorySymbol] = true

  factory.extends = (extRecord: any) => {
    const extFactory = proto(extRecord, ensureArray)
    return (arg: any) => factory(extFactory(arg))
  }

  return factory
}

proto.empty = Symbol('proto.empty')

proto.string = ((v?: string) => {
  if (v != null && typeof v !== 'string') {
    throw new Error('must be string')
  }
  return v
}) as any
proto.string[factorySymbol] = true

proto.number = ((v?: number) => {
  if (v != null && typeof v !== 'number') {
    throw new Error('must be number')
  }
  return v
}) as any
proto.number[factorySymbol] = true

proto.notNull = ((v: any) => {
  if (v == null) {
    throw new Error('must be not null')
  }
  return v
}) as any
proto.notNull[factorySymbol] = true

proto.object = (baseRecord: any) => proto(baseRecord, false)
proto.array = (baseRecord: any) => proto(baseRecord, true)

type SameKeysWith<T> = T extends object ? { [key in keyof T]?: any } : T

interface ObjectProto<T> {
  (v: SameKeysWith<T>): T
  extends(ext: SameKeysWith<T>): ObjectProto<T>
}

interface ArrayProto<T> {
  (items: SameKeysWith<T>[]): T[]
  extends(extRecord: SameKeysWith<T>): ArrayProto<T>
}

export interface ProtoStatic {
  string(v: string): string
  number(v: number): number
  notNull<T = any>(v: any): T

  object<O extends object = any>(base: SameKeysWith<O>): ObjectProto<O>
  array<T extends object = any>(base: SameKeysWith<T>): ArrayProto<T>

  readonly empty: unique symbol
}

export default (proto as unknown) as ProtoStatic
