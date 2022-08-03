import { PublicUser } from 'types/Social'

interface Props {
  PublicUser: PublicUser | undefined
}

export default function Friends({ PublicUser }: Props) {
  return <div>THIS WILL DISPLAY THE STUDENTS FRIENDS</div>
}
