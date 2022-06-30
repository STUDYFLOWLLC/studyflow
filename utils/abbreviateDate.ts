import { differenceInCalendarDays } from 'date-fns'

const monthAbbreviations = [
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
const daysOfWeekAbbreviations = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
]

export default function abbreviateDate(date: Date) {
  let retString = ''
  const daysBetweenReal = differenceInCalendarDays(date, new Date())

  // Today
  if (Math.abs(daysBetweenReal) === 0) retString = 'Today'
  // Tomorrow
  else if (daysBetweenReal === 1) retString = 'Tomorrow'
  // Yesterday
  else if (daysBetweenReal === -1) retString = 'Yesterday'
  // Numerical abbreviations
  else if (daysBetweenReal < -7 || daysBetweenReal > 14)
    retString = `${monthAbbreviations[date.getMonth()]} ${date.getDate()}`
  // Day of week (future)
  else if (daysBetweenReal > 1 && daysBetweenReal <= 7)
    retString = daysOfWeekAbbreviations[date.getDay()]
  // Day of week (future with next)
  else if (daysBetweenReal > 7)
    retString = `Next ${daysOfWeekAbbreviations[date.getDay()]}`
  // Day of week (past)
  else if (daysBetweenReal < 0)
    retString = `Last ${daysOfWeekAbbreviations[date.getDay()]}`

  return retString
}
