import { TermType } from 'types/School'

const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const getSeason = (d: Date) => seasons[Math.floor((d.getMonth() / 12) * 4) % 4]
const nextSeason = (d: Date) =>
  seasons[(Math.floor((d.getMonth() / 12) * 4) + 1) % 4]

export default function getTermNameFromTermType(termType: TermType) {
  const date = new Date()
  const year = date.getFullYear()
  const season = getSeason(date)
  const previousSeason = getSeason(date)

  switch (termType) {
    case 'QUARTER':
      if (season === 'Summer') return `Fall ${year}`
      return `${season} ${year}`
    case 'TRIMESTER':
      if (season === 'Summer') return `Fall ${year}`
      return `${season} ${year}`
    case 'SEMESTER':
      if (season === 'Summer' || season === 'Fall') {
        return `Fall ${year}`
      }
      return `Spring ${year}`
    case 'SUMMER':
      return `Summer ${year}`
    default:
      return `${season} ${year}`
  }
}
