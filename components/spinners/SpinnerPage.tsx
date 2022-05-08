import MainSpinner from 'components/spinners/MainSpinner'

export default function SpinnerPage() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="mb-12 w-full flex justify-center">
        <div className="flex flex-col">
          <MainSpinner />
        </div>
      </div>
    </div>
  )
}
