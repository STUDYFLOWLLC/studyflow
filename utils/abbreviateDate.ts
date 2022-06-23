import { changeTimezone } from 'utils/dateParser'

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

// normalize dates for subtractions
function treatAsUTC(date: Date) {
  const result = new Date(date)
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset())
  return result
}

function daysBetween(startDate: Date, endDate: Date) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000

  return Math.trunc(
    (treatAsUTC(endDate).valueOf() - treatAsUTC(startDate).valueOf()) /
      millisecondsPerDay,
  )
}

export default function abbreviateDate(date: Date, timezone: string) {
  let retString = ''
  const daysBetweenReal = daysBetween(
    date,
    changeTimezone(new Date(), timezone),
  )

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
  else if (daysBetweenReal > 1 && daysBetweenReal < 7)
    retString = daysOfWeekAbbreviations[date.getDay()]
  // Day of week (future with next)
  else if (daysBetweenReal > 7)
    retString = `Next ${daysOfWeekAbbreviations[date.getDay()]}`
  // Day of week (past)
  else if (daysBetweenReal < 0)
    retString = `Last ${daysOfWeekAbbreviations[date.getDay()]}`

  return retString
}
