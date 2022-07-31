import request, { gql } from 'graphql-request'

/**
 * Check the backend to see if the given username is unique.
 * @param username The username to check
 * @returns whether or not the username is unique
 */
export default async function checkUniqueUsername(
  username: string,
  userId: number,
): Promise<boolean> {
  const query = gql`
    query Query($where: UserWhereUniqueInput!) {
      user(where: $where) {
        UserID
      }
    }
  `

  const variables = {
    where: {
      Username: username,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data?.user === null || data?.user?.UserID === userId
}
