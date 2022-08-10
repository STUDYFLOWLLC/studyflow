import request, { gql } from 'graphql-request'
import { FlowType, FlowVisibility } from 'types/Flow'

export const defaultBody = [
  {
    type: 'p',
    children: [
      {
        text: '',
      },
    ],
  },
]

export default async function makeFlow(
  flowId: string,
  type: FlowType,
  courseOnTermId: number,
  visibility?: FlowVisibility,
  title?: string,
  body?: string,
) {
  console.log(courseOnTermId)
  const mutation = gql`
    mutation Mutation($data: FlowCreateInput!) {
      createFlow(data: $data) {
        FlowID
      }
    }
  `

  const variables = {
    data: {
      FlowID: flowId,
      Type: type,
      Title: title || 'Untitled',
      Body: body || JSON.stringify(defaultBody),
      Visibility: visibility || FlowVisibility.PRIVATE,
      FK_CourseOnTerm: {
        connect: {
          CourseOnTermID: courseOnTermId,
        },
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
