import googlerainbow from 'images/google-rainbow.svg'
import Image from 'next/image'

export default function GoogleButton() {
  return (
    <div className="flex h-10 cursor-pointer items-center ring-1 ring-gray-200 hover:bg-gray-100 w-80 text-black font-bold py-2 px-4 rounded-lg">
      <div className="absolute mt-1 ml-0.5">
        <Image src={googlerainbow} />
      </div>
      <span className="w-full text-center ml-2">Continue with Google</span>
    </div>
  )
}
