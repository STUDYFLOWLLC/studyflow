/* eslint-disable @typescript-eslint/no-explicit-any */

import { School, TermType } from '@prisma/client'
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'

interface SchoolDetails {
  schoolDetails: School
  schoolDetailsLoading: boolean
  schoolDetailsError: any
  mutateSchoolDetails: KeyedMutator<any>
}

export default function useSchoolDetails(
  schoolId: number | undefined,
): SchoolDetails {
  const variables = {
    where: {
      SchoolID: {
        equals: schoolId,
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

  if (data?.mutate) {
    return {
      schoolDetails: data.school,
      schoolDetailsLoading: false,
      schoolDetailsError: null,
      mutateSchoolDetails: mutate,
    }
  }

  if (data?.findFirstSchool) {
    return {
      schoolDetails: data.findFirstSchool,
      schoolDetailsLoading: false,
      schoolDetailsError: error,
      mutateSchoolDetails: mutate,
    }
  }

  return {
    schoolDetails: {
      SchoolID: 0,
      Name: '',
      HasClassSupport: false,
      SearchIndex: '',
      TermType: TermType.SEMESTER,
    },
    schoolDetailsLoading: !data && !error,
    schoolDetailsError: error,
    mutateSchoolDetails: mutate,
  }
}
