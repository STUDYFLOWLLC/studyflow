import * as chrono from 'chrono-node'

const custom = chrono.casual.clone()
const now = new Date()

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

export default function dateParser(date: string): chrono.ParsedResult[] {
  const parsed = custom.parse(date, now, { forwardDate: true })
  return parsed
}
