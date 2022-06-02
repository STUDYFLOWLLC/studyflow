import { School } from 'graphql/generated-graphql'
import { fetcher } from 'hooks/fetchers'
import useSWR from 'swr'

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
