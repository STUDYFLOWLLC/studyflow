import ProfilePicOrPlaceholder from 'components/Settings/Sharing/ProfilePicOrPlaceholder'
import { PublicUser } from 'types/Social'

interface Props {
  publicUser: PublicUser
}

export default function BasicStudentDisplay({ publicUser }: Props) {
  return (
    <div className="w-64 cursor-pointer flex items-center">
      <ProfilePicOrPlaceholder
        link={publicUser.ProfilePictureLink}
        name={publicUser.Name}
        dimension="w-8 h-8"
        textSize="text-md"
      />
      <div className="ml-2 truncate flex flex-col">
        <span className="text-xs">
          {publicUser.Name}{' '}
          <span className="font-medium">@{publicUser.Username}</span>
        </span>
        <span className="text-2xs">{publicUser.FK_School.Name}</span>
      </div>
    </div>
  )
}
