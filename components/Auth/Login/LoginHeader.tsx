import logo from 'images/wave.svg'
import Image from 'next/image'

export default function LoginHeader() {
  return (
    <div>
      <Image width={48} height={48} src={logo} alt="Workflow" />
      <h2 className="mt-3 text-3xl font-extrabold">Welcome to Studyflow</h2>
    </div>
  )
}
