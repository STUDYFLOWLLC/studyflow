import PlusButton from 'components/buttons/PlusButton'
import logo from 'images/logo.svg'
import Image from 'next/image'

interface Props {
  type: 'All' | number | 'Trash'
  courseName: string | undefined
}

export default function EmptyTable({ type, courseName }: Props) {
  return (
    <div className="prose mx-auto flex flex-col items-center mt-8 pb-16">
      <div className="w-16 h-16">
        <Image src={logo} alt="wave" />
      </div>
      {type === 'Trash' && (
        <>
          <h2 className="mt-2 mb-4">A perfectionist!</h2>
          <div className="flex items-center">
            <p className="m-0">Nothing in trash. Keep up the organization.</p>
          </div>
        </>
      )}
      {type !== 'Trash' && (
        <>
          <h2 className="mt-2 mb-4">Nothing yet!</h2>
          <div className="flex items-center">
            <p className="m-0">Use the</p>{' '}
            <div className="mx-4">
              <PlusButton disabled />
            </div>
            <p className="m-0">
              in the top right corner to{' '}
              {type === 'All' ? (
                <span>create a flow.</span>
              ) : (
                <span>create a flow in {courseName}</span>
              )}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
