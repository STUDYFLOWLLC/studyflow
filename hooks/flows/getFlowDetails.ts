import { FlowType } from '@prisma/client'
import { gql, request } from 'graphql-request'
import { FlowVisibility } from 'types/Flow'
import { PublicUser } from 'types/Social'

export interface PublicFlowDetail {
  FlowID: string
  CreatedTime: string
  UserEnteredDate: string
  Type: FlowType
  Title: string
  Body: string
  Visibility: FlowVisibility
  WasAutomated: boolean
  FK_CourseOnTerm: {
    Nickname?: string
    Color: string
    FK_Course: {
      Code: string
      Term: string
    }
    FK_Term: {
      FK_School: {
        Name: string
      }
      FK_User: PublicUser
    }
    FK_FlowView: number[]
  }
}

export default async function setBasicProfile(FlowID: string) {
  const query = gql`
    query FindFirstFlow($where: FlowWhereInput) {
      findFirstFlow(where: $where) {
        FlowID
        CreatedTime
        Type
        Title
        Body
        Visibility
        UserEnteredDate
        WasAutomated
        FK_CourseOnTerm {
          Nickname
          Color
          FK_Course {
            Title
            Term
          }
          FK_Term {
            FK_School {
              Name
            }
            FK_User {
              UserID
              ProfilePictureLink
              Name
              Username
              FK_School {
                Name
              }
            }
          }
        }
        FK_FlowView {
          FlowViewID
        }
      }
    }
  `

  const variables = {
    where: {
      FlowID: {
        equals: FlowID,
      },
    },
  }

  const data = await request(
    process.env.NODE_ENV === 'production'
      ? 'https://studyflow.ai/api/graphql'
      : 'http://localhost:3000/api/graphql',
    query,
    variables,
  )
  if (data.findFirstFlow) {
    return data.findFirstFlow as PublicFlowDetail
  }
  return undefined
}
