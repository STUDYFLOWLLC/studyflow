import ProfilePicOrPlaceholder from 'components/Settings/Sharing/ProfilePicOrPlaceholder'
import { PublicUser } from 'types/Social'

interface Props {
  publicUser: PublicUser
}

export default function BasicStudentDisplay({ publicUser }: Props) {
  return (
    <div className="cursor-pointer flex items-center justify-between">
      <div className="flex items-center">
        <ProfilePicOrPlaceholder
          link={publicUser.ProfilePictureLink}
          name={publicUser.Name}
          dimension="w-12 h-12"
          textSize="text-md"
        />
        <div className="ml-2 truncate flex flex-col">
          <span className="font-medium text-md">{publicUser.Name} </span>
          <span className="text-sm txt-info">@{publicUser.Username}</span>
        </div>
      </div>
      <span className="text-sm">{publicUser.FK_School.Name}</span>
    </div>
  )
}
