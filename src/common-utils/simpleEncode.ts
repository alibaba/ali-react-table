export default function simpleEncode(path: string[]) {
  if (path.length === 0) {
    return 'key:@total@'
  }
  return `key:${path.join(' ')}`
}
