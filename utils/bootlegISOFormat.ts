import { format } from 'date-fns'

export default function bootlegISOFormat(date: Date): string {
  const first = format(new Date(), 'yyyy-MM-dd')
  const second = format(new Date(), 'HH:mm')
  return `${first}T${second}`
}
