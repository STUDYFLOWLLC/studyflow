import applewhite from 'images/apple-white.svg'
import Image from 'next/image'

export default function AppleButton() {
  return (
    <div className="my-4 flex h-12 cursor-pointer items-center bg-black hover:bg-stone-800 w-96 text-white font-semibold py-2 px-4 rounded-lg text-base">
      <div className="absolute mb-0.5">
        <Image src={applewhite} />
      </div>
      <span className="w-full text-center">Continue with Apple</span>
    </div>
  )
}
