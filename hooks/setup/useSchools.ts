import { gql } from 'graphql-request'
import { School } from 'graphql/generated-graphql'
import useSWR from 'swr'

interface SchoolExport {
  schools: [School]
  isLoading: boolean
  isError: any
}

export default function useSchools(): SchoolExport {
  const { data, error } = useSWR(
    gql`
      query Schools {
        schools {
          SchoolID
          Name
          HasClassSupport
        }
      }
    `,
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
