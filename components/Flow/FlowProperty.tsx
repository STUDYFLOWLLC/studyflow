import { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  property: string
  value: string
}

export default function FlowProperty({ Icon, property, value }: Props) {
  return (
    <div className="flex align-middle pl-3">
      <Icon className="w-5" />
      <p className="w-24 pl-1 pr-6 py-0 my-0">{property}</p>
      <p className="pl-1 pr-6 py-0 my-0">{value}</p>
    </div>
  )
}
