import request, { gql } from 'graphql-request'
import { FlowType, FlowVisibility } from 'types/Flow'

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

export async function mutateUserEnteredDate(
  flowId: string,
  userEnteredDate: string,
) {
  const mutation = gql`
    mutation UpdateFlow(
      $data: FlowUpdateInput!
      $where: FlowWhereUniqueInput!
    ) {
      updateFlow(data: $data, where: $where) {
        UserEnteredDate
      }
    }
  `

  const variables = {
    data: {
      UserEnteredDate: {
        set: userEnteredDate,
      },
    },
    where: {
      FlowID: flowId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateFlowVisibility(
  flowId: string,
  visibility: FlowVisibility,
) {
  const mutation = gql`
    mutation UpdateFlow(
      $data: FlowUpdateInput!
      $where: FlowWhereUniqueInput!
    ) {
      updateFlow(data: $data, where: $where) {
        Visibility
      }
    }
  `

  const variables = {
    data: {
      Visibility: {
        set: visibility,
      },
    },
    where: {
      FlowID: flowId,
    },
  }

  const data = request('/api/graphql', mutation, variables)
  return data
}

export async function mutateLastOpened(flowId: string) {
  const mutation = gql`
    mutation UpdateFlow(
      $data: FlowUpdateInput!
      $where: FlowWhereUniqueInput!
    ) {
      updateFlow(data: $data, where: $where) {
        LastOpened
      }
    }
  `

  const variables = {
    data: {
      LastOpened: {
        set: new Date().toISOString(),
      },
    },
    where: {
      FlowID: flowId,
    },
  }

  const data = request('/api/graphql', mutation, variables)
  return data
}

export async function mutateTrashFLow(flowId: string, newBool: boolean) {
  const mutation = gql`
    mutation UpdateFlow(
      $data: FlowUpdateInput!
      $where: FlowWhereUniqueInput!
    ) {
      updateFlow(data: $data, where: $where) {
        FlowID
      }
    }
  `

  const variables = {
    data: {
      Trashed: {
        set: newBool,
      },
    },
    where: {
      FlowID: flowId,
    },
  }

  const data = request('/api/graphql', mutation, variables)
  return data
}

export async function mutateDeleteFlow(flowId: string) {
  const mutation = gql`
    mutation DeleteFlow($where: FlowWhereUniqueInput!) {
      deleteFlow(where: $where) {
        FlowID
      }
    }
  `

  const variables = {
    where: {
      FlowID: flowId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateFlowUser(flowId: string, userId: number) {
  const mutation = gql`
    mutation UpdateFlow(
      $data: FlowUpdateInput!
      $where: FlowWhereUniqueInput!
    ) {
      updateFlow(data: $data, where: $where) {
        FK_UserID
      }
    }
  `

  const variables = {
    data: {
      FK_User: {
        connect: {
          UserID: userId,
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

export async function mutateTrashedMany(
  flowIds: string[],
  newTrashed: boolean,
) {
  const mutation = gql`
    mutation Mutation(
      $data: FlowUpdateManyMutationInput!
      $where: FlowWhereInput
    ) {
      updateManyFlow(data: $data, where: $where) {
        count
      }
    }
  `

  const variables = {
    data: {
      Trashed: {
        set: newTrashed,
      },
    },
    where: {
      FlowID: {
        in: flowIds,
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
