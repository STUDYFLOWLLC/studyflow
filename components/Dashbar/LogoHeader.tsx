import Logo from 'images/wave.svg'
import Image from 'next/image'

export default function LogoHeader() {
  return (
    <div className="flex items-center flex-shrink-0 px-6">
      <Image src={Logo} alt="wave with clock" />
      <p className="mx-3 font-semibold text-xl ">Studyflow.ai</p>
    </div>
  )
}
