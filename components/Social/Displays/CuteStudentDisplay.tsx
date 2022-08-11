import ProfilePicOrPlaceholder from 'components/Settings/Sharing/ProfilePicOrPlaceholder'
import { PublicUser } from 'types/Social'

interface Props {
  publicUser: PublicUser
}

export default function CuteStudentDisplay({ publicUser }: Props) {
  return (
    <div className="cursor-pointer flex items-center justify-between">
      <div className="flex items-center">
        <ProfilePicOrPlaceholder
          link={publicUser.ProfilePictureLink}
          name={publicUser.Name}
          dimension="w-8 h-8"
          textSize="text-sm"
        />
        <div className="ml-2 text-md truncate flex flex-col">
          <span className="font-medium text-md">{publicUser.Name} </span>
          <span className="text-sm txt-info">@{publicUser.Username}</span>
        </div>
      </div>
    </div>
  )
}
