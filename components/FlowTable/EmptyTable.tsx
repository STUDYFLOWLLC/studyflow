import PlusButton from 'components/buttons/PlusButton'
import logo from 'images/logo.svg'
import Image from 'next/image'

export default function EmptyTable() {
  return (
    <div className="prose mx-auto flex flex-col items-center mt-8 pb-16">
      <div className="w-16 h-16">
        <Image src={logo} alt="wave" />
      </div>
      <h2 className="mt-2">Nothing yet!</h2>
      <div className="flex items-center">
        <p className="m-0">Use the</p>{' '}
        <div className="mx-4">
          <PlusButton disabled />
        </div>
        <p className="m-0">
          in the top right corner to create your first flow.
        </p>
      </div>
    </div>
  )
}
