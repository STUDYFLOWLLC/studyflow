import ButtonSpinner from 'components/spinners/ButtonSpinner'

interface Props {
  show: boolean
  isValidating: boolean
  size: number
  setSize: (
    size: number | ((_size: number) => number),
  ) => Promise<any[] | undefined>
}
export default function LoadMore({ show, isValidating, size, setSize }: Props) {
  if (!show) return null

  return (
    <button
      type="button"
      className="text-sm rounded-md text-semibold hover:bg-info/30 w-32 py-0.5 px-1 ml-7 my-2 flex items-center"
      onClick={() => setSize(size + 1)}
      onKeyDown={() => setSize(size + 1)}
      disabled={isValidating}
    >
      Load more...
      <ButtonSpinner show={isValidating} />
    </button>
  )
}
