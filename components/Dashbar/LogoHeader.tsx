import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props {
  showHideButton: boolean
  setShowHideButton: Dispatch<SetStateAction<boolean>>
  setShowDashBar: Dispatch<SetStateAction<boolean>>
}
export default function LogoHeader({
  showHideButton,
  setShowHideButton,
  setShowDashBar,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex items-center justify-between flex-shrink-0 px-4">
      <div className="flex items-center flex-shrink-0">
        <img src="/logo.svg" className="w-auto h-8" alt="wave" />
        <p className="mx-2 font-semibold text-xl">Studyflow</p>
      </div>
      {showHideButton && (
        <ChevronDoubleLeftIcon
          className={classNames(
            {
              'text-gray-500 hover:text-gray-600 hover:bg-gray-200':
                theme === 'light',
            },
            {
              'text-gray-400 hover:text-gray-300 hover:bg-slate-700':
                theme === 'dark',
            },
            'w-7 h-7 p-1 mb-1 cursor-pointer rounded',
          )}
          onClick={() => setShowDashBar(false)}
        />
      )}
    </div>
  )
}
