import MainSpinner from 'components/spinners/MainSpinner'
import { SpinnerSizes } from 'interfaces/Loading'

interface Props {
  size: SpinnerSizes
  text: string
}

export default function LoadWithText({ size, text }: Props) {
  return (
    <div className="flex mt-4">
      <p className="text-lg mr-4">{text}</p>
      <MainSpinner size={size} />
    </div>
  )
}
