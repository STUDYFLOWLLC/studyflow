import { gql, request } from 'graphql-request'

export default async function makeCourseOnTermAutomation(
  automationId: number,
  courseOnTermId: number,
  folderId: string,
) {
  const mutation = gql`
    mutation Mutation($data: CourseOnTermAutomationCreateInput!) {
      createCourseOnTermAutomation(data: $data) {
        CourseOnTermAutomationID
      }
    }
  `

  const variables = {
    data: {
      FK_Automation: {
        connect: {
          AutomationID: automationId,
        },
      },
      FK_CourseOnTerm: {
        connect: {
          CourseOnTermID: courseOnTermId,
        },
      },
      FolderID: folderId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
