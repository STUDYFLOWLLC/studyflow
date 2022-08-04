import request, { gql } from 'graphql-request'
import { PublicUser, SmallFriend } from 'types/Social'

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
          SentTime
          AcceptedTime
          FK_UserTo {
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
          }
        }
        FK_FriendshipsAccepted(where: $fkFriendshipsAcceptedWhere2) {
          FriendshipID
          SentTime
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
            equals: null,
          },
        },
        {
          RemovedTime: {
            equals: null,
          },
        },
        {
          CanceledTime: {
            equals: null,
          },
        },
      ],
    },
    fkFriendshipsAcceptedWhere2: {
      AND: [
        {
          RejectedTime: {
            equals: null,
          },
        },
        {
          RemovedTime: {
            equals: null,
          },
        },
        {
          CanceledTime: {
            equals: null,
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

  if (data.user) {
    console.log(data)
    const friendships = data.user.FK_FriendshipsInitiated.concat(
      data.user.FK_FriendshipsAccepted,
    ) as SmallFriend[]
    return {
      UserID: data.user.UserID,
      ProfilePictureLink: data.user.ProfilePictureLink,
      Name: data.user.Name,
      Username: data.user.Username,
      FK_School: data.user.FK_School,
      Bio: data.user.Bio,
      About: data.user.About,
      Friends: friendships,
    } as unknown as PublicUser
  }
  return undefined
}
