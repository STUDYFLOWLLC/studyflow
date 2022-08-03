import { PublicUser } from 'types/Social'

interface Props {
  PublicUser: PublicUser | undefined
}

export default function Flows({ PublicUser }: Props) {
  return <div>THIS WILL DISPLAY THE STUDENTS FLOWS</div>
}
