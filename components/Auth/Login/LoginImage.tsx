import wavesbg from 'images/404bg.svg'
import Image from 'next/image'

export default function LoginImage() {
  return (
    <div className="bg-[url('../images/404bg.svg')] bg-cover min-h-full h-screen hidden xl:block relative w-0 flex-1">
      <div className="absolute inset-0 h-full w-full object-cover overflow-hidden">
        <Image src={wavesbg} alt="" />
      </div>
    </div>
  )
}
