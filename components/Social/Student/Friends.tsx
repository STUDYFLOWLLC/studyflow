import { PublicUser } from 'types/Social'
import AcceptedFriend from '../Displays/AcceptedFriend'

interface Props {
  PublicUser: PublicUser | undefined
}

export default function Friends({ PublicUser }: Props) {
  return (
    <div>
      {PublicUser?.Friends?.map((friend) => (
        <AcceptedFriend
          key={friend.FriendshipID}
          friendship={{
            FriendshipID: friend.FriendshipID,
            SentTime: friend.SentTime,
            AcceptedTime: friend.AcceptedTime,
            FK_UserFrom: PublicUser,
            FK_UserTo: friend.Friend,
          }}
          displayUser={friend.Friend}
        />
      ))}
    </div>
  )
}
