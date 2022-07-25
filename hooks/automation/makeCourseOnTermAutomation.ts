import { gql, request } from 'graphql-request'
import { FlowType, FlowVisibility } from 'types/Flow'

export default async function makeCourseOnTermAutomation(
  automationId: number,
  courseOnTermId: number,
  folderId: string,
  defaultType: FlowType,
  defaultVisibility: FlowVisibility,
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
      DefaultType: defaultType,
      DefaultVisibility: defaultVisibility,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
