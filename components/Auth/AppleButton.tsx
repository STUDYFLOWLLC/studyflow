import applewhite from 'images/apple-white.svg'
import Image from 'next/image'

export default function AppleButton() {
  return (
    <div className="my-2 flex h-10 cursor-pointer items-center bg-black hover:bg-stone-800 w-80 text-white font-bold py-2 px-4 rounded-lg">
      <div className="absolute mb-0.5">
        <Image src={applewhite} />
      </div>
      <span className="w-full text-center">Continue with Apple</span>
    </div>
  )
}
