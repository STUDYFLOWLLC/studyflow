import { School } from 'graphql/generated-graphql'
import useSWR from 'swr'
import { fetcher } from './fetchers'

interface SchoolExport {
  schools: [School]
  isLoading: boolean
  isError: any
}

export default function useSchools(): SchoolExport {
  const { data, error } = useSWR(
    `
        query Schools {
            schools {
              SchoolID
              Name
              HasClassSupport
              FK_Course {
                Code
              }
            }
          }
    `,
    fetcher,
  )

  if (data) {
    return {
      schools: data.schools,
      isLoading: !error && !data,
      isError: error,
    }
  }

  return {
    schools: data,
    isLoading: !error && !data,
    isError: error,
  }
}
