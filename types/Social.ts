export interface PublicUser {
  UserID: number
  ProfilePictureLink: string
  Name: string
  Username: string
  FK_School: {
    Name: string
  }
}

export interface Friendship {
  FriendshipID: number
  SentTime: string
  AcceptedTime: string | null
  FK_UserFrom: PublicUser
  FK_UserTo: PublicUser
}
