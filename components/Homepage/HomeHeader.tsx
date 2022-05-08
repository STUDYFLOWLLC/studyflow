import Logo from 'images/wave.svg'
import Image from 'next/image'

const HomeHeader = () => (
  <div className="flex justify-between">
    <div className="flex items-center mx-8 mt-8">
      <Image src={Logo} alt="wave with clock" />
      <p className="mx-4 font-medium text-xl">Studyflow</p>
    </div>
    <div className="flex items-center mx-8 mt-8">
      <span className="mx-8 cursor-pointer">Login</span>
      <span className="btn bg-blue-400 text-white">Try for free</span>
    </div>
  </div>
)

export default HomeHeader
