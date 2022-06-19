const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export default function convertTimeStampToDate(timeStamp: string): string {
  const date = new Date(timeStamp)
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}
