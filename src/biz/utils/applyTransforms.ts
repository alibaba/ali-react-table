import { Transform } from '../interfaces'

export default function applyTransforms<T>(input: T, ...transforms: Transform<T>[]) {
  return transforms.reduce((v, fn) => fn(v), input)
}
