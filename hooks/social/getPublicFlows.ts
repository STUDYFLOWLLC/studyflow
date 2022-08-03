import request, { gql } from 'graphql-request'
import { DashFlow } from 'hooks/flows/useDashFlows'

export default async function get10PublicFlows(
  username: string,
): Promise<DashFlow[]> {
  const query = gql`
    query Query(
      $where: FlowWhereInput
      $take: Int
      $orderBy: [FlowOrderByWithRelationInput!]
    ) {
      flows(where: $where, take: $take, orderBy: $orderBy) {
        FlowID
        Title
        CreatedTime
        LastOpened
        UserEnteredDate
        Type
        Visibility
        Trashed
        WasAutomated
        FK_CourseOnTerm {
          CourseOnTermID
          Nickname
          Color
          FK_Course {
            Code
          }
        }
        FK_UserID
      }
    }
  `

  const variables = {
    where: {
      AND: [
        {
          Visibility: {
            equals: 'PUBLIC',
          },
        },
        {
          FK_CourseOnTerm: {
            is: {
              FK_Term: {
                is: {
                  FK_User: {
                    is: {
                      Username: {
                        equals: username,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        {
          DeletedTime: {
            equals: null,
          },
        },
      ],
    },
    take: 10,
    orderBy: [
      {
        UserEnteredDate: 'desc',
      },
    ],
  }

  const data = await request(
    process.env.NODE_ENV === 'production'
      ? 'https://studyflow.ai/api/graphql'
      : 'http://localhost:3000/api/graphql',
    query,
    variables,
  )

  if (data?.flows?.length !== undefined) {
    return data.flows as DashFlow[]
  }

  return [] as DashFlow[]
}
