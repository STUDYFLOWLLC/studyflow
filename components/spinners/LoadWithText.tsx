import MainSpinner from 'components/spinners/MainSpinner'
import { SpinnerSizes } from 'interfaces/Loading'

interface Props {
  size: SpinnerSizes
  text: string
}

export default function LoadWithText({ size, text }: Props) {
  if (size === SpinnerSizes.large) {
    return (
      <div className="flex flex-col align-middle items-center justify-center mt-4">
        <p className="text-center text-lg mr-4 mb-4 ">{text}</p>
        <MainSpinner size={size} />
      </div>
    )
  }
  return (
    <div className="flex mt-4">
      <p className="text-lg mr-4">{text}</p>
      <MainSpinner size={size} />
    </div>
  )
}
