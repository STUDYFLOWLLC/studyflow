import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ViewTypes } from 'utils/flows/sortFlows'
import FlowTableNav from './FlowTableNav'

interface Props {
  viewing: ViewTypes
  setViewing: (viewing: ViewTypes) => void
}

export default function FlowTableHeader({ viewing, setViewing }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <thead
      className={classNames(
        {
          'border-gray-200 bg-gray-50 text-gray-500': theme === 'light',
        },
        'border-b border-t relative w-full',
      )}
    >
      <FlowTableNav viewing={viewing} setViewing={setViewing} />
      <th className="hidden md:table-cell px-6 py-3 border-b text-center text-xs font-medium uppercase tracking-wider">
        Date
      </th>
      <th className="hidden md:table-cell px-1 py-3 border-b text-xs font-medium uppercase tracking-wider">
        Next Review
      </th>
      <td className="md:table-cell pr-6 py-3 border-b text-right text-xs font-medium  uppercase tracking-wider" />
    </thead>
  )
}
