/* eslint-disable no-use-before-define */

export interface PublicUser {
  UserID: number
  ProfilePictureLink: string
  Name: string
  Username: string
  FK_School: {
    Name: string
    HasClassSupport?: boolean
  }
  Bio?: string
  About?: string
  Friends?: {
    requested: Friendship[]
    accepted: Friendship[]
    incoming: Friendship[]
  }
}

export interface SmallFriend {
  FriendshipID: number
  AcceptedTime: string
  Friend: PublicUser
}

export interface Friendship {
  FriendshipID: number
  SentTime: string
  AcceptedTime: string | null
  FK_UserFrom: PublicUser
  FK_UserTo: PublicUser
}
