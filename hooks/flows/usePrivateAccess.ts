import { gql } from 'graphql-request'
import useSWR from 'swr'

interface Intermediate {
  FK_StudyGroup: {
    FK_UserID: number
  }
}

interface Ret {
  privateAccess: number[]
  privateAccessLoading: boolean
  privateAccessError: any
}

export default function usePrivateAccess(userId: number | undefined): Ret {
  const query = gql`
    query UserOnStudyGroups($where: UserOnStudyGroupWhereInput) {
      userOnStudyGroups(where: $where) {
        FK_StudyGroup {
          FK_UserID
        }
      }
    }
  `

  const variables = {
    where: {
      FK_UserID: {
        equals: userId,
      },
    },
  }

  const { data, error } = useSWR(userId ? [query, variables] : null)

  if (data?.userOnStudyGroups?.length !== undefined) {
    return {
      privateAccess: [userId || 0].concat(
        data.userOnStudyGroups.map(
          (userOnStudyGroup: Intermediate) =>
            userOnStudyGroup.FK_StudyGroup.FK_UserID,
        ),
      ),
      privateAccessLoading: false,
      privateAccessError: null,
    }
  }

  return {
    privateAccess: [] as number[],
    privateAccessLoading: !data && !error,
    privateAccessError: error,
  }
}
