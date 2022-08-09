import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { PublicUser } from 'types/Social'

export interface BugReport {
  BugReportID: number
  CreatedTime: string
  FixedTime: string
  Title: string
  Body: string
  FK_User?: PublicUser
}

interface Ret {
  bugReports: BugReport[]
  bugReportsLoading: boolean
  bugReportsError: string | null
  mutateBugReports: KeyedMutator<any>
}

export default function useBugReports(userId?: number): Ret {
  const query = gql`
    query Query(
      $orderBy: [BugReportOrderByWithRelationInput!]
      $where: BugReportWhereInput
    ) {
      bugReports(orderBy: $orderBy, where: $where) {
        BugReportID
        CreatedTime
        FixedTime
        FK_User {
          UserID
          ProfilePictureLink
          Name
          Username
          FK_School {
            Name
            HasClassSupport
          }
          Bio
          About
        }
        Title
        Body
      }
    }
  `

  const variables: any = {
    orderBy: [
      {
        CreatedTime: 'desc',
      },
    ],
  }

  if (userId) {
    variables.where = {
      FK_User: {
        UserID: userId,
      },
    }
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.mutate) {
    return {
      bugReports: data.newBugReports,
      bugReportsLoading: false,
      bugReportsError: null,
      mutateBugReports: mutate,
    }
  }

  if (data?.bugReports) {
    return {
      bugReports: data.bugReports,
      bugReportsLoading: false,
      bugReportsError: null,
      mutateBugReports: mutate,
    }
  }

  return {
    bugReports: [] as BugReport[],
    bugReportsLoading: !error && !data,
    bugReportsError: error?.message,
    mutateBugReports: mutate,
  }
}
