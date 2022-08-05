import * as chrono from 'chrono-node'

const custom = chrono.casual.clone()

export function changeTimezone(date: Date, timezone: string) {
  // suppose the date is 12:00 UTC
  const invdate = new Date(
    date.toLocaleString('en-US', {
      timeZone: timezone,
    }),
  )

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  const diff = date.getTime() - invdate.getTime()

  // so 12:00 in Toronto is 17:00 UTC
  return new Date(date.getTime() - diff) // needs to substract
}

const now = changeTimezone(new Date(), 'America/New_York')

// Todo: add valentines day, halloween, thanksgiving, new years, new years eve (with auto next year if already passed)
custom.parsers.push({
  pattern: () => /\bChristmas\b/i,
  extract: () => ({
    day: 25,
    month: 12,
  }),
})

custom.parsers.push(
  {
    pattern: () => /\bTod\b/i,
    extract: () => ({
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    }),
  },
  {
    pattern: () => /\bTom\b/i,
    extract: () => ({
      day: now.getDate() + 1,
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    }),
  },
  {
    pattern: () => /\bSomeday\b/i,
    extract: () => ({
      day: now.getDate(),
      month: now.getMonth() + 3,
      year: now.getFullYear(),
    }),
  },
)

custom.refiners.push({
  refine: (context, results) => {
    results.forEach((result) => {
      result.start.assign('hour', now.getHours())
      result.start.assign('minute', now.getMinutes())
      result.start.assign('second', now.getSeconds())
    })
    return results
  },
})

export default function dateParser(date: string): chrono.ParsedResult[] {
  console.log(chrono.parseDate(date))
  const parsed = custom.parse(date, undefined, { forwardDate: true })
  console.log(parsed)
  return parsed
}
