import { BadgeCheckIcon } from '@heroicons/react/outline'
import classnames from 'classnames'
import { School } from 'graphql/generated-graphql'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  selectedSchool: School
}
export default function SchoolDisplay({ selectedSchool }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (!selectedSchool.Name) return null

  return (
    <div
      className={classnames(
        { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
        { 'bg-slate-700': theme === 'dark' },
        'w-72 sm:w-96 flex flex-col item-center align-middle p-2 rounded mt-4 mb-0',
      )}
    >
      <div className="prose w-full flex items-center justify-around">
        <h3 className="m-0">{selectedSchool.Name}</h3>
        <div
          className="tooltip tooltip-right"
          data-tip={`Studyflow officially supports ${selectedSchool.Name} and actively updates their class roster.`}
        >
          <BadgeCheckIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}
