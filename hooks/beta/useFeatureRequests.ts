import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { PublicUser } from 'types/Social'

export interface FeatureRequest {
  FeatureRequestID: number
  CreatedTime: string
  ImplementedTime: string
  Title: string
  Body: string
  FK_User?: PublicUser
}

interface Ret {
  featureRequests: FeatureRequest[]
  featureRequestsLoading: boolean
  featureRequestsError: string | null
  mutateFeatureRequests: KeyedMutator<any>
}

export default function useFeatureRequests(userId?: number): Ret {
  const query = gql`
    query Query(
      $orderBy: [FeatureRequestOrderByWithRelationInput!]
      $where: FeatureRequestWhereInput
    ) {
      featureRequests(orderBy: $orderBy, where: $where) {
        FeatureRequestID
        CreatedTime
        ImplementedTime
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
      featureRequests: data.newFeatureRequests,
      featureRequestsLoading: false,
      featureRequestsError: null,
      mutateFeatureRequests: mutate,
    }
  }

  if (data?.featureRequests) {
    return {
      featureRequests: data.featureRequests,
      featureRequestsLoading: false,
      featureRequestsError: null,
      mutateFeatureRequests: mutate,
    }
  }

  return {
    featureRequests: [] as FeatureRequest[],
    featureRequestsLoading: !error && !data,
    featureRequestsError: error?.message,
    mutateFeatureRequests: mutate,
  }
}
