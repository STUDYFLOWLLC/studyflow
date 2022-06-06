import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useUserCount(SchoolID: number) {
  const query = gql`
    query Query($where: UserWhereInput) {
      aggregateUser(where: $where) {
        _count {
          UserID
        }
      }
    }
  `

  const variables = {
    where: {
      FK_SchoolID: {
        equals: SchoolID,
      },
    },
  }

  const { data, error } = useSWR([query, variables])

  if (data) {
    return {
      userCount: data.aggregateUser._count.UserID,
      userCountLoading: false,
      userCountError: error,
    }
  }

  return {
    userCount: 0,
    userCountLoading: !error && !data,
    userCountError: error,
  }
}
