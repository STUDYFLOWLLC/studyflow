export default function shorten(str: string | undefined, maxLength: number) {
  if (str === undefined) return ''
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength).trim()} ..`
  }
  return str
}
