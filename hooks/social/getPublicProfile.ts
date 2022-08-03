import request, { gql } from 'graphql-request'
import { PublicUser } from 'types/Social'

export default async function getPublicProfile(
  username: string,
): Promise<PublicUser | undefined> {
  const query = gql`
    query Query(
      $where: UserWhereUniqueInput!
      $fkFriendshipsInitiatedWhere2: FriendshipWhereInput
      $fkFriendshipsAcceptedWhere2: FriendshipWhereInput
    ) {
      user(where: $where) {
        UserID
        ProfilePictureLink
        Name
        Username
        FK_School {
          Name
          HasClassSupport
        }
        Bio
        About
        FK_FriendshipsInitiated(where: $fkFriendshipsInitiatedWhere2) {
          FriendshipID
          AcceptedTime
          FK_UserTo {
            ProfilePictureLink
            Name
            Username
            FK_School {
              Name
              HasClassSupport
            }
            Bio
            About
          }
        }
        FK_FriendshipsAccepted(where: $fkFriendshipsAcceptedWhere2) {
          FriendshipID
          AcceptedTime
          FK_UserFrom {
            UserID
            ProfilePictureLink
            Name
            FK_School {
              Name
              HasClassSupport
            }
            Bio
            About
          }
        }
      }
    }
  `

  const variables = {
    where: {
      Username: username,
    },
    fkFriendshipsInitiatedWhere2: {
      AND: [
        {
          RejectedTime: {
            not: null,
          },
        },
        {
          RemovedTime: {
            not: null,
          },
        },
        {
          CanceledTime: {
            not: {
              not: null,
            },
          },
        },
      ],
    },
    fkFriendshipsAcceptedWhere2: {
      AND: [
        {
          RejectedTime: {
            not: null,
          },
        },
        {
          RemovedTime: {
            not: null,
          },
        },
        {
          CanceledTime: {
            not: {
              not: null,
            },
          },
        },
      ],
    },
  }

  const data = await request(
    process.env.NODE_ENV === 'production'
      ? 'https://studyflow.ai/api/graphql'
      : 'http://localhost:3000/api/graphql',
    query,
    variables,
  )
  console.log(data)
  if (data.user) {
    return {
      UserID: data.user.UserID,
      ProfilePictureLink: data.user.ProfilePictureLink,
      Name: data.user.Name,
      Username: data.user.Username,
      FK_School: data.user.FK_School,
      Bio: data.user.Bio,
      About: data.user.About,
      Friends: data.user.FK_FriendshipsInitiated.concat(
        data.user.FK_FriendshipsAccepted,
      ),
    } as PublicUser
  }
  return undefined
}
