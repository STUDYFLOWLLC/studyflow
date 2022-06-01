import { gql, request } from 'graphql-request'

export function mutateName(email: string, name: string) {
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

  request('/api/graphql', query, variables)
}

export function mutateUsername(email: string, username: string) {
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

  request('/api/graphql', query, variables)
}

export function mutateProfilePictureLink(email: string, link: string) {
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

  request('/api/graphql', query, variables)
}
