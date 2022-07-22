import request, { gql } from 'graphql-request'

export default async function MakeAutomationLog(
  courseOnTermAutomationId: number,
  success: boolean,
  message: string,
) {
  const mutation = gql`
    mutation Mutation($data: AutomationLogCreateInput!) {
      createAutomationLog(data: $data) {
        AutomationLogID
      }
    }
  `

  const variables = {
    data: {
      FK_CourseOnTermAutomation: {
        connect: {
          CourseOnTermAutomationID: courseOnTermAutomationId,
        },
      },
      Success: success,
      Message: message,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
