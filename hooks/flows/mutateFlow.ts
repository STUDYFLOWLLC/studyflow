import request, { gql } from 'graphql-request'
import { FlowType } from 'types/Flow'

export async function mutateFlowTitle(flowId: string, title: string) {
  const mutation = gql`
    mutation Mutation($data: FlowUpdateInput!, $where: FlowWhereUniqueInput!) {
      updateFlow(data: $data, where: $where) {
        Title
      }
    }
  `

  const variables = {
    data: {
      Title: {
        set: title,
      },
    },
    where: {
      FlowID: flowId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateFlowCourseOnTerm(
  flowId: string,
  courseOnTermId: number,
) {
  const mutation = gql`
    mutation UpdateFlow(
      $data: FlowUpdateInput!
      $where: FlowWhereUniqueInput!
    ) {
      updateFlow(data: $data, where: $where) {
        FK_CourseOnTermID
      }
    }
  `

  const variables = {
    data: {
      FK_CourseOnTerm: {
        connect: {
          CourseOnTermID: courseOnTermId,
        },
      },
    },
    where: {
      FlowID: flowId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateFlowType(flowId: string, type: FlowType) {
  const mutation = gql`
    mutation UpdateFlow(
      $data: FlowUpdateInput!
      $where: FlowWhereUniqueInput!
    ) {
      updateFlow(data: $data, where: $where) {
        Type
      }
    }
  `

  const variables = {
    data: {
      Type: {
        set: type,
      },
    },
    where: {
      FlowID: flowId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateFlowBody(flowId: string, body: string) {
  const mutation = gql`
    mutation UpdateFlow(
      $data: FlowUpdateInput!
      $where: FlowWhereUniqueInput!
    ) {
      updateFlow(data: $data, where: $where) {
        Body
      }
    }
  `

  const variables = {
    data: {
      Body: {
        set: body,
      },
    },
    where: {
      FlowID: flowId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
