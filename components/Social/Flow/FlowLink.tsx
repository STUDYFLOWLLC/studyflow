/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useRouter } from 'next/router'

interface Props {
  name: string
  route: string
}

export default function FlowLink({ name, route }: Props) {
  const router = useRouter()

  return (
    <p
      className="mx-1 max-w-content py-1 px-2 m-0 text-xs font-semibold tracking-wider rounded-md hover:bg-info/5 cursor-pointer border"
      onClick={() => router.push(route)}
      onKeyDown={() => router.push(route)}
    >
      {name}
    </p>
  )
}
