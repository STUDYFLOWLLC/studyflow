import request, { gql } from 'graphql-request'
import { Friendship, PublicUser } from 'types/Social'

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
          FK_UserFrom {
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

  if (data.user) {
    const friendShips = data.user.FK_FriendshipsInitiated.concat(
      data.user.FK_FriendshipsAccepted,
    ) as Friendship[]
    return {
      UserID: data.user.UserID,
      ProfilePictureLink: data.user.ProfilePictureLink,
      Name: data.user.Name,
      Username: data.user.Username,
      FK_School: data.user.FK_School,
      Bio: data.user.Bio,
      About: data.user.About,
      Friends: {
        requested: friendShips.filter(
          (friendship) =>
            friendship.FK_UserFrom.Username === username &&
            friendship.AcceptedTime === null,
        ) as Friendship[],
        accepted: friendShips.filter(
          (friendship) => friendship.AcceptedTime !== null,
        ) as Friendship[],
        incoming: friendShips.filter(
          (friendship) =>
            friendship.FK_UserTo.Username === username &&
            friendship.AcceptedTime === null,
        ) as Friendship[],
      },
    } as unknown as PublicUser
  }
  return undefined
}
