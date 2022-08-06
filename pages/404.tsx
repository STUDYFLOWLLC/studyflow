import CMDRaw from 'components/CMDPalette/CMDRaw'
import { useState } from 'react'
import { ActionType, QuickAction } from 'types/CMDPalette'

export default function FourOFour() {
  const [query, setQuery] = useState('')
  const [selectedAction, setSelectedAction] = useState<QuickAction | null>(null)

  return (
    <div className="bg-[url('../images/404bg.svg')] bg-cover min-h-full h-screen">
      <div className="flex flex-col justify-end h-screen p-2">
        <div className="h-80 max-h-80 mt-4">
          <CMDRaw
            placeholder="Search for pages, flows, etc."
            include={[ActionType.JUMPTO]}
            query={query}
            setQuery={setQuery}
            selectedAction={selectedAction}
            setSelectedAction={setSelectedAction}
          />
        </div>
        <div>
          <div className="sm:flex items-baseline" style={{ color: '#D4F6F2' }}>
            <p className="leading-none mt-36 sm:mt-0 sm:leading-normal text-9xl md:text-10xl lg:text-11xl font-semibold md:mr-2 lg:mr-4">
              404
            </p>{' '}
            <p className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Page not found.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
