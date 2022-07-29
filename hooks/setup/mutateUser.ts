import { gql, request } from 'graphql-request'
import { FlowVisibility } from 'types/Flow'
import { SetupSteps } from 'types/SetupSteps'

export async function mutateName(email: string, name: string) {
  const query = gql`
    mutation Mutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
      updateUser(data: $data, where: $where) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      Name: {
        set: name,
      },
    },
    where: {
      Email: email,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}

export async function mutateUserEmail(email: string, newEmail: string) {
  const query = gql`
    mutation Mutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
      updateUser(data: $data, where: $where) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      Email: {
        set: newEmail,
      },
    },
    where: {
      Email: email,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}

export async function mutateUsername(email: string, username: string) {
  const query = gql`
    mutation Mutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
      updateUser(data: $data, where: $where) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      Username: {
        set: username,
      },
    },
    where: {
      Email: email,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}

export async function mutateProfilePictureLink(email: string, link: string) {
  const query = gql`
    mutation Mutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
      updateUser(data: $data, where: $where) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      ProfilePictureLink: {
        set: link,
      },
    },
    where: {
      Email: email,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}

export async function mutateSetupStep(email: string, setupStep: SetupSteps) {
  const query = gql`
    mutation Mutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
      updateUser(data: $data, where: $where) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      SetupStep: {
        set: setupStep,
      },
    },
    where: {
      Email: email,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}

export async function mutateUserDefaultVisibility(
  email: string,
  defaultVisibility: FlowVisibility,
) {
  const query = gql`
    mutation Mutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
      updateUser(data: $data, where: $where) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      DefaultVisibility: {
        set: defaultVisibility,
      },
    },
    where: {
      Email: email,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}
