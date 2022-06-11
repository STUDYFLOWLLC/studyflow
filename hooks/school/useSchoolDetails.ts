import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useSchoolDetails(schoolId: number | undefined) {
  const variables = {
    where: {
      SchoolID: {
        equals: 1183,
      },
    },
  }

  const { data, error, mutate } = useSWR(
    schoolId
      ? [
          gql`
            query Query($where: SchoolWhereInput) {
              findFirstSchool(where: $where) {
                SchoolID
                Name
                HasClassSupport
                SearchIndex
                TermType
              }
            }
          `,
          variables,
        ]
      : null,
  )

  if (data && data.findFirstSchool) {
    return {
      schoolDetails: data.findFirstSchool,
      schoolDetailsLoading: false,
      schoolDetailsError: error,
      mutateSchoolDetails: mutate,
    }
  }

  return {
    schoolDetails: data,
    schoolDetailsLoading: !data && !error,
    schoolDetailsError: error,
    mutateSchoolDetails: mutate,
  }
}
